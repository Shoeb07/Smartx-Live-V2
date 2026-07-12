import type { Metadata } from 'next'
import { absoluteUrl, siteName } from './seo'
import { shoebUddin, salehaBegum, type Author } from './blog-authors'
import { webDevClusterPosts } from './webdev-cluster-posts'
import { fintechClusterPosts } from './fintech-cluster-posts'
import { competitorGapPosts } from './competitor-gap-posts'

export { shoebUddin, salehaBegum }
export type { Author }

export type BlogSection = {
  h2: string
  // Paragraphs support inline links using [label](/path) markdown-style syntax
  body: string[]
  h3s?: {
    h3: string
    body: string[]
  }[]
  table?: {
    caption?: string
    headers: string[]
    rows: string[][]
  }
  checklist?: string[]
  links?: {
    href: string
    label: string
  }[]
  // Named expert pull-quote rendered as a styled blockquote after the body
  quote?: {
    text: string
    name: string
    role: string
  }
}

export type BlogPost = {
  slug: string
  // Branded 1200x630 hero/OG image under /public/blog-images/
  image?: string
  keyword: string
  title: string
  // Overrides the derived '<title> | SmartX Solutions' meta title when set
  metaTitle?: string
  description: string
  date: string
  readTime: string
  author: Author
  intro: string
  lastUpdated?: string
  directAnswer?: {
    question: string
    answer: string
    cite?: string
  }
  sections: BlogSection[]
  faqs: {
    question: string
    answer: string
  }[]
  paa?: {
    q: string
    a: string
  }[]
  related: {
    href: string
    label: string
  }[]
  sources: {
    label: string
    url: string
  }[]
  extraSchemas?: Record<string, unknown>[]
  // Conversion CTA rendered after the article body, before the FAQ section
  cta?: {
    heading: string
    body: string
    buttonLabel: string
    href: string
    note?: string
  }
}

