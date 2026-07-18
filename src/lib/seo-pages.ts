import type { SeoPage } from './seo'

const serviceBreadcrumb = (label: string, href: string) => [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label, href },
]

export const seoPages: Record<string, SeoPage> = {
  'about-us': {
    slug: 'about-us',
    title: 'About SmartX Solutions — Custom Software Agency, Hyderabad',
    description:
      'SmartX Solutions is a Hyderabad software development company helping startups and enterprises build scalable web, mobile, and AI platforms.',
    h1: 'About SmartX Solutions',
    eyebrow: 'About Us',
    intro:
      'SmartX Solutions is a product-minded software development company in Hyderabad, India. We help founders, growth teams, and enterprises turn business ideas into reliable digital products with strategy, design, engineering, automation, and long-term support under one roof.',
    sections: [
      {
        h2: 'A Software Partner Built Around Outcomes',
        body: [
          'Our work starts with the business problem, not the technology stack. Before a sprint begins, we clarify the audience, revenue model, operational constraints, success metrics, and risks that could slow delivery. That discovery process helps us recommend the right mix of web development, mobile app development, cloud architecture, AI automation, or digital marketing support instead of forcing every client into the same delivery model.',
          'SmartX works with early-stage companies that need a first launch, established businesses modernising legacy systems, and teams that want a dependable engineering partner without the cost of building every role internally. We keep communication direct, documentation practical, and delivery visible so stakeholders always understand what is being built, why it matters, and what comes next.',
        ],
      },
      {
        h2: 'How Our Team Works',
        body: [
          'Every engagement is shaped around focused collaboration. Product strategists define the roadmap, designers map the user journey, engineers build secure and maintainable systems, and delivery leads keep priorities clear. We prefer smaller senior teams over bloated project rooms because experienced people make better decisions, reduce rework, and protect momentum.',
          'Our development process includes architecture planning, responsive interface design, API development, database modelling, QA, deployment, analytics, and post-launch improvements. When a client needs speed, we build lean MVPs that can evolve. When a client needs scale, we design infrastructure, observability, and release workflows that support growth from the beginning.',
        ],
      },
      {
        h2: 'Why Businesses Choose SmartX',
        body: [
          'Clients choose SmartX because we combine execution with judgment. A successful product is not only a clean user interface or a fast backend; it is the sum of product decisions, search visibility, conversion paths, operational workflows, security, and maintainability. Our team connects those pieces so the final product is useful for customers and manageable for the business.',
          'We are based in Hyderabad and serve clients across India and international markets. Whether you need a dedicated development team, a complete product build, a website that ranks and converts, or automation that removes repetitive work, SmartX brings the structure and technical depth to move from idea to launch with confidence.',
        ],
      },
      {
        h2: 'What Working With Us Feels Like',
        body: [
          'A SmartX engagement is designed to feel organised from the first call. We translate goals into a clear scope, explain technical decisions in plain language, and keep the project moving through visible milestones. Clients can see progress through demos, review links, documentation, and direct conversations with the people doing the work.',
          'We also care about what happens after launch. A product may need content updates, performance tuning, new integrations, analytics review, SEO improvements, or support for the next release. Our team stays available as a long-term partner so the first version can become a stronger, more valuable platform over time.',
        ],
      },
    ],
    links: [
      { href: '/services', label: 'Explore our services' },
      { href: '/portfolio', label: 'View portfolio work' },
      { href: '/best-software-development-companies-hyderabad', label: 'See how we compare to other Hyderabad software companies' },
      { href: '/contact-us', label: 'Talk to SmartX' },
    ],
    faqs: [
      {
        question: 'Where is SmartX Solutions located?',
        answer:
          'SmartX Solutions is based in Hyderabad, Telangana, India, and works with clients across India and global markets.',
      },
      {
        question: 'What type of companies does SmartX work with?',
        answer:
          'SmartX works with startups, growing small businesses, agencies, and enterprise teams that need web, mobile, AI, software, or digital growth support.',
      },
    ],
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  services: {
    slug: 'services',
    title: 'Software Development Services — Web, Mobile, AI',
    description:
      'Explore SmartX Solutions services — web development, mobile apps, custom software, AI automation, digital marketing, and UX design.',
    h1: 'Custom Software Development Services — Web, Mobile, AI & Cloud',
    eyebrow: 'Services',
    intro:
      'SmartX Solutions provides end-to-end digital product and growth services for businesses that need more than a basic website. We design, build, launch, optimise, and support software systems that connect customer experience with measurable business results.',
    sections: [
      {
        h2: 'Full-Service Product Engineering',
        body: [
          'Our core services include web development, mobile app development, custom software development, AI automation, cloud engineering, UI/UX design, and digital marketing. These capabilities are designed to work together. A new SaaS product might need user research, a Next.js marketing site, a secure application backend, payment integrations, onboarding automation, analytics, and SEO landing pages. Instead of coordinating separate vendors, clients can work with one team that understands the complete system.',
          'We build responsive websites, business dashboards, customer portals, admin panels, ecommerce systems, mobile apps, internal tools, API platforms, and automation workflows. Every project is planned around maintainability, performance, accessibility, security, and search visibility so the product can support real users after launch.',
        ],
      },
      {
        h2: 'Services That Match Different Growth Stages',
        body: [
          'For startups, we help validate ideas, prioritise MVP features, and create launch-ready products without overbuilding. For growing companies, we improve existing systems, add integrations, reduce manual operations, and strengthen conversion funnels. For enterprise teams, we support modernisation, workflow automation, scalable architecture, and specialist delivery capacity.',
          'Our service pages describe the most requested solutions: web development services, mobile app development, custom software development, digital marketing services, and AI automation services. Each page includes details on common use cases, deliverables, and how that service connects with broader business goals.',
        ],
      },
      {
        h2: 'A Practical Delivery Process',
        body: [
          'SmartX projects move through discovery, planning, design, development, QA, launch, and optimisation. We define milestones early, share progress frequently, and keep decision records clear. That rhythm gives business teams predictable visibility while still allowing room to adapt when user feedback or market priorities change.',
          'The result is a service model that is strategic enough for complex products and practical enough for fast-moving teams. Whether you are building a new application, refreshing a website, launching paid campaigns, or automating customer support, we focus on the details that make the investment easier to measure.',
        ],
      },
      {
        h2: 'How Services Connect Across the Customer Journey',
        body: [
          'Many projects need more than one discipline. A buyer may discover your business through a search landing page, compare service pages, submit a form, receive an automated response, enter a CRM workflow, and later use a custom dashboard or mobile app. SmartX plans those touchpoints together so the experience feels consistent and the data moves cleanly.',
          'This connected approach is useful for companies that want fewer handoffs and better accountability. Our team can own the website, application, automation, analytics, and post-launch improvements, or plug into your existing team where specialist support is needed.',
        ],
      },
    ],
    links: [
      { href: '/web-development-services', label: 'Web development services' },
      { href: '/mobile-app-development', label: 'Mobile app development' },
      { href: '/software-development-company', label: 'Custom software development' },
      { href: '/ai-automation-services', label: 'AI automation services' },
      { href: '/software-development-agency-vs-upwork', label: 'Comparing your options? Agency vs Upwork guide' },
      { href: '/contact-us', label: 'Request a consultation' },
    ],
    faqs: [
      {
        question: 'Which services does SmartX Solutions provide?',
        answer:
          'SmartX provides web development, mobile app development, custom software development, AI automation, digital marketing, UI/UX design, cloud engineering, and product support.',
      },
      {
        question: 'Can SmartX handle both design and development?',
        answer:
          'Yes. SmartX can handle product strategy, UX design, UI design, frontend development, backend development, QA, deployment, and ongoing optimisation.',
      },
    ],
    priority: 0.9,
    changeFrequency: 'monthly',
  },
  'web-development-services': {
    slug: 'web-development-services',
    title: 'Web Development Services & Web Portal Development',
    description:
      'Custom web development and web portal services for websites, SaaS, portals, dashboards, ecommerce, and high-performance Next.js applications.',
    h1: 'Web Development Services & Web Portal Development',
    eyebrow: 'Web Development',
    intro:
      'SmartX is a web development agency building fast, secure, search-ready web experiences and custom web portals for companies that need websites and web applications to perform as business assets. Our custom web development services cover strategy, UX, frontend engineering, backend systems, integrations, performance, and launch support.',
    sections: [
      {
        h2: 'Custom Websites and Web Applications',
        body: [
          'We create marketing websites, corporate websites, landing pages, SaaS applications, ecommerce storefronts, customer portals, admin dashboards, and internal tools. Each build is planned around the user journey, content structure, technical SEO, Core Web Vitals, and the workflows your team needs behind the scenes.',
          'Our preferred approach is modern and maintainable: component-based interfaces, clean routing, structured metadata, reusable design systems, and scalable APIs. We use frameworks such as Next.js and React when they fit the project, and we pair them with reliable backend services, databases, authentication, and cloud hosting.',
        ],
      },
      {
        h2: 'Web Portal Development Services',
        body: [
          'We build custom web portals for businesses — client portals, vendor portals, admin dashboards, and B2B platforms. Our web portal development services cover the full stack from UI design to backend APIs. Client portals let your customers manage accounts, view orders, track status, and access documents. Vendor portals enable suppliers to upload products, manage inventory, and view performance. Admin portals give your team complete control over users, content, workflows, and reporting.',
          'Each web portal is designed for usability, security, and performance. We handle user authentication, role-based access control, data isolation, notifications, integrations with your backend systems, and analytics dashboards so you can see how customers and vendors interact with your platform.',
        ],
      },
      {
        h2: 'Built for Search, Speed, and Conversion',
        body: [
          'A high-quality website should be discoverable and persuasive. We structure pages with descriptive URLs, clear headings, internal links, schema markup, optimised metadata, accessible navigation, and content sections that match the way buyers search. Performance is treated as a product requirement, not a last-minute checklist.',
          'For conversion, we design clear calls to action, frictionless contact paths, trust signals, service pages, case study links, and analytics events. That combination helps the website support sales conversations instead of acting like a static brochure.',
        ],
      },
      {
        h2: 'When to Choose SmartX for Web Development',
        body: [
          'SmartX is a strong fit when your website needs custom functionality, search visibility, responsive design, integrations, or a roadmap beyond a template. We can rebuild an existing site, extend a product, create a new application, or help your internal team ship faster with senior frontend and backend support.',
        ],
      },
    ],
    links: [
      { href: '/services', label: 'All software development services' },
      { href: '/software-development-company', label: 'Custom software development' },
      { href: '/blog/ecommerce-website-development-hyderabad', label: 'E-commerce website development' },
      { href: '/digital-marketing-services', label: 'Digital marketing services' },
      { href: '/contact-us', label: 'Start a web project' },
    ],
    breadcrumb: serviceBreadcrumb('Web Development Services', '/web-development-services'),
    faqs: [
      {
        question: 'Do you build SEO-friendly websites?',
        answer:
          'Yes. SmartX builds SEO-friendly websites with clean routes, metadata, structured data, internal linking, performance optimisation, and accessible page structure.',
      },
      {
        question: 'Can you rebuild an existing website?',
        answer:
          'Yes. SmartX can audit, redesign, migrate, and rebuild existing websites while preserving or improving SEO value.',
      },
    ],
    priority: 0.85,
    changeFrequency: 'monthly',
  },
  'mobile-app-development': {
    slug: 'mobile-app-development',
    title: 'Mobile App Development Company — iOS & Android',
    description:
      'Mobile app development company in Hyderabad building iOS, Android, Flutter, and React Native apps — MVPs to scalable platforms for startups and enterprises.',
    h1: 'Mobile App Development Company in Hyderabad',
    eyebrow: 'Mobile Apps',
    intro:
      'SmartX is a mobile app development company in Hyderabad designing and developing iOS, Android, and cross-platform applications that are easy to use, stable in production, and aligned with business goals. We build custom apps for startups, service businesses, and enterprise workflows. Looking for a mobile app development company near you in Hyderabad? SmartX Solutions is based in Hyderabad, Telangana — available for in-person meetings and partnerships.',
    sections: [
      {
        h2: 'Best Mobile App Development Company Services',
        body: [
          'SmartX is one of the best mobile app development firms in India, specializing in custom app development. We help define the core user journeys, onboarding flow, navigation model, offline needs, notifications, analytics, and integrations before development begins. That clarity prevents feature overload and gives the first release a stronger chance of adoption.',
          'Our mobile app development services cover product planning, UI/UX design, cross-platform development, backend APIs, authentication, payments, admin panels, testing, app store preparation, and post-launch support. We can build a new app from scratch or modernise an existing app that needs better performance, usability, or maintainability.',
        ],
      },
      {
        h2: 'Cross-Platform and Native Delivery',
        body: [
          'Many businesses choose cross-platform frameworks to reduce development time while still offering a polished experience on iOS and Android. When native performance, device APIs, or platform-specific interactions are critical, we help choose the right architecture and delivery plan.',
          'We also connect mobile apps to the systems that make them useful: CRM platforms, ecommerce systems, payment gateways, location services, chat, analytics, push notifications, and internal business tools. The app becomes part of a complete digital ecosystem instead of an isolated screen.',
        ],
      },
      {
        h2: 'Launch and Growth Support',
        body: [
          'After launch, SmartX can support bug fixes, version upgrades, feature releases, app store optimisation, crash monitoring, and usage analysis. That ongoing improvement loop is especially valuable for apps that need retention, repeat usage, and continuous product-market learning.',
        ],
      },
    ],
    links: [
      { href: '/services', label: 'Explore all services' },
      { href: '/web-development-services', label: 'Web development services' },
      { href: '/ai-automation-services', label: 'AI automation services' },
      { href: '/contact-us', label: 'Discuss a mobile app' },
    ],
    breadcrumb: serviceBreadcrumb('Mobile App Development Company', '/mobile-app-development'),
    faqs: [
      {
        question: 'Does SmartX build both iOS and Android apps?',
        answer:
          'Yes. SmartX builds iOS, Android, and cross-platform mobile apps depending on product goals, budget, timeline, and technical requirements.',
      },
      {
        question: 'Can you build the backend for a mobile app?',
        answer:
          'Yes. SmartX can build backend APIs, admin panels, databases, authentication, payment flows, and integrations for mobile applications.',
      },
    ],
    priority: 0.85,
    changeFrequency: 'monthly',
  },
  'software-development-company': {
    slug: 'software-development-company',
    title: 'Custom Software Development Company in Hyderabad | SmartX Solutions',
    description:
      'SmartX Solutions is a custom software development company in Hyderabad. We build web applications, SaaS platforms, CRM systems, ERP tools, and business automation for startups and enterprises across India.',
    h1: 'Custom Software Development Company in Hyderabad',
    eyebrow: 'Custom Software · Hyderabad',
    intro:
      'SmartX Solutions is a custom software development company in Hyderabad, Telangana. We help startups and businesses replace manual workflows, disconnected tools, and outdated systems with software built around the way their business actually works. Our team covers strategy, UX design, engineering, deployment, and long-term support from a single Hyderabad base — available for in-person meetings and remote collaboration.',
    sections: [
      {
        h2: 'Business Problems Custom Software Solves',
        body: [
          'Off-the-shelf platforms stop working the moment your workflow becomes specific: your team starts duplicating data across disconnected tools, reporting requires someone to manually pull numbers from three different systems, and customers get a generic experience when they need something tailored. Custom software eliminates these gaps by fitting the way your business actually runs.',
          'The most common problems we are asked to solve: replacing spreadsheet-heavy operations with a proper database application, building customer or vendor portals that reduce manual coordination, creating dashboards that give management real-time visibility instead of week-old reports, and connecting business tools that currently do not talk to each other. Each of these is a specific, solvable engineering problem — not a reason to buy yet another subscription.',
        ],
      },
      {
        h2: 'Custom Software Services We Provide',
        body: [
          'We build web applications, customer portals, admin dashboards, SaaS platforms, CRM and CMS systems, ERP modules, booking and scheduling tools, inventory and logistics platforms, financial dashboards, internal operations software, and API integrations. We also build mobile apps for businesses that need a field or customer-facing experience on iOS and Android.',
          'Every system is documented, security-reviewed, tested, and structured so it can be maintained and extended. We do not hand over a black box. We hand over code you can understand, a system you can operate, and a team you can continue working with.',
        ],
      },
      {
        h2: 'Industries We Build Software For',
        body: [
          'Our custom software projects cover manufacturing, retail and ecommerce, professional services, education and edtech, healthcare and wellness, real estate, logistics, financial services, hospitality, and government-adjacent NGOs. The specific workflow requirements differ across industries, but the fundamentals are the same: clear user roles, reliable data flows, secure access, maintainable code, and support after launch.',
          'For manufacturing, we build inventory and production tracking systems. For services businesses, we build CRM and scheduling platforms. For edtech, we build student portals and assessment tools. For fintech, we build payment-integrated, RBI-compliant platforms. If your industry is not listed, describe the business problem — the solution is almost always buildable.',
        ],
      },
      {
        h2: 'Real Projects from Our Portfolio',
        body: [
          'AG Traders, a fencing wire manufacturer in Palghar, needed a digital presence to reach contractors and procurement managers searching online. We built a fast, mobile-first Next.js website with a full product catalogue and pre-populated WhatsApp enquiry integration. The site appeared on page one of Google for location-specific searches within six weeks of launch.',
          'One Stop Dashboard is an ERP application we built to centralise business operations across multiple workflows into a single platform with real-time insights and automated reporting. FurneXo is a marketplace platform — India\'s first furniture exchange — enabling users to buy, sell, and swap furniture online. These are real, live products built by the same team that would work on your project.',
        ],
      },
      {
        h2: 'Development Process: Discovery to Launch',
        body: [
          'Every project starts with discovery. We map the users, business rules, data flows, pain points, integrations, and success metrics before writing a line of code. That clarity prevents expensive changes mid-development and gives you a delivery roadmap with practical milestones rather than guesswork estimates.',
          'After discovery comes UX design and architecture planning: user journeys, wireframes, data models, API design, security rules, hosting approach, and release workflow. Then development — in focused sprints with regular demos so you can see progress and redirect before it costs time. Then QA, deployment, and a launch-ready handover. After launch, we can support monitoring, feature improvements, performance tuning, and the next release cycle.',
        ],
      },
      {
        h2: 'Engagement Models',
        body: [
          'Fixed-scope projects work well when the requirements are clear and the deliverables are defined: a specific application, a portal, a set of integrations. We scope it, price it, and deliver against milestones. This is the most common model for first-time clients because the cost and timeline are predictable.',
          'Time-and-materials suits ongoing product development where priorities evolve with user feedback. You get the team\'s capacity each month and control what gets built. Dedicated team arrangements work for companies that need a persistent engineering presence without the overhead of employment: a team allocated to your product for as long as you need.',
        ],
      },
      {
        h2: 'Technology Stack',
        body: [
          'Frontend: React, Next.js, and TypeScript for web applications — fast, SEO-capable, and maintainable at scale. Tailwind CSS for consistent, performant styling. Framer Motion for interactions that match brand quality. Mobile: Flutter and React Native for iOS and Android, chosen based on product requirements and cross-platform needs.',
          'Backend: Node.js for API-first architectures and Python with FastAPI for data-heavy or AI-integrated systems. PostgreSQL as the default relational database, MongoDB for document-flexible needs, Redis for caching and sessions. Cloud: Vercel for Next.js deployments, AWS and GCP for systems needing granular infrastructure control. All production systems include CI/CD pipelines, monitoring, structured logging, and documented infrastructure.',
        ],
      },
      {
        h2: 'Realistic Timelines and Pricing Guidance',
        body: [
          'A simple internal tool, automation workflow, or business website typically takes four to eight weeks and costs ₹2,50,000 to ₹8,00,000. A custom business application — a portal, CRM, booking system, or operational dashboard — typically takes ten to twenty weeks and costs ₹8,00,000 to ₹25,00,000 depending on scope and integrations. SaaS platforms and enterprise systems start at ₹25,00,000 and scale with complexity, user management, multi-tenancy, and infrastructure requirements.',
          'These are realistic ranges, not minimums designed to win a proposal. The final number depends on the feature list, integration complexity, data migration, testing requirements, and your timeline. We provide a specific proposal after a discovery call where we understand your actual scope — not a number pulled from a pricing page.',
        ],
      },
      {
        h2: 'Why Choose a Hyderabad Software Development Company',
        body: [
          'Hyderabad has one of India\'s deepest technology talent pools outside Bangalore — home to major engineering centres, a large graduate output from institutions including IIIT Hyderabad and Osmania University, and an active startup ecosystem anchored by T-Hub. Engineering quality at Hyderabad rates runs 15 to 25 percent below equivalent Bangalore costs without a quality gap, making it a rational first choice for budget-conscious and quality-conscious buyers alike.',
          'For businesses in Telangana and Andhra Pradesh, a Hyderabad company also means accessible in-person meetings, shared timezone, and a team that understands the local regulatory, procurement, and market context without needing it explained.',
        ],
      },
      {
        h2: 'Why SmartX Solutions',
        body: [
          'We are a small, senior team — not a large agency that routes your work through junior staff after the pitch. The people who scope your project are the people who build it. That keeps communication direct, decisions fast, and quality consistent.',
          'We bring product thinking to every engagement. A good software project is not just clean code and a polished interface — it is the sum of right user flows, correct data architecture, search visibility if the product is public-facing, conversion-oriented design if it touches customers, and operational reliability after launch. SmartX connects those pieces.',
        ],
      },
    ],
    links: [
      { href: '/contact-us', label: 'Book a free discovery consultation' },
      { href: '/portfolio', label: 'See our completed projects' },
      { href: '/portfolio/ag-traders', label: 'AG Traders case study' },
      { href: '/portfolio/one-stop-dashboard', label: 'One Stop Dashboard case study' },
      { href: '/technologies', label: 'Technologies we use' },
      { href: '/best-software-development-companies-hyderabad', label: 'Compare Hyderabad software companies' },
    ],
    breadcrumb: serviceBreadcrumb('Custom Software Development Company in Hyderabad', '/software-development-company'),
    faqs: [
      {
        question: 'What custom software does SmartX build?',
        answer:
          'SmartX builds web applications, SaaS platforms, CRM and ERP systems, customer portals, admin dashboards, booking tools, mobile apps, AI automation workflows, and internal business applications.',
      },
      {
        question: 'How much does custom software development cost in Hyderabad?',
        answer:
          'Simple tools and automations: ₹2,50,000 to ₹8,00,000. Custom business applications: ₹8,00,000 to ₹25,00,000. SaaS platforms and enterprise systems: ₹25,00,000+. We provide a specific proposal after a discovery call.',
      },
      {
        question: 'How long does custom software development take?',
        answer:
          'Simple tools: 4 to 8 weeks. Business applications: 10 to 20 weeks. SaaS or enterprise platforms: 20 to 40 weeks. Timeline depends on scope, integrations, and testing requirements.',
      },
      {
        question: 'Can SmartX modernise legacy software?',
        answer:
          'Yes. SmartX can audit legacy systems, plan migrations, rebuild modules in stages, improve integrations, and create modern interfaces without requiring a full system replacement.',
      },
      {
        question: 'Why choose a software development company in Hyderabad?',
        answer:
          'Hyderabad offers strong engineering talent at 15 to 25 percent lower cost than Bangalore, accessible in-person meetings for local businesses, and a well-established startup and enterprise tech ecosystem including T-Hub and major global engineering centres.',
      },
    ],
    priority: 0.9,
    changeFrequency: 'monthly',
  },
  'digital-marketing-services': {
    slug: 'digital-marketing-services',
    title: 'Digital Marketing Services - SEO, Performance and Growth',
    description:
      'Digital marketing services for SEO, landing pages, content strategy, analytics, paid campaigns, conversion optimisation, and growth-focused websites.',
    h1: 'Digital Marketing Services',
    eyebrow: 'Digital Growth',
    intro:
      'SmartX combines technical execution with marketing strategy so your website, landing pages, content, and campaigns work together to attract qualified leads and convert them into conversations.',
    sections: [
      {
        h2: 'Marketing Built on a Strong Technical Foundation',
        body: [
          'Digital marketing performs better when the website is fast, crawlable, well structured, and aligned with buyer intent. Our team connects SEO, content, landing page design, analytics, and conversion optimisation with the technical quality needed for sustainable growth.',
          'We support technical SEO audits, metadata optimisation, service page creation, internal linking, schema markup, content planning, campaign landing pages, Google Analytics setup, search console improvements, and performance recommendations. For businesses running paid campaigns, we design landing experiences that match ad intent and reduce friction.',
        ],
      },
      {
        h2: 'SEO and Conversion Strategy',
        body: [
          'Search visibility depends on useful content and clear structure. We help organise services into dedicated URLs, strengthen page hierarchy, add descriptive anchor text, and create supporting pages for industries, technologies, case studies, and portfolio work. This helps search engines understand the business and helps visitors find the next relevant page.',
          'Conversion work includes better calls to action, contact flows, proof sections, case study links, service comparisons, and analytics events. The goal is not traffic alone; it is qualified traffic that understands your offer and knows how to take the next step.',
        ],
      },
      {
        h2: 'Growth Support for Product and Service Businesses',
        body: [
          'SmartX is useful for companies that need marketing and engineering to collaborate. We can create SEO landing pages, implement tracking, build high-converting websites, support campaign launches, and use automation to respond faster to inbound enquiries.',
        ],
      },
      {
        h2: 'What Digital Services We Offer',
        body: [
          'SmartX digital marketing covers technical SEO, content strategy and production, landing page development, paid campaign support, analytics configuration, conversion rate optimisation, and structured data implementation. These services are designed to reinforce one another: a paid campaign pointing to an unoptimised landing page will underperform, and SEO that lacks conversion focus attracts visitors without generating enquiries. We connect all channels through a shared strategy and consistent measurement approach.',
          'Specific deliverables include technical SEO audits, keyword research and mapping, service and blog content production, internal link architecture, Google Search Console and Analytics setup, schema markup, campaign landing page design and development, lead capture form configuration, CRM integration, A/B testing, and monthly performance reporting. Businesses can engage SmartX for a one-time audit, a defined implementation project, or ongoing monthly growth support depending on their current stage.',
        ],
      },
      {
        h2: 'SEO for Software Companies',
        body: [
          'Software companies and technology agencies face a distinct SEO challenge. Buyers are often technical decision-makers who compare multiple providers across weeks before contacting anyone. They search for precise terms: specific technologies, use cases, industries, and cities, not broad terms like "software company." A homepage alone cannot capture this demand. The businesses that win organic traffic and qualified leads maintain a library of specific, well-structured service pages targeting each segment of buyer search behaviour.',
          'SmartX builds SEO programmes for software companies through dedicated service pages, location pages, technology pages, industry pages, case study formats, and supporting blog content. Each page targets a defined search intent, uses structured headings, internal links to related content, FAQ sections addressing real buyer objections, and schema markup for enhanced search results. This builds topical authority in stages rather than competing for every term simultaneously, which produces more sustainable ranking improvement over time.',
        ],
      },
      {
        h2: 'Why a Development Agency Handles Digital Too',
        body: [
          'Most digital marketing improvements depend on changes to the website itself: adding pages, fixing crawl errors, improving page speed, updating metadata, or restructuring internal links. When the marketing team and the development team are separate agencies, these changes require coordination, prioritisation handoffs, and delays between strategy and implementation. Changes that could be made in hours take weeks when the dependency sits between two separate vendors.',
          'SmartX removes that friction by handling both. Our team can identify that a page is underperforming, diagnose the cause, and implement the fix in the same engagement. Analytics are configured alongside the build. Schema markup is added during development. Landing pages for campaigns are designed with SEO structure from the start rather than retrofitted later. The result is faster progress with fewer coordination costs and no gaps between what the marketer specifies and what the developer ships.',
        ],
      },
      {
        h2: 'Our Digital Strategy Process',
        body: [
          'Every digital marketing engagement at SmartX starts with an audit of the current website. We assess technical SEO fundamentals, page structure, content depth, keyword coverage, Core Web Vitals, analytics configuration, backlink quality, and competitor positioning. The audit output is a prioritised action plan where each recommendation includes the expected impact, the implementation effort, and the measurement approach, so decisions about where to start are based on evidence rather than guesswork.',
          'From the audit, we build a phased strategy. The first phase addresses quick wins: fixing crawl errors, correcting metadata, improving title and heading structure, connecting Search Console, and setting up analytics events. The second phase develops content through service pages, blog articles, and supporting landing pages that expand keyword coverage and build topical authority. The third phase optimises conversion by improving calls to action, testing page structure, and refining lead capture flows. Progress is reviewed monthly with transparent reporting on rankings, traffic, and enquiry volume.',
        ],
      },
      {
        h2: 'Pricing for Digital Services',
        body: [
          'Digital marketing pricing at SmartX is based on the scope of deliverables, the current state of the website, and the pace of the engagement. A one-time technical SEO audit with a prioritised recommendation report typically ranges from \u20b925,000 to \u20b950,000 depending on website size and complexity. Implementation projects where SmartX fixes technical issues, creates new landing pages, and configures analytics are scoped as fixed-cost deliverables with clear milestones and defined outputs based on the audit findings.',
          'Ongoing monthly digital marketing support typically ranges from \u20b930,000 to \u20b980,000 per month, covering SEO monitoring, content publication, performance reporting, and conversion improvements. The exact figure depends on the number of deliverables per month and the level of strategic involvement required. Paid campaign management including Google Ads setup and optimisation is priced separately based on ad spend and platform scope. We share a specific proposal after a discovery call where we can align on priorities and budget.',
        ],
      },
    ],
    links: [
      { href: '/web-development-services', label: 'SEO-friendly web development' },
      { href: '/portfolio', label: 'View portfolio' },
      { href: '/portfolio/ag-traders', label: 'Read the AG Traders case study' },
      { href: '/contact-us', label: 'Improve digital growth' },
    ],
    breadcrumb: serviceBreadcrumb('Digital Marketing Services', '/digital-marketing-services'),
    faqs: [
      {
        question: 'Do digital marketing services include SEO?',
        answer:
          'Yes. SmartX digital marketing services include technical SEO, landing page structure, content planning, metadata, internal links, schema, and analytics improvements.',
      },
      {
        question: 'Can SmartX build campaign landing pages?',
        answer:
          'Yes. SmartX designs and develops campaign landing pages for SEO, paid media, lead generation, and product launches.',
      },
      {
        question: 'How long before SEO shows results?',
        answer:
          'Technical fixes and metadata improvements can increase impressions within 4 to 8 weeks. New content pages typically gain traction within 3 to 6 months as they are crawled, indexed, and begin earning clicks. Competitive terms in a strong market may take 6 to 12 months of consistent effort. SmartX tracks progress monthly so you can see directional movement early.',
      },
      {
        question: 'Do you run paid advertising campaigns?',
        answer:
          'Yes. SmartX can set up and manage Google Ads campaigns including Search, Display, and Performance Max. We align paid campaigns with the same landing pages and messaging used in organic SEO so both channels reinforce each other rather than operating in isolation.',
      },
    ],
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  'ai-automation-services': {
    slug: 'ai-automation-services',
    title: 'AI Automation Services - Chatbots, Workflows and Business AI',
    description:
      'AI automation services for chatbots, workflow automation, document processing, CRM automation, lead routing, analytics, and custom AI integrations.',
    h1: 'AI Automation Services',
    eyebrow: 'AI Automation',
    intro:
      'SmartX helps businesses use AI where it creates practical value: faster response times, fewer repetitive tasks, better decision support, and more efficient operations.',
    sections: [
      {
        h2: 'Practical AI for Business Workflows',
        body: [
          'AI automation should solve a real operational problem. We identify repetitive workflows, manual handoffs, slow response points, and data-heavy tasks that can be improved with AI assistants, automation rules, integrations, or custom software.',
          'Common solutions include AI chatbots, website assistants, lead qualification flows, document summarisation, invoice or form extraction, CRM updates, internal knowledge search, support triage, reporting assistants, and workflow triggers across business tools. We design these systems with guardrails, fallback paths, and clear ownership so the automation remains reliable.',
        ],
      },
      {
        h2: 'Integrated With the Tools You Already Use',
        body: [
          'AI becomes more useful when it is connected to the systems your team already depends on. SmartX can integrate automation with websites, CRMs, email tools, spreadsheets, databases, project management systems, ecommerce platforms, and custom applications.',
          'We also help decide when a simple rules-based workflow is enough and when a language model, retrieval system, or custom AI feature is worth the investment. That keeps the solution practical instead of over-engineered.',
        ],
      },
      {
        h2: 'Secure, Measurable, and Maintainable',
        body: [
          'Our AI automation work includes process mapping, data handling rules, access controls, prompt and workflow testing, monitoring, and documentation. The goal is to create systems your team can trust, measure, and improve over time.',
        ],
      },
      {
        h2: 'What AI Automation Can Do For Your Business',
        body: [
          'AI automation creates practical value by eliminating the manual effort behind tasks that consume hours of human time. Routine data entry, document review, customer query routing, invoice extraction, and report generation can be handled by AI systems that process faster, more consistently, and at any scale. The business result is a team that spends more time on judgement and relationships, and less time on mechanical processing.',
          'Beyond task replacement, AI opens capabilities that were previously inaccessible for most businesses. Predictive analytics can flag churn risk, recommend next actions, or identify anomalies in financial data before they become problems. Document processing extracts structured information from unstructured contracts, medical records, or application forms within seconds. AI-powered customer support handles high volumes of common questions around the clock, reducing response times from hours to seconds and automatically escalating complex cases to human agents.',
        ],
      },
      {
        h2: 'Our AI Integration Process',
        body: [
          'Every AI engagement at SmartX begins with a discovery session that maps existing workflows, bottlenecks, data sources, and team capacity. Not every problem benefits from AI, so use case identification helps prioritise the tasks where automation delivers clear value without unnecessary complexity. After identifying the right opportunities, we build a focused proof of concept to validate performance and integration fit before committing to a full system.',
          'Once the proof of concept confirms the approach, we move into integration, connecting the AI system to your existing tools, databases, and workflows through well-defined APIs and data pipelines. Training and tuning cycles improve accuracy and relevance against your specific business data and edge cases. After deployment, live monitoring tracks model performance, flags unexpected outputs, and generates the feedback data needed for continuous improvement.',
        ],
      },
      {
        h2: 'Technologies We Use',
        body: [
          'SmartX AI projects draw from a tested stack of production-ready tools. For language-based automation, we use OpenAI GPT-4 and the Claude API, both capable of handling complex instructions, natural language understanding, structured output generation, and integration with application logic. LangChain provides orchestration for multi-step AI workflows, retrieval-augmented generation, and tool-calling patterns, reducing the engineering effort needed to build reliable AI agents.',
          'For the infrastructure layer, Python is our primary AI development language and FastAPI builds fast, type-safe AI service APIs that integrate cleanly with external systems. TensorFlow and HuggingFace cover machine learning tasks including classification, regression, anomaly detection, and custom prediction models. HuggingFace provides access to thousands of pre-trained models that can be fine-tuned on business-specific data with a modest compute budget. All AI systems can be deployed on AWS, GCP, or custom infrastructure based on security and cost requirements.',
        ],
      },
      {
        h2: 'AI Automation Use Cases by Industry',
        body: [
          'In FinTech, AI automation enables real-time fraud detection by analysing transaction patterns and flagging anomalies before losses occur. AI systems also automate credit scoring workflows, verify documents submitted for loan applications, generate regulatory compliance reports, and classify customer risk profiles. These systems help financial businesses scale compliance and risk operations without proportionally increasing headcount.',
          'HealthTech platforms use AI to summarise patient records, triage incoming queries, and surface relevant clinical information to support diagnostic decisions. In EdTech, AI personalises learning paths based on student progress data and automates grading for structured assessments, freeing educators for higher-value teaching. E-commerce businesses apply recommendation engines trained on purchase behaviour and browsing patterns to increase average order value, typically seeing measurable uplift within weeks of deployment.',
        ],
      },
      {
        h2: 'How Much Does AI Integration Cost?',
        body: [
          'AI automation investment scales with problem scope, data readiness, integration complexity, and whether the solution requires custom model training. A simple AI feature such as a website chatbot, document extraction workflow, or text classification tool typically costs between \u20b91,00,000 and \u20b93,00,000. These projects use existing language models with defined integration points and minimal infrastructure overhead.',
          'Custom machine learning models that require training on proprietary data, validation pipelines, and iterative tuning typically range from \u20b93,00,000 to \u20b98,00,000 depending on data complexity and iteration cycles. Full AI platforms comprising multiple models, orchestration logic, admin interfaces, monitoring dashboards, and deep integrations across business functions start at \u20b98,00,000 and scale with feature and infrastructure scope. We provide a specific estimate after a brief discovery call where we can review your data, workflow, and goals.',
        ],
      },
    ],
    links: [
      { href: '/software-development-company', label: 'Custom software development' },
      { href: '/web-development-services', label: 'Website chatbot integration' },
      { href: '/contact-us', label: 'Automate a workflow' },
    ],
    breadcrumb: serviceBreadcrumb('AI Automation Services', '/ai-automation-services'),
    faqs: [
      {
        question: 'What is AI automation?',
        answer:
          'AI automation uses artificial intelligence to perform tasks that previously required human input, such as reading documents, answering questions, classifying requests, or predicting outcomes. Unlike rule-based automation, AI systems handle variability, natural language, and unstructured data, making them suitable for tasks that simple rule-based workflows cannot address.',
      },
      {
        question: 'How long does AI integration take?',
        answer:
          'A simple AI feature typically takes 3 to 6 weeks from scoping to deployment. Custom models or multi-system integrations may take 2 to 4 months depending on data readiness, integration complexity, and testing requirements. We define milestones during discovery so timelines are clear before development begins.',
      },
      {
        question: 'Do you need large amounts of data for AI?',
        answer:
          'Not always. Many AI solutions use pre-trained models that perform well from day one, especially for language tasks such as summarisation, classification, and generation. Custom ML models may need more data, but SmartX assesses what is available and whether it is sufficient before recommending a training approach.',
      },
      {
        question: 'Can you integrate AI with our existing software?',
        answer:
          'Yes. SmartX designs AI integrations that connect with existing CRMs, databases, websites, spreadsheets, project management tools, email platforms, and custom applications. Integration planning is a core part of the discovery process, not an afterthought.',
      },
    ],
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  'contact-us': {
    slug: 'contact-us',
    title: 'Contact SmartX Solutions - Start a Software Project',
    description:
      'Contact SmartX Solutions to discuss web development, mobile app development, custom software, AI automation, or digital marketing projects.',
    h1: 'Contact SmartX Solutions',
    eyebrow: 'Contact Us',
    intro:
      'Tell us what you are trying to build, improve, or automate. SmartX Solutions will help you clarify the right next step, whether that is a discovery call, technical audit, MVP plan, website rebuild, or full product roadmap.',
    sections: [
      {
        h2: 'Start With a Clear Conversation',
        body: [
          'A good project starts with context. When you contact SmartX, share the business goal, current challenge, target users, preferred timeline, and any existing systems or designs. You do not need a perfect specification. Our team can help turn rough ideas into a practical plan with priorities, risks, and delivery options.',
          'We support founders exploring a new product, companies planning a website or app, teams replacing manual operations, and organisations looking for AI automation or digital marketing improvements. The first conversation is focused on fit, feasibility, and the fastest responsible path forward.',
        ],
      },
      {
        h2: 'What Happens After You Reach Out',
        body: [
          'After receiving your enquiry, we review the details and respond with the best next step. That may be a short consultation, a technical discovery session, an SEO or product audit, or a proposal for a defined scope. We keep recommendations honest, even when a smaller first step is better than a large build.',
          'If the project moves forward, we define milestones, responsibilities, communication rhythm, deliverables, and success metrics. That structure helps both teams stay aligned from the beginning.',
        ],
      },
      {
        h2: 'Contact Details',
        body: [
          'SmartX Solutions is based in Hyderabad, India. You can reach the team by email at business@smartxsolutions.in or by phone at +91 91005 90377. We work with local and remote clients and can support projects across time zones when the engagement requires it.',
        ],
      },
      {
        h2: 'Projects We Can Discuss',
        body: [
          'You can contact SmartX for a new business website, SEO landing page structure, web application, mobile app, custom dashboard, SaaS MVP, AI chatbot, workflow automation, ecommerce system, or technical consultation. We can also review an existing product and recommend improvements for speed, usability, SEO, accessibility, security, or conversion.',
          'If you are unsure what to ask for, describe the outcome you want. For example, you might want more qualified leads, fewer manual tasks, faster customer onboarding, a better mobile experience, or a clearer way to manage internal operations. We can help connect that outcome to the right scope.',
        ],
      },
    ],
    links: [
      { href: '/services', label: 'Review services before contacting us' },
      { href: '/about-us', label: 'Learn about SmartX' },
      { href: '/portfolio', label: 'See portfolio examples' },
    ],
    faqs: [
      {
        question: 'What should I include in a project enquiry?',
        answer:
          'Include your goal, timeline, budget range if available, target users, existing website or app links, and the main problem you want to solve.',
      },
      {
        question: 'Does SmartX work with remote clients?',
        answer:
          'Yes. SmartX works with clients in Hyderabad, across India, and in international markets using remote collaboration workflows.',
      },
    ],
    priority: 0.5,
    changeFrequency: 'yearly',
  },
  portfolio: {
    slug: 'portfolio',
    title: 'Portfolio - SmartX Solutions Web, Mobile and Software Work',
    description:
      'Explore the SmartX Solutions portfolio across websites, web apps, mobile apps, SaaS products, automation systems, and digital growth projects.',
    h1: 'SmartX Solutions Portfolio',
    eyebrow: 'Portfolio',
    intro:
      'Our portfolio reflects the type of work SmartX Solutions is built for: digital products that need thoughtful strategy, polished user experience, reliable engineering, and measurable business value.',
    sections: [
      {
        h2: 'What Our Portfolio Represents',
        body: [
          'Every project has a different context. Some clients need an MVP to validate a product idea. Others need a website that communicates authority and generates qualified leads. Some need internal software that reduces manual work, while others need mobile apps, AI assistants, ecommerce flows, or cloud infrastructure that can scale.',
          'Because many client engagements are confidential, our portfolio approach focuses on project categories, outcomes, and capabilities rather than exposing sensitive business details. We can share deeper examples during a consultation when they are relevant and permitted.',
        ],
      },
      {
        h2: 'Typical Work We Deliver',
        body: [
          'SmartX portfolio work includes SaaS dashboards, booking platforms, business websites, ecommerce systems, customer portals, admin panels, mobile apps, lead generation websites, automation workflows, and analytics interfaces. Across these projects, the common thread is practical execution: clear user journeys, maintainable code, fast pages, secure data flows, and business-friendly admin experiences.',
          'We also support redesigns and rebuilds where the goal is to improve speed, SEO, accessibility, brand trust, and conversion without losing the value of existing content or customer workflows.',
        ],
      },
      {
        h2: 'How to Evaluate Our Fit',
        body: [
          'The best way to evaluate SmartX is to compare your challenge with the services and case study patterns on this site. If you need a partner who can connect product thinking, software engineering, and digital growth, our portfolio is designed to show how those disciplines work together.',
        ],
      },
      {
        h2: 'Quality Standards Behind the Work',
        body: [
          'Our portfolio is shaped by standards that are easy to overlook in screenshots: responsive layouts, accessible navigation, stable routes, descriptive metadata, maintainable components, secure form handling, clean admin workflows, and analytics that help teams make decisions after launch.',
          'We also pay attention to handover quality. Documentation, reusable patterns, environment details, and support notes help clients avoid dependency on hidden knowledge. That makes the product easier to maintain whether SmartX continues as the delivery partner or collaborates with an internal team.',
        ],
      },
    ],
    links: [
      { href: '/portfolio/ag-traders', label: 'Read case studies' },
      { href: '/services', label: 'Explore services' },
      { href: '/contact-us', label: 'Discuss similar work' },
    ],
    faqs: [
      {
        question: 'Can SmartX share detailed portfolio examples?',
        answer:
          'Yes. SmartX can share relevant examples during consultation when client confidentiality allows.',
      },
      {
        question: 'What types of projects are in the SmartX portfolio?',
        answer:
          'The portfolio includes websites, web apps, mobile apps, SaaS platforms, internal tools, automation systems, and digital marketing assets.',
      },
    ],
    priority: 0.75,
    changeFrequency: 'monthly',
  },
  'case-studies': {
    slug: 'case-studies',
    title: 'Case Studies - SmartX Solutions Project Outcomes',
    description:
      'Read SmartX Solutions case study themes covering product launches, website rebuilds, software platforms, mobile apps, AI automation, and growth projects.',
    h1: 'Software and Digital Growth Case Studies',
    eyebrow: 'Case Studies',
    intro:
      'SmartX case studies show how strategy, UX, engineering, SEO, automation, and support come together to solve practical business problems.',
    sections: [
      {
        h2: 'From Problem to Measurable Progress',
        body: [
          'A useful case study is more than a screenshot. It explains the starting point, the constraints, the decisions, the delivery approach, and the results that mattered to the business. SmartX uses this format internally on projects so every team member understands why the work exists.',
          'Common case study themes include replacing spreadsheet-heavy operations with custom software, rebuilding websites for better search visibility, creating mobile apps for customer engagement, launching MVPs for startups, and using AI automation to reduce repetitive support or admin tasks.',
        ],
      },
      {
        h2: 'How We Approach Delivery',
        body: [
          'Most successful engagements begin with a focused discovery phase. We identify users, business goals, content needs, technical risks, integrations, analytics requirements, and launch constraints. Then we turn that information into a roadmap with clear milestones and practical tradeoffs.',
          'During delivery, we combine design reviews, development sprints, QA, stakeholder demos, and launch planning. After release, we review performance, user feedback, and operational data to decide what should improve next.',
        ],
      },
      {
        h2: 'Use Case Patterns',
        body: [
          'For service businesses, our case study patterns often involve SEO-friendly websites, lead capture flows, CRM integration, and conversion-focused service pages. For product businesses, the work often includes web apps, mobile apps, dashboards, payments, user roles, notifications, and analytics. For operations teams, the value often comes from automation, integrations, and cleaner reporting.',
        ],
      },
      {
        h2: 'What We Measure After Launch',
        body: [
          'Post-launch measurement depends on the project type. For a website, we may review impressions, clicks, enquiries, form completion, page speed, ranking movement, and conversion paths. For software, we may review activation, task completion, error rates, support requests, usage patterns, and feature adoption.',
          'These measurements help turn a launch into a learning cycle. Instead of treating delivery as the end, SmartX uses data and feedback to recommend the next practical improvement, whether that is a new page, better onboarding, automation, performance work, or a product feature.',
        ],
      },
    ],
    links: [
      { href: '/portfolio', label: 'View portfolio' },
      { href: '/services', label: 'Services behind the outcomes' },
      { href: '/contact-us', label: 'Plan your project outcome' },
    ],
    faqs: [
      {
        question: 'Are SmartX case studies public?',
        answer:
          'Some examples can be discussed publicly, while detailed client results may be shared privately when confidentiality permits.',
      },
      {
        question: 'What outcomes does SmartX focus on?',
        answer:
          'SmartX focuses on launch speed, usability, search visibility, conversion, operational efficiency, maintainability, and measurable product improvement.',
      },
    ],
    priority: 0.7,
    changeFrequency: 'monthly',
  },
  technologies: {
    slug: 'technologies',
    title: 'Technologies - SmartX Solutions Development Stack',
    description:
      'Explore the technologies SmartX Solutions uses for web development, mobile apps, backend systems, cloud, AI automation, analytics, and DevOps.',
    h1: 'Technologies We Use',
    eyebrow: 'Technology Stack',
    intro:
      'SmartX chooses technology based on the product goal, team needs, budget, performance requirements, and long-term maintainability. We prefer proven tools that help clients launch confidently and scale responsibly.',
    sections: [
      {
        h2: 'Why Technology Choice Matters',
        body: [
          'The technology powering a digital product directly affects how fast the team can ship, how much it costs to maintain, how reliably the system performs under real load, and how easily it adapts when the business changes direction. Poor technology choices create bottlenecks, increase hiring costs, produce technical debt, and slow every future release. SmartX treats technology selection as a product decision with long-term consequences, not just a developer preference.',
          'Before recommending a stack, we consider the product roadmap, the team\'s existing skills, expected user load, infrastructure budget, industry compliance requirements, and the likelihood of architectural change over the next twelve months. That context produces a recommendation that is appropriate today and defensible as the business grows, rather than one that is fashionable but misaligned with real constraints.',
        ],
      },
      {
        h2: 'Frontend Technologies',
        body: [
          'SmartX builds web frontends primarily with React and Next.js. React provides a component model that scales well as application complexity grows, with reusable UI elements, predictable state management, and a strong ecosystem of tooling. Next.js adds server-side rendering, static generation, edge deployment, image optimisation, and file-system routing that together support both SEO-critical marketing pages and complex interactive applications from a single codebase.',
          'TypeScript is used across all frontend projects to catch type errors before runtime, improve code clarity through types, and make large codebases easier to navigate. Tailwind CSS enables rapid, consistent styling with minimal specificity conflicts and lean production builds. For UI animation and accessibility, we choose libraries based on bundle impact, WCAG compliance, and maintenance stability. The result is a frontend that scores well on Core Web Vitals, works reliably across devices, and remains easy to extend.',
        ],
      },
      {
        h2: 'Backend Technologies',
        body: [
          'Backend services at SmartX are built with Node.js or Python depending on project context. Node.js excels at handling concurrent API requests, integrating with JavaScript-native services, and maintaining a consistent language across the full stack when the frontend is also in React. Python with FastAPI is preferred when the backend needs to interface with data processing pipelines, machine learning models, or scientific libraries, offering type safety, automatic API documentation, and strong async performance.',
          'We design backends with clear separation between business logic, data access layers, authentication middleware, and integration connectors. This structure makes components testable in isolation and replaceable without cascading changes. REST APIs are used for most service communication following consistent naming conventions, error formats, and versioning patterns. GraphQL is chosen when multiple frontend clients need flexible data queries or when the API surface would otherwise be difficult to maintain.',
        ],
      },
      {
        h2: 'Mobile Development',
        body: [
          'For most business mobile applications, SmartX recommends cross-platform development using Flutter or React Native. Flutter is a strong default choice: a single Dart codebase produces native-quality applications on both iOS and Android, with smooth animations, custom UI flexibility, and solid performance on mid-range devices. Flutter is especially suitable for applications with unique interface designs, offline requirements, or a need for consistent visual behaviour across platforms.',
          'React Native is preferred when the team already works in JavaScript and React, or when the project needs to share business logic with a web application in the same ecosystem. Both frameworks provide access to device features including camera, location, biometric authentication, push notifications, and local storage. When native-only APIs, hardware performance, or platform-specific interactions are business-critical, we assess whether a native iOS or Android build would deliver better results for the investment.',
        ],
      },
      {
        h2: 'Cloud & DevOps',
        body: [
          'SmartX deploys on AWS, Google Cloud Platform, and Vercel depending on project scale and requirements. Vercel is ideal for Next.js applications requiring fast global delivery, preview environments on every branch, and minimal infrastructure management. AWS and GCP are preferred when applications need granular control over compute, networking, security groups, compliance boundaries, and data residency, particularly for regulated industries or enterprise platforms handling sensitive data.',
          'Every production system includes a CI/CD pipeline that automates linting, testing, building, and deployment when code is merged. Docker containers standardise the environment between local development and production, eliminating environment-specific bugs. Monitoring, structured logging, alerting, and uptime checks are configured before launch. Infrastructure is documented in enough detail that it can be understood, handed over, or modified without requiring deep institutional knowledge.',
        ],
      },
      {
        h2: 'Database Technologies',
        body: [
          'SmartX selects databases based on data structure, query complexity, consistency requirements, and expected scale. PostgreSQL is the default relational database for most applications: mature, feature-complete, and capable of handling complex joins, JSONB columns, full-text search, and high write throughput. Supabase builds on PostgreSQL with managed hosting, built-in row-level security, real-time subscriptions, and a developer-friendly client library that accelerates early-stage product development.',
          'MongoDB is used in projects where document flexibility is genuinely needed, such as content types with significantly different shapes or rapid schema iteration during early development. Redis handles caching, session storage, rate limiting, and lightweight pub/sub messaging rather than serving as a primary data store. Across all database choices, we define indexing strategy, migration tooling, backup frequency, retention policy, and access controls before any production data enters the system.',
        ],
      },
      {
        h2: 'AI & Machine Learning',
        body: [
          'SmartX AI projects use OpenAI GPT-4 and the Claude API as the core language intelligence layer. These models handle natural language tasks including summarisation, classification, extraction, generation, and conversational response with reliability sufficient for production use. LangChain orchestrates multi-step AI workflows, retrieval-augmented generation pipelines, and tool-calling agents, reducing the time needed to move from a working prototype to a stable, observable production system.',
          'For machine learning models requiring custom training such as predictive scoring, anomaly detection, recommendation systems, or image classification, SmartX uses TensorFlow and HuggingFace. TensorFlow provides a production-grade framework for training and serving neural networks at scale. HuggingFace gives access to thousands of pre-trained models that can be fine-tuned on business-specific data with modest compute resources, making custom AI accessible to businesses without large training datasets. All AI deployments include monitoring, confidence thresholds, fallback paths, and human escalation for edge cases.',
        ],
      },
    ],
    links: [
      { href: '/web-development-services', label: 'Web development stack' },
      { href: '/mobile-app-development', label: 'Mobile app technology' },
      { href: '/ai-automation-services', label: 'AI automation technology' },
      { href: '/contact-us', label: 'Discuss your stack' },
    ],
    faqs: [
      {
        question: 'Does SmartX use Next.js?',
        answer:
          'Yes. SmartX uses Next.js for suitable web projects, especially when performance, SEO, routing, and a modern React architecture are important.',
      },
      {
        question: 'Can SmartX work with an existing stack?',
        answer:
          'Yes. SmartX can audit, improve, extend, or integrate with existing technology stacks when that is the best path for the project.',
      },
    ],
    priority: 0.7,
    changeFrequency: 'monthly',
  },
  industries: {
    slug: 'industries',
    title: 'Industries - Software Solutions for Growing Businesses',
    description:
      'SmartX Solutions serves startups, ecommerce, healthcare, education, real estate, finance, logistics, professional services, and enterprise teams.',
    h1: 'Industries We Serve',
    eyebrow: 'Industries',
    intro:
      'SmartX Solutions works across industries where software, websites, mobile apps, automation, and digital marketing can improve customer experience or business operations.',
    sections: [
      {
        h2: 'Digital Solutions Across Business Models',
        body: [
          'Different industries need different digital systems. A real estate company may need lead capture, property listings, CRM workflows, and location-based search. An education business may need learning portals, enrolment flows, payments, and student dashboards. A healthcare provider may need appointment journeys, secure forms, and clear service content. An ecommerce business may need performance, catalogue structure, checkout optimisation, and marketing automation.',
          'SmartX adapts the delivery plan to the industry context while keeping the foundations consistent: strong UX, reliable engineering, clear content structure, accessible interfaces, and measurable outcomes.',
        ],
      },
      {
        h2: 'Common Industries We Support',
        body: [
          'Our work is relevant for startups, SaaS companies, ecommerce brands, healthcare providers, education platforms, real estate businesses, logistics teams, financial service providers, professional service firms, manufacturing businesses, and local service companies. We also support agencies and enterprise teams that need specialist development capacity.',
          'For each industry, we look at the buyer journey, operational workflow, compliance expectations, content needs, search behaviour, and integration requirements. That helps the final product feel specific instead of generic.',
        ],
      },
      {
        h2: 'Industry Knowledge With Custom Execution',
        body: [
          'We bring reusable experience from past projects, but we do not assume every company in an industry works the same way. Discovery helps us understand your positioning, team capacity, customer expectations, and growth priorities before recommending a solution.',
        ],
      },
      {
        h2: 'Adapting to Industry Search and Buying Behaviour',
        body: [
          'Industry pages, service pages, and case studies are especially useful when buyers compare providers before contacting a company. SmartX helps structure content around the questions those buyers ask, the proof they need, and the next step that should follow each page.',
          'For operational software, industry context also affects roles, approvals, reporting, integrations, and compliance expectations. By understanding those details early, we can design systems that support the real workflow instead of forcing teams into a generic process.',
        ],
      },
    ],
    links: [
      { href: '/services', label: 'Services for your industry' },
      { href: '/portfolio', label: 'Case study patterns' },
      { href: '/contact-us', label: 'Discuss your industry' },
    ],
    faqs: [
      {
        question: 'Which industries does SmartX serve?',
        answer:
          'SmartX serves startups, SaaS, ecommerce, healthcare, education, real estate, logistics, finance, professional services, manufacturing, and local service businesses.',
      },
      {
        question: 'Can SmartX build industry-specific software?',
        answer:
          'Yes. SmartX can build custom software, websites, mobile apps, and automation workflows tailored to specific industry operations.',
      },
    ],
    priority: 0.75,
    changeFrequency: 'monthly',
  },
}

export const seoPageList = Object.values(seoPages)
