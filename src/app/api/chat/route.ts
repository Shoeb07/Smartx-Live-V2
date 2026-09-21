import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// ── SMARTX SYSTEM PROMPT ──────────────────────────────────────────────────────
// This is the "brain" of the widget. Edit this to update how the AI talks
// about SmartX — pricing, services, team, process etc.
const SYSTEM_PROMPT = `You are the SmartX Solutions project advisor — a helpful, friendly, and knowledgeable assistant on the SmartX Solutions website. Your ONLY job is to help potential clients understand if SmartX is right for them, give them honest estimates, and capture their contact details so the SmartX team can follow up.

ABOUT SMARTX SOLUTIONS:
- Full-service digital product agency based in Hyderabad, India
- We build web apps, mobile apps, UI/UX design, cloud solutions, AI integration
- Contact: business@smartxsolutions.in | +91 93467 54163
- Real projects: AG Traders website (agtraders.info), Scholarship Management App

OUR SERVICES & HONEST PRICING:
1. Business Website (5–8 pages, mobile-first, SEO): ₹50,000 – ₹1,50,000 | 3–5 weeks
2. Web Application / SaaS MVP: ₹2,00,000 – ₹8,00,000 | 8–16 weeks
3. Mobile App (Flutter, iOS + Android): ₹3,00,000 – ₹10,00,000 | 10–18 weeks
4. E-Commerce Store (custom, Razorpay/Stripe): ₹1,50,000 – ₹4,00,000 | 6–10 weeks
5. UI/UX Design only: ₹75,000 – ₹2,50,000 | 3–6 weeks
6. AI feature integration into existing product: ₹1,00,000 – ₹3,00,000 | 4–8 weeks

PAYMENT TERMS:
- 40% upfront, 30% at midpoint, 30% on delivery
- All prices exclude 18% GST
- Free discovery call before any commitment

OUR PROCESS:
Discovery → Design → Development (2-week sprints) → Launch → Support
Client owns all code and IP on final payment. NDA available on request.

LEAD CAPTURE RULES (VERY IMPORTANT):
- After answering 2–3 questions, ALWAYS offer a free discovery call
- When offering the call, ask for their name and WhatsApp number
- Format the capture like this exactly:
  "To get you an exact quote, I'd love to connect you with our team.
   Can I get your name and WhatsApp number? Arjun will reach out within 2 hours. 📱"
- If they give their details, respond with:
  "Perfect! [Name], our team will WhatsApp you at [number] within 2 hours. 
   Looking forward to hearing more about your project! 🚀"
- Then end with: "##LEAD_CAPTURED##[name]|[number]##" (this is for our system)

CONVERSATION RULES:
1. Be warm, concise, and human — not robotic
2. Always give a real price range — never dodge the question with "it depends"
3. Ask one focused question at a time to understand their project
4. After understanding their project, give a specific estimate with timeline
5. Always end messages with ONE clear next step or question
6. Use simple language — no jargon unless they use it first
7. Keep responses under 80 words unless giving a detailed breakdown
8. Use emojis sparingly — only 1 per message max
9. If asked something outside web/app development, politely redirect
10. Never badmouth competitors

QUALIFYING QUESTIONS TO ASK (pick the most relevant):
- "Is this a new build or improving an existing product?"
- "Do you have a rough budget range in mind?"
- "When are you hoping to launch?"
- "Do you have designs ready or need design from scratch?"
- "Is this for your own business or a client?"

Remember: Your goal is not just to answer questions — it is to make the visitor feel understood and excited to work with SmartX, then capture their contact details.`

// Rate limiting — simple in-memory store (resets on server restart)
// For production, use Redis or Upstash
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const limit = rateLimitMap.get(ip)

  if (!limit || now > limit.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60_000 }) // 1 min window
    return false
  }

  if (limit.count >= 20) return true // max 20 messages per minute per IP

  limit.count++
  return false
}

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const ip = req.headers.get('x-forwarded-for') ?? 'unknown'
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many messages. Please wait a moment.' },
        { status: 429 }
      )
    }

    const body = await req.json()
    const { messages } = body

    // Validate input
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }

    // Limit conversation history to last 10 messages (cost control)
    const recentMessages = messages.slice(-10).map((m: { role: string; content: string }) => ({
      role: m.role as 'user' | 'assistant',
      content: String(m.content).slice(0, 1000), // max 1000 chars per message
    }))

    // Call Claude API
    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001', // Haiku = fastest + cheapest, perfect for chat
      max_tokens: 300,                     // Keep responses concise
      system: SYSTEM_PROMPT,
      messages: recentMessages,
    })

    const text = response.content[0].type === 'text'
      ? response.content[0].text
      : ''

    // Check if AI captured a lead and extract details
    const leadMatch = text.match(/##LEAD_CAPTURED##(.+?)\|(.+?)##/)
    let leadData = null
    if (leadMatch) {
      leadData = {
        name: leadMatch[1].trim(),
        phone: leadMatch[2].trim(),
        timestamp: new Date().toISOString(),
      }
      // TODO: Send to your CRM, email, or WhatsApp here
      // Example: await sendToWhatsApp(leadData)
      console.log('🎯 NEW LEAD CAPTURED:', leadData)
    }

    // Clean the hidden tag from the response shown to user
    const cleanText = text.replace(/##LEAD_CAPTURED##.+?##/g, '').trim()

    return NextResponse.json({
      message: cleanText,
      lead: leadData,
    })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