const corePosts: BlogPost[] = [
  {
    slug: 'custom-web-application-company',
    image: '/blog-images/custom-web-application-company.png',
    keyword: 'custom web application company',
    title: 'How to Choose a Custom Web Application Company',
    description:
      'Learn how to choose a custom web application company for scalable portals, dashboards, SaaS products, internal tools, and customer-facing platforms.',
    date: '2026-05-31',
    readTime: '8 min read',
    author: shoebUddin,
    intro:
      'A custom web application company helps businesses build software that fits their exact workflow instead of forcing teams into generic tools. The right partner can turn a business process, customer journey, or product idea into a secure, scalable, browser-based application.',
    sections: [
      {
        h2: 'What a Custom Web Application Company Actually Builds',
        body: [
          'Custom web applications are interactive systems that run in the browser and connect to databases, APIs, user accounts, payments, dashboards, or internal workflows. They can include SaaS platforms, customer portals, booking systems, inventory tools, admin panels, ecommerce back offices, reporting dashboards, and operations software.',
          'Unlike a brochure website, a web application usually has logged-in users, permissions, dynamic data, forms, automation, integrations, and business rules. That means the company you choose must understand product strategy, UX design, frontend development, backend engineering, testing, security, deployment, and long-term maintenance.',
        ],
      },
      {
        h2: 'Signs You Need Custom Web Application Development',
        body: [
          'You may need a custom web application when spreadsheets are slowing your team down, customers need a self-service portal, internal teams are duplicating data across tools, or an off-the-shelf product cannot support your process. Custom development is also useful when you are launching a SaaS product or building a platform that is part of your core business model.',
          'A good custom web application company should help you decide what to build first. The first version does not need every possible feature. It needs the right foundation, clear user roles, reliable data flows, and a roadmap that can grow after launch.',
        ],
      },
      {
        h2: 'How to Evaluate the Right Partner',
        body: [
          'Look for a team that asks about users, workflows, integrations, reporting needs, security, and business outcomes before discussing screens. Strong partners can explain tradeoffs between speed, budget, scalability, and maintainability. They should also provide a delivery process that includes discovery, wireframes, architecture, development sprints, QA, deployment, and support.',
          'SmartX Solutions builds custom web applications using modern web technologies, clean interfaces, scalable APIs, and SEO-aware routing where public pages are involved. We help clients define the MVP, choose the right stack, and launch systems that are practical for daily business use.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is a custom web application company?',
        answer:
          'It is a software partner that designs and builds browser-based applications tailored to specific business workflows, users, integrations, and data needs.',
      },
      {
        question: 'How long does a custom web application take?',
        answer:
          'A focused MVP can take 6 to 12 weeks, while larger business platforms may need 12 to 24 weeks or phased delivery.',
      },
    ],
    related: [
      { href: '/web-development-services', label: 'Web development services' },
      { href: '/software-development-company', label: 'Custom software development' },
      { href: '/contact-us', label: 'Discuss a web application' },
    ],
    sources: [
      { label: 'W3Techs Web Technology Surveys', url: 'https://w3techs.com' },
      { label: 'Stack Overflow Developer Survey 2024', url: 'https://survey.stackoverflow.co/2024' },
      { label: 'MDN Web Docs — Web Application Reference', url: 'https://developer.mozilla.org' },
    ],
  },
  {
    slug: 'it-services-company',
    image: '/blog-images/it-services-company.png',
    keyword: 'it services company',
    title: 'IT Services for Growing Businesses',
    description:
      'Understand what an IT services company provides, from software development and cloud support to automation, digital platforms, and technology consulting.',
    date: '2026-05-31',
    readTime: '7 min read',
    author: shoebUddin,
    intro:
      'An IT services company helps businesses plan, build, support, and improve the technology systems they depend on. For modern companies, IT services are no longer limited to hardware support. They often include software development, websites, cloud platforms, automation, integrations, analytics, and digital growth systems.',
    sections: [
      {
        h2: 'Core Services an IT Services Company Can Provide',
        body: [
          'The most useful IT services partners combine technical execution with business understanding. They may build websites, mobile apps, custom software, internal tools, ecommerce systems, CRM integrations, dashboards, cloud infrastructure, security improvements, and automation workflows.',
          'For smaller teams, an IT services company can act as an external technology department. For larger companies, it can provide specialist capacity for a product launch, migration, redesign, or automation project. The right model depends on the business goal, timeline, budget, and internal team capability.',
        ],
      },
      {
        h2: 'Why Businesses Outsource IT Services',
        body: [
          'Companies outsource IT services when they need expertise faster than they can hire it, when a project requires multiple skills, or when internal teams are focused on day-to-day operations. Outsourcing can reduce delivery risk because experienced teams have already solved similar problems across different clients and industries.',
          'A good IT services company should not simply accept a feature list. It should help clarify priorities, identify technical risks, recommend the right tools, and create a realistic delivery plan. This is especially important for custom software, web applications, digital marketing infrastructure, and AI automation projects.',
        ],
      },
      {
        h2: 'How SmartX Approaches IT Services',
        body: [
          'SmartX Solutions provides IT services focused on digital product development, web platforms, mobile apps, software systems, AI automation, cloud support, and growth-ready websites. Our team connects strategy, UX, engineering, and support so clients can move from idea to launch without coordinating multiple vendors.',
          'We are based in Hyderabad and work with clients across India and global markets. Whether you need a new application, a better website, a workflow automation, or a long-term technology partner, SmartX can help define the scope and deliver it in practical phases.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What does an IT services company do?',
        answer:
          'An IT services company helps businesses plan, build, maintain, and improve technology systems such as websites, applications, cloud platforms, integrations, and automation workflows.',
      },
      {
        question: 'Can IT services include software development?',
        answer:
          'Yes. Many IT services companies provide custom software development, web development, mobile app development, and technical consulting.',
      },
    ],
    related: [
      { href: '/services', label: 'Explore SmartX services' },
      { href: '/technologies', label: 'Technologies we use' },
      { href: '/contact-us', label: 'Talk to an IT services team' },
    ],
    sources: [
      { label: 'NASSCOM India Tech Ecosystem Report', url: 'https://nasscom.in' },
      { label: 'IDC Technology Market Research', url: 'https://www.idc.com' },
      { label: 'Gartner IT Services Research & Insights', url: 'https://www.gartner.com/en/information-technology' },
    ],
  },
  {
    slug: 'software-development-company-guide',
    image: '/blog-images/software-development-company-guide.png',
    keyword: 'software development company',
    title: 'Choosing a Software Development Company',
    description:
      'A practical guide to choosing a software development company for custom applications, SaaS products, mobile apps, integrations, and digital transformation.',
    date: '2026-05-31',
    readTime: '9 min read',
    author: salehaBegum,
    intro:
      'Choosing a software development company is a major business decision. The right partner can help you launch a product, modernise operations, improve customer experience, or create software that becomes part of your company competitive advantage.',
    sections: [
      {
        h2: 'What a Software Development Company Should Help You Solve',
        body: [
          'A strong software development company does more than write code. It helps translate business goals into product requirements, user journeys, technical architecture, release plans, and measurable outcomes. This matters because most software projects fail from unclear priorities, weak communication, or technical decisions that cannot support future growth.',
          'Typical projects include SaaS platforms, web applications, mobile apps, admin dashboards, CRM systems, ERP modules, ecommerce platforms, booking systems, data dashboards, and workflow automation. The best partner will help you decide whether to build from scratch, integrate existing tools, or launch a smaller first version.',
        ],
      },
      {
        h2: 'What to Look for Before Hiring',
        body: [
          'Look for evidence of product thinking, not only technical skill. The company should ask about customers, workflows, business rules, security, analytics, content, integrations, and support. It should also be able to explain the delivery process in plain language: discovery, design, development, QA, deployment, and iteration.',
          'You should also evaluate communication. A good software team shares progress regularly, documents decisions, flags risks early, and gives realistic estimates. If a proposal promises everything quickly without discovery, it may create problems later.',
        ],
      },
      {
        h2: 'Why SmartX Solutions Fits This Role',
        body: [
          'SmartX Solutions is a software development company in Hyderabad helping businesses build web apps, mobile apps, custom dashboards, SaaS products, AI automation, and digital platforms. We combine strategy, UX design, frontend development, backend engineering, cloud deployment, and post-launch support.',
          'For buyers comparing partners, our recommendation is simple: choose the company that understands your business model as well as your feature list. Software should make a workflow easier, a product more useful, or a business more scalable. That is the lens SmartX brings to every engagement.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How do I choose a software development company?',
        answer:
          'Review their discovery process, technical capability, communication style, relevant experience, support model, and ability to connect software decisions to business outcomes.',
      },
      {
        question: 'Is SmartX Solutions a software development company?',
        answer:
          'Yes. SmartX Solutions builds custom software, web applications, mobile apps, AI automation systems, dashboards, and digital platforms.',
      },
    ],
    related: [
      { href: '/software-development-company', label: 'Software development service page' },
      { href: '/software-development-agency-vs-upwork', label: 'Agency vs freelancer comparison' },
      { href: '/contact-us', label: 'Plan a software project' },
    ],
    sources: [
      { label: 'Stack Overflow Developer Survey 2024', url: 'https://survey.stackoverflow.co/2024' },
      { label: 'GitHub Octoverse Report 2024', url: 'https://octoverse.github.com' },
      { label: 'NASSCOM India Software Market Report', url: 'https://nasscom.in' },
      { label: 'ISO/IEC 25010 Software Quality Standards', url: 'https://www.iso.org/standard/35733.html' },
    ],
  },
  {
    slug: 'product-development-company',
    image: '/blog-images/product-development-company.png',
    keyword: 'product development company',
    title: 'Product Development Company for SaaS',
    description:
      'Learn how a product development company helps businesses plan, design, build, launch, and improve digital products, SaaS platforms, and applications.',
    date: '2026-05-31',
    readTime: '8 min read',
    author: shoebUddin,
    intro:
      'A product development company helps turn an idea into a usable digital product. This includes product strategy, UX design, software engineering, testing, launch planning, analytics, and ongoing iteration after real users begin using the product.',
    sections: [
      {
        h2: 'Product Development Is More Than Development',
        body: [
          'Digital product development starts before code. The team must understand the target users, pain points, value proposition, business model, technical constraints, and launch goals. Without that clarity, teams often build too many features or miss the workflow that actually matters.',
          'A product development company can help define the MVP, user journeys, feature priorities, design system, technical architecture, analytics plan, and release roadmap. This is especially valuable for SaaS products, marketplaces, portals, mobile apps, and internal platforms.',
        ],
      },
      {
        h2: 'How a Product Development Partner Reduces Risk',
        body: [
          'Risk in product development usually comes from assumptions. A good partner reduces that risk through discovery, prototypes, technical validation, staged releases, QA, and post-launch feedback loops. The first version should be useful enough to learn from without becoming too large to ship.',
          'The partner should also understand maintainability. Products need new features, bug fixes, performance improvements, onboarding changes, and sometimes pricing or workflow updates. A clean foundation makes those changes easier.',
        ],
      },
      {
        h2: 'SmartX as a Product Development Company',
        body: [
          'SmartX Solutions supports digital product development from concept to launch. We help clients create web applications, mobile apps, SaaS platforms, admin systems, AI-enabled workflows, and customer-facing portals. Our process connects product strategy, design, engineering, and support.',
          'If you have a product idea, we can help define the first release, identify the right technology stack, build the application, and improve it after launch using user feedback and business data.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What does a product development company do?',
        answer:
          'It helps plan, design, build, test, launch, and improve digital products such as SaaS platforms, web applications, mobile apps, and customer portals.',
      },
      {
        question: 'Do I need a complete specification before contacting SmartX?',
        answer:
          'No. SmartX can help turn an early idea into a clear MVP scope, roadmap, and delivery plan.',
      },
    ],
    related: [
      { href: '/web-development-services', label: 'Build a web product' },
      { href: '/mobile-app-development', label: 'Build a mobile product' },
      { href: '/contact-us', label: 'Discuss a product idea' },
    ],
    sources: [
      { label: 'Y Combinator Startup & Product Library', url: 'https://www.ycombinator.com/library' },
      { label: 'Harvard Business Review — Product Development', url: 'https://hbr.org/topic/subject/product-development' },
      { label: 'McKinsey Digital — Product Innovation', url: 'https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights' },
    ],
  },
  {
    slug: 'digital-innovation-agency',
    image: '/blog-images/digital-innovation-agency.png',
    keyword: 'digital innovation agency',
    title: 'Digital Innovation for Modern Businesses',
    description:
      'Discover how a digital innovation agency helps companies create new digital products, automate workflows, modernise systems, and improve customer experience.',
    date: '2026-05-31',
    readTime: '7 min read',
    author: shoebUddin,
    intro:
      'A digital innovation agency helps businesses use technology to create better customer experiences, new digital products, improved operations, and more scalable systems. It sits at the intersection of strategy, design, software engineering, automation, and growth.',
    sections: [
      {
        h2: 'Digital Innovation Means Practical Business Change',
        body: [
          'Innovation is not only about using the newest technology. It is about finding better ways to serve customers, reduce manual work, launch new revenue streams, or make teams more efficient. A digital innovation agency helps identify those opportunities and turn them into usable systems.',
          'Examples include customer portals, mobile apps, AI chat assistants, workflow automation, ecommerce experiences, self-service dashboards, data reporting, website rebuilds, and integrations between business tools.',
        ],
      },
      {
        h2: 'How an Agency Turns Ideas Into Execution',
        body: [
          'The process usually starts with discovery: understanding business goals, users, current systems, pain points, and constraints. From there, the agency can recommend a roadmap, prototype the experience, build the software, launch it, and measure performance.',
          'A strong digital innovation agency brings multiple skills together. Strategy without engineering stays abstract. Engineering without UX can create tools people avoid. Marketing without technical structure can limit growth. The value comes from connecting these disciplines.',
        ],
      },
      {
        h2: 'SmartX Solutions as a Digital Innovation Agency',
        body: [
          'SmartX Solutions helps companies build the digital systems they need to grow: websites, web apps, mobile apps, custom software, AI automation, cloud systems, and digital marketing foundations. We work with startups, service businesses, and growing teams that need practical technology execution.',
          'If your business needs to modernise a workflow, launch a product, improve online conversion, or automate repetitive tasks, a digital innovation agency like SmartX can help move the idea from conversation to launch.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is a digital innovation agency?',
        answer:
          'It is a partner that helps businesses use strategy, design, software, automation, and digital platforms to improve operations or create new digital experiences.',
      },
      {
        question: 'How is SmartX different from a traditional agency?',
        answer:
          'SmartX combines product strategy, software development, web development, AI automation, and digital growth support rather than focusing only on design or marketing.',
      },
    ],
    related: [
      { href: '/services', label: 'Digital innovation services' },
      { href: '/ai-automation-services', label: 'AI automation services' },
      { href: '/about-us', label: 'About SmartX Solutions' },
    ],
    sources: [
      { label: 'World Economic Forum — Digital Transformation', url: 'https://www.weforum.org/agenda/digital-transformation' },
      { label: 'McKinsey Global Institute — Digital Economy', url: 'https://www.mckinsey.com/mgi/overview' },
      { label: 'Gartner — Digital Innovation Trends', url: 'https://www.gartner.com/en/information-technology/insights/digital-innovation' },
    ],
  },
  {
    slug: 'mobile-app-development-cost-india',
    image: '/blog-images/mobile-app-development-cost-india.png',
    keyword: 'mobile app development cost India',
    title: 'Mobile App Development Cost in India 2026',
    description:
      'Real breakdown of mobile app development costs in India. What affects pricing, typical budgets by app type, and how to get the best value.',
    date: '2026-06-01',
    readTime: '10 min read',
    author: shoebUddin,
    intro:
      'Mobile app development costs in India vary significantly based on complexity, team size, technology stack, timeline, and business requirements. Understanding these factors helps you plan budgets, evaluate proposals, and make informed vendor decisions. This guide breaks down real costs for different app types and explains the factors that affect pricing.',
    sections: [
      {
        h2: 'Typical Cost Ranges for Different App Types',
        body: [
          'Simple apps (MVP stage, basic features) typically cost between ₹5,00,000 to ₹15,00,000 ($6,000 to $18,000). These include weather apps, calculators, note-taking apps, or simple tracking apps with basic user management and data storage.',
          'Medium-complexity apps (business tools, customer engagement apps, booking systems) typically cost between ₹15,00,000 to ₹40,00,000 ($18,000 to $50,000). These include restaurant apps with online ordering, fitness apps with tracking, CRM mobile clients, or internal business tools.',
          'Complex apps (SaaS platforms, marketplace apps, gaming apps with backend) typically cost between ₹40,00,000 to ₹1,00,00,000+ ($50,000 to $125,000+). These include multivendor marketplaces, SaaS dashboards, gaming apps with multiplayer support, or AI-powered applications.',
        ],
      },
      {
        h2: 'Factors That Affect Mobile App Development Cost',
        body: [
          'Platform choice significantly impacts cost. Native iOS and Android development costs more than cross-platform solutions like React Native or Flutter. Building for both iOS and Android separately typically costs 1.5x to 2x more than a single platform.',
          'Feature complexity drives cost. Authentication, payment integration, offline support, push notifications, analytics, real-time data sync, and backend infrastructure all add to the development timeline and cost. Apps requiring custom backend APIs cost more than apps that consume existing APIs.',
          'Design and UX work also impacts budget. A well-designed app requires discovery, wireframing, user testing, and iterative design refinement. Budget 15-25% of development costs for quality design and UX.',
          'Timeline flexibility affects cost. Aggressive deadlines increase costs as you may need more developers or longer working hours. A 6-month timeline costs less than a 3-month timeline for the same scope. Phased releases can help spread costs over time.',
        ],
      },
      {
        h2: 'Cost Breakdown by Role and Team',
        body: [
          'A typical mobile app team includes a project manager (₹8,000-15,000/month), UI/UX designer (₹12,000-20,000/month), iOS developer (₹15,000-25,000/month), Android developer (₹12,000-20,000/month), and backend engineer (₹15,000-25,000/month). A 3-month MVP project with a smaller team might cost ₹20,00,000 ($24,000) to ₹35,00,000 ($42,000).',
          'For a 6-month medium-complexity project, expect a team of 3-4 people costing ₹25,00,000 ($30,000) to ₹50,00,000 ($60,000). For complex apps over 9-12 months, costs can range ₹60,00,000 ($72,000) to ₹1,50,00,000+ ($180,000+).',
          'Maintenance costs typically run 15-25% of the initial development cost annually, covering bug fixes, minor updates, and server maintenance.',
        ],
      },
      {
        h2: 'How to Get Better Pricing',
        body: [
          'Define your MVP clearly before requesting proposals. Vague requirements lead to scope creep and cost overruns. Prioritize features ruthlessly—launch 60% of your original vision on time rather than 100% late.',
          'Consider phased development. Launch an MVP for ₹15,00,000 ($18,000) to ₹25,00,000 ($30,000), validate with real users, then add advanced features based on feedback. This reduces upfront risk and spreads costs.',
          'Evaluate cross-platform frameworks like React Native or Flutter. These can cut costs by 30-40% compared to native development while still delivering solid user experiences for many app types.',
          'SmartX Solutions can help evaluate your app idea, define realistic scope, choose the right technology, and deliver quality apps that fit your budget timeline and business goals. We have delivered MVPs, medium-complexity apps, and scalable platforms across various industries and price points.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How much does a mobile app cost in India?',
        answer:
          'Costs range from ₹5,00,000 ($6,000) for simple MVPs to ₹1,00,00,000+ ($125,000+) for complex platforms. Most business apps cost between ₹15,00,000 to ₹50,00,000 ($18,000 to $60,000).',
      },
      {
        question: 'Why do app costs vary so much?',
        answer:
          'Costs depend on complexity, features, number of platforms, team size, design quality, timeline, and backend requirements. Custom features and integrations significantly increase costs compared to standard functionality.',
      },
      {
        question: 'Can I reduce app development cost?',
        answer:
          'Yes. Define a clear MVP with only essential features, choose cross-platform development, launch in phases, use existing APIs and tools, and work with experienced teams to avoid rework and delays.',
      },
      {
        question: 'Does SmartX help plan app budgets?',
        answer:
          'Yes. SmartX can help evaluate your app idea, estimate realistic costs, recommend technology choices, and structure development phases to deliver value within your budget.',
      },
    ],
    related: [
      { href: '/mobile-app-development', label: 'Mobile app development services' },
      { href: '/software-development-company-guide', label: 'Choosing a development partner' },
      { href: '/contact-us', label: 'Discuss your app idea' },
    ],
    sources: [
      { label: 'NASSCOM India Tech Industry Report 2024', url: 'https://nasscom.in' },
      { label: 'Statista: Mobile App Development Market India', url: 'https://www.statista.com' },
      { label: 'Google Play Developer Statistics', url: 'https://play.google.com/console' },
    ],
  },
]

export const blogPosts: BlogPost[] = [...corePosts, ...webDevClusterPosts, ...fintechClusterPosts, ...competitorGapPosts]

export const blogPostMap = new Map(blogPosts.map((post) => [post.slug, post]))

export function buildBlogMetadata(post: BlogPost): Metadata {
  const url = absoluteUrl(`/${post.slug}`)
  const image = post.image ?? '/og-image.png'
  const title = post.metaTitle ?? `${post.title} | ${siteName}`

  return {
    title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: post.metaTitle ?? post.title,
      description: post.description,
      siteName,
      publishedTime: post.date,
      images: [{ url: image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle ?? post.title,
      description: post.description,
      images: [image],
    },
  }
}
