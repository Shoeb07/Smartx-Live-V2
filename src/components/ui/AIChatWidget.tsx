'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, MessageCircle, Loader2, Sparkles } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
  isNew?: boolean
}

const GREETING: Message = {
  role: 'assistant',
  content: "Hi! 👋 I'm SmartX's project advisor. Tell me about your idea and I'll give you an honest estimate — cost, timeline, and the right tech stack. What are you looking to build?",
}

const QUICK_PROMPTS = [
  "I need a mobile app",
  "I need a website",
  "I need a web app / SaaS",
  "What's your pricing?",
]

GREETING.content = "Hi, thanks for reaching SmartX Solutions. Our instant AI advisor is temporarily paused, but our team is still available. Please share your project details here, or contact us directly on WhatsApp, email, or phone for the fastest response."
QUICK_PROMPTS[3] = "I want a quick call"

const TEMPORARY_REPLY: Message = {
  role: 'assistant',
  content: "Thanks for sharing. The AI chat is temporarily paused, so please WhatsApp us at +91 91005 90377 or email business@smartxsolutions.in. Our team will review your message and respond as soon as possible.",
  isNew: true,
}

const CHAT_API_ENABLED = false

// Detect if a lead was captured in AI response
function extractLead(text: string): { name: string; phone: string } | null {
  const match = text.match(/##LEAD_CAPTURED##(.+?)\|(.+?)##/)
  if (match) return { name: match[1].trim(), phone: match[2].trim() }
  return null
}

export default function AIChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([GREETING])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [unread, setUnread] = useState(0)
  const [leadCaptured, setLeadCaptured] = useState(false)
  const [showQuickPrompts, setShowQuickPrompts] = useState(true)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Scroll to bottom on new message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setUnread(0)
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [open])

  // Show unread badge after 8 seconds if user hasn't opened
  useEffect(() => {
    const t = setTimeout(() => {
      if (!open) setUnread(1)
    }, 8000)
    return () => clearTimeout(t)
  }, [])

  const sendMessage = async (text: string) => {
    const trimmed = text.trim()
    if (!trimmed || loading) return

    setInput('')
    setShowQuickPrompts(false)

    const userMsg: Message = { role: 'user', content: trimmed }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)

    if (!CHAT_API_ENABLED) {
      setMessages(prev => [...prev, TEMPORARY_REPLY])
      if (!open) setUnread(c => c + 1)
      return
    }

    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map(m => ({
            role: m.role,
            content: m.content,
          })),
        }),
      })

      const data = await res.json()

      if (data.error) {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: data.error,
          isNew: true,
        }])
        return
      }

      // Check for lead capture
      if (data.lead) {
        setLeadCaptured(true)
        console.log('Lead captured:', data.lead)
        // You can also send this to your own webhook/email here
      }

      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.message,
        isNew: true,
      }])

      if (!open) setUnread(c => c + 1)

    } catch {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "Sorry, something went wrong. Please email us at business@smartxsolutions.in or call +91 91005 90377.",
        isNew: true,
      }])
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(input)
  }

  return (
    <>
      {/* ── CHAT WINDOW ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-5 sm:right-8 z-[999] w-[92vw] max-w-[380px] rounded-2xl overflow-hidden shadow-2xl"
            style={{
              background: '#0d0d14',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(108,99,255,0.15)',
            }}
          >
            {/* Header */}
            <div
              className="flex items-center gap-3 px-4 py-3.5 border-b"
              style={{ borderColor: 'rgba(255,255,255,0.07)', background: '#13131e' }}
            >
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#6c63ff] to-[#00e5b0] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  SX
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#22c55e] border-2 border-[#13131e]" />
              </div>
              <div className="flex-1">
                <p className="text-white font-syne font-bold text-[13px] leading-tight">SmartX Advisor</p>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                  <p className="text-[11px] text-white/60">Online · Replies instantly</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#6c63ff]/15 border border-[#6c63ff]/20">
                  <Sparkles size={9} className="text-[#a89eff]" />
                  <span className="text-[9px] text-[#a89eff] font-medium uppercase tracking-wider">Team</span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="ml-1 w-7 h-7 flex items-center justify-center rounded-lg text-white/40 hover:text-white hover:bg-white/5 transition-all"
                  aria-label="Close chat"
                >
                  <X size={15} />
                </button>
              </div>
            </div>

            <div className="px-4 py-3 border-b border-white/[0.07] bg-[#00e5b0]/[0.06]">
              <p className="text-[12px] leading-relaxed text-white/75">
                AI chat is temporarily paused. For urgent enquiries, use WhatsApp, call, or email below.
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <a
                  href="https://wa.me/919100590377"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#00e5b0] px-3 py-1.5 text-[11px] font-bold text-black"
                >
                  WhatsApp
                </a>
                <a
                  href="tel:+919100590377"
                  className="rounded-full border border-white/15 px-3 py-1.5 text-[11px] font-medium text-white/80"
                >
                  Call
                </a>
                <a
                  href="mailto:business@smartxsolutions.in"
                  className="rounded-full border border-white/15 px-3 py-1.5 text-[11px] font-medium text-white/80"
                >
                  Email
                </a>
              </div>
            </div>

            {/* Messages */}
            <div
              className="flex flex-col gap-3 px-4 py-4 overflow-y-auto"
              style={{ height: '320px' }}
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={msg.isNew ? { opacity: 0, y: 8 } : false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'assistant' && (
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#6c63ff] to-[#00e5b0] flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0 mr-2 mt-0.5">
                      SX
                    </div>
                  )}
                  <div
                    className={`max-w-[82%] px-3.5 py-2.5 rounded-2xl text-[13px] leading-[1.6] whitespace-pre-line ${
                      msg.role === 'user'
                        ? 'rounded-br-sm text-white'
                        : 'rounded-bl-sm text-white/85'
                    }`}
                    style={{
                      background: msg.role === 'user'
                        ? '#6c63ff'
                        : 'rgba(255,255,255,0.06)',
                    }}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {loading && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#6c63ff] to-[#00e5b0] flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0">
                    SX
                  </div>
                  <div
                    className="px-3.5 py-3 rounded-2xl rounded-bl-sm flex items-center gap-1.5"
                    style={{ background: 'rgba(255,255,255,0.06)' }}
                  >
                    {[0, 1, 2].map(i => (
                      <motion.div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-white/40"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Lead captured confirmation */}
              {leadCaptured && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mx-auto px-4 py-2 rounded-full text-[11px] text-[#00e5b0] border border-[#00e5b0]/20 bg-[#00e5b0]/08"
                >
                  ✓ Our team will reach out on WhatsApp within 2 hours
                </motion.div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Quick prompts */}
            <AnimatePresence>
              {showQuickPrompts && (
                <motion.div
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-4 pb-3 flex flex-wrap gap-1.5"
                >
                  {QUICK_PROMPTS.map(p => (
                    <button
                      key={p}
                      onClick={() => sendMessage(p)}
                      className="text-[11px] px-3 py-1.5 rounded-full border text-white/50 hover:text-white hover:border-white/25 transition-all"
                      style={{ borderColor: 'rgba(255,255,255,0.1)', background: 'transparent' }}
                    >
                      {p}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 px-3 py-3 border-t"
              style={{ borderColor: 'rgba(255,255,255,0.07)' }}
            >
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Share your project details..."
                aria-label="Describe your project"
                disabled={loading}
                className="flex-1 bg-transparent text-white text-[13px] placeholder-white/25 outline-none px-2"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="w-8 h-8 rounded-xl flex items-center justify-center transition-all flex-shrink-0 disabled:opacity-40"
                style={{ background: input.trim() ? '#6c63ff' : 'rgba(255,255,255,0.07)' }}
                aria-label="Send message"
              >
                {loading
                  ? <Loader2 size={14} className="text-white animate-spin" />
                  : <Send size={14} className="text-white" />
                }
              </button>
            </form>

            {/* Footer */}
            <div
              className="text-center py-2 text-[0px] text-white/55 border-t"
              style={{ borderColor: 'rgba(255,255,255,0.04)' }}
            >
              <span className="text-[10px]">SmartX Solutions team follow-up</span>
              Powered by Claude AI · SmartX Solutions
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── FLOATING BUTTON ── */}
      <motion.button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-5 right-5 sm:right-8 z-[999] w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-all"
        style={{
          background: open ? '#13131e' : 'linear-gradient(135deg, #6c63ff, #00e5b0)',
          border: open ? '1px solid rgba(255,255,255,0.1)' : 'none',
          boxShadow: open ? 'none' : '0 8px 32px rgba(108,99,255,0.4)',
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X size={20} className="text-white" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <MessageCircle size={22} className="text-white" fill="white" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Unread badge */}
        <AnimatePresence>
          {unread > 0 && !open && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#ff5e62] flex items-center justify-center text-[10px] text-white font-bold"
            >
              {unread}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  )
}
