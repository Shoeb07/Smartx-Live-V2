import type { SeoPage } from './seo'

const serviceBreadcrumb = (label: string, href: string) => [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label, href },
]

export const seoPages: Record<string, SeoPage> = {
  'about-us': {
    slug: 'about-us',
    title: 'Software Development Company in Hyderabad',
    description:
      'Learn about SmartX Solutions, a Hyderabad software development company helping startups and enterprises build scalable web, mobile, AI, and digital platforms.',
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
    title: 'Software Development Services - Web, Mobile, AI and Marketing',
    description:
      'Explore SmartX Solutions services including web development, mobile app development, custom software, AI automation, digital marketing, cloud, and UX design.',
    h1: 'Software Development Services',
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
    title: 'Web Development Services - Custom Websites and Web Apps',
    description:
      'Custom web development services for business websites, SaaS platforms, portals, dashboards, ecommerce, and high-performance Next.js applications.',
    h1: 'Web Development Services',
    eyebrow: 'Web Development',
    intro:
      'SmartX builds fast, secure, search-ready web experiences for companies that need websites and web applications to perform as business assets. Our web development services cover strategy, UX, frontend engineering, backend systems, integrations, performance, and launch support.',
    sections: [
      {
        h2: 'Custom Websites and Web Applications',
        body: [
          'We create marketing websites, corporate websites, landing pages, SaaS applications, ecommerce storefronts, customer portals, admin dashboards, and internal tools. Each build is planned around the user journey, content structure, technical SEO, Core Web Vitals, and the workflows your team needs behind the scenes.',
          'Our preferred approach is modern and maintainable: component-based interfaces, clean routing, structured metadata, reusable design systems, and scalable APIs. We use frameworks such as Next.js and React when they fit the project, and we pair them with reliable backend services, databases, authentication, and cloud hosting.',
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
    title: 'Mobile App Development - iOS, Android and Cross-Platform Apps',
    description:
      'Mobile app development for iOS, Android, Flutter, React Native, customer apps, internal apps, MVPs, and scalable product platforms.',
    h1: 'Mobile App Development',
    eyebrow: 'Mobile Apps',
    intro:
      'SmartX designs and develops mobile applications that are easy to use, stable in production, and aligned with business goals. We support iOS, Android, and cross-platform builds for startups, service businesses, and enterprise workflows.',
    sections: [
      {
        h2: 'Mobile Products Designed Around Real Users',
        body: [
          'Successful mobile apps depend on focus. We help define the core user journeys, onboarding flow, navigation model, offline needs, notifications, analytics, and integrations before development begins. That clarity prevents feature overload and gives the first release a stronger chance of adoption.',
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
    breadcrumb: serviceBreadcrumb('Mobile App Development', '/mobile-app-development'),
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
    title: 'Software Development Company - Custom Business Software',
    description:
      'SmartX Solutions is a custom software development company building SaaS, portals, dashboards, workflow systems, integrations, and enterprise applications.',
    h1: 'Custom Software Development Company',
    eyebrow: 'Software Engineering',
    intro:
      'SmartX Solutions helps companies replace manual processes, fragmented tools, and outdated systems with custom software that fits the way the business actually works.',
    sections: [
      {
        h2: 'Custom Software for Specific Business Workflows',
        body: [
          'Off-the-shelf software is useful until your workflow becomes too specific, your team starts duplicating data, or your customers need a better experience than generic tools can provide. SmartX designs custom software around your processes, permissions, data, reporting needs, and growth plans.',
          'We build SaaS products, CRM systems, ERP modules, booking platforms, logistics tools, financial dashboards, customer portals, inventory systems, workflow automation, API integrations, and internal operations platforms. Each system is documented, tested, and structured so it can evolve over time.',
        ],
      },
      {
        h2: 'Architecture That Supports Growth',
        body: [
          'Good custom software balances speed with durability. We define the right data model, integration points, user roles, security rules, hosting approach, and release workflow before heavy development starts. That foundation helps avoid expensive rewrites as usage grows.',
          'Our engineering team works across frontend, backend, database, cloud, API, and DevOps layers. We can build a complete platform or collaborate with your internal team on a specific module, migration, or modernisation initiative.',
        ],
      },
      {
        h2: 'From Discovery to Long-Term Support',
        body: [
          'Every custom software project starts with discovery. We map the users, business rules, pain points, data sources, and success metrics. Then we turn that information into a delivery roadmap with practical milestones. After launch, we can support monitoring, improvements, maintenance, and new feature development.',
        ],
      },
    ],
    links: [
      { href: '/services', label: 'Software services overview' },
      { href: '/web-development-services', label: 'Web application development' },
      { href: '/technologies', label: 'Technologies we use' },
      { href: '/contact-us', label: 'Plan custom software' },
    ],
    breadcrumb: serviceBreadcrumb('Custom Software Development Company', '/software-development-company'),
    faqs: [
      {
        question: 'What custom software does SmartX build?',
        answer:
          'SmartX builds SaaS platforms, dashboards, portals, CRM tools, ERP modules, workflow systems, integrations, and internal business applications.',
      },
      {
        question: 'Can SmartX modernise legacy software?',
        answer:
          'Yes. SmartX can audit legacy systems, plan migrations, rebuild modules, improve integrations, and create modern interfaces around existing data.',
      },
    ],
    priority: 0.85,
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
    ],
    links: [
      { href: '/web-development-services', label: 'SEO-friendly web development' },
      { href: '/portfolio', label: 'View portfolio' },
      { href: '/case-studies', label: 'Read case studies' },
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
    ],
    links: [
      { href: '/software-development-company', label: 'Custom software development' },
      { href: '/web-development-services', label: 'Website chatbot integration' },
      { href: '/contact-us', label: 'Automate a workflow' },
    ],
    breadcrumb: serviceBreadcrumb('AI Automation Services', '/ai-automation-services'),
    faqs: [
      {
        question: 'What can SmartX automate with AI?',
        answer:
          'SmartX can automate lead qualification, chatbot support, document processing, CRM updates, reporting, internal knowledge search, and repetitive business workflows.',
      },
      {
        question: 'Do AI automations connect with existing tools?',
        answer:
          'Yes. SmartX can connect AI automation with websites, CRMs, databases, spreadsheets, email systems, and custom applications.',
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
    priority: 0.9,
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
      { href: '/case-studies', label: 'Read case studies' },
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
        h2: 'Frontend and Web Technologies',
        body: [
          'For modern websites and web applications, we often use React, Next.js, TypeScript, Tailwind CSS, and component-based design systems. These tools support fast interfaces, clean routing, reusable UI, strong developer experience, and SEO-friendly rendering when implemented correctly.',
          'We also work with CMS integrations, headless content models, ecommerce storefronts, analytics tools, schema markup, and performance optimisation workflows. The frontend is planned as part of the customer journey and the technical SEO foundation, not just the visual layer.',
        ],
      },
      {
        h2: 'Backend, Cloud, Mobile, and AI',
        body: [
          'Backend work may include Node.js, API development, relational and document databases, authentication, payment systems, admin panels, and third-party integrations. For cloud and DevOps, we support hosting, deployment pipelines, monitoring, backups, and scalable architecture decisions.',
          'Mobile projects may use cross-platform or native approaches depending on product needs. AI automation projects can involve language model integrations, retrieval workflows, business rules, data extraction, chat interfaces, and tool integrations with CRMs or internal systems.',
        ],
      },
      {
        h2: 'Choosing the Right Stack',
        body: [
          'We do not recommend technology because it is fashionable. We recommend it because it supports the client roadmap. A marketing website, MVP, enterprise dashboard, and AI workflow all have different constraints. SmartX helps choose a stack that balances speed, reliability, cost, hiring availability, and future change.',
        ],
      },
      {
        h2: 'Technology Decisions We Document',
        body: [
          'During planning, we document important technical choices such as rendering strategy, hosting, data storage, authentication, API boundaries, CMS needs, analytics, deployment workflow, and third-party services. This makes the project easier to understand and reduces ambiguity when future features are added.',
          'Clear technology documentation also helps business teams make budget and maintenance decisions. You can see which parts of the system are custom, which depend on external providers, and which can be scaled, replaced, or extended as the product grows.',
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
      { href: '/case-studies', label: 'Case study patterns' },
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
