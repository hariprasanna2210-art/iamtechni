import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, MotionConfig, useMotionValueEvent, useMotionValue, useReducedMotion, useScroll, useTransform, type Variants } from 'framer-motion'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Braces, BrainCircuit,
  Check, Cloud, Code2, Database, Globe2, Menu, Network,
  PanelTop, ShieldCheck, Smartphone, Sparkles,
  Workflow, X, Zap, Blocks, Compass, Gauge, Layers3, LifeBuoy,
  LockKeyhole, MessageCircle, Rocket, Search, ShoppingBag, Target, BriefcaseBusiness,
} from 'lucide-react'
import ServicePages from './ServicePages'

const services = [
  { icon: PanelTop, number: '01', title: 'Websites & digital products', copy: 'Brand-led websites and web applications that make it easy for customers to take the next step.', detail: 'Web design / E-commerce / Web apps' },
  { icon: ShoppingBag, number: '02', title: 'eCommerce & online stores', copy: 'Create a clear, trustworthy path from product discovery through checkout and follow-up.', detail: 'Online stores / Payments / Commerce flows' },
  { icon: Smartphone, number: '03', title: 'Mobile applications', copy: 'Useful mobile experiences that bring your services closer to customers and support the way your team works.', detail: 'iOS / Android / Cross-platform' },
  { icon: Sparkles, number: '04', title: 'AI & machine learning', copy: 'Turn information into practical tools, automate repetitive work and make smarter use of your business data.', detail: 'AI assistants / Machine learning / Automation' },
  { icon: Cloud, number: '05', title: 'Cloud & DevOps', copy: 'Build on secure, dependable infrastructure that can scale with your product and your ambitions.', detail: 'Cloud architecture / Deployment / CI/CD' },
  { icon: Network, number: '06', title: 'Digital marketing', copy: 'Reach the right people with useful content, clear positioning and marketing that supports sustainable growth.', detail: 'SEO / Content / Digital campaigns' },
  { icon: Workflow, number: '07', title: 'Custom software', copy: 'Replace disconnected tools and workarounds with software shaped around your real business process.', detail: 'Business systems / Integrations / Automation' },
  { icon: Zap, number: '08', title: 'Workflow automation', copy: 'Connect everyday tools and reduce repeated handoffs so your team can spend more time on useful work.', detail: 'Integrations / Process automation / AI' },
]
const technologies = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'OpenAI', 'Google Gemini', 'AWS', 'Azure', 'Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'PostgreSQL', 'MySQL', 'MongoDB', 'WordPress', 'WooCommerce']

const revealVariants = {
  up: { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -34 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 34 }, visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: .94 }, visible: { opacity: 1, scale: 1 } },
  clip: { hidden: { opacity: 0, clipPath: 'inset(0 0 18% 0)' }, visible: { opacity: 1, clipPath: 'inset(0 0 0% 0)' } },
} as const

function InView({ children, className = '', delay = 0, from = 'up' }: { children: React.ReactNode; className?: string; delay?: number; from?: keyof typeof revealVariants }) {
  const variant = revealVariants[from]
  return <motion.div className={className} variants={{ hidden: variant.hidden, visible: { ...variant.visible, transition: { duration: .72, delay, ease: [.22, 1, .36, 1] } } }} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .16 }}>{children}</motion.div>
}

function Brand({ footer = false }: { footer?: boolean }) {
  return <a className={`brand ${footer ? 'brand-footer' : ''}`} href="#home" aria-label="iamtechni home">
    <span className="brand-crop"><img src="/iamtechni-logo.png" alt="iamtechni" /></span>
  </a>
}

const heroStates = [
  { eyebrow: 'DIGITAL PRODUCTS', title: ['Build', 'Something', 'Remarkable.'], description: 'From idea to launch, create digital experiences designed around real business needs.', cta: 'Start Your Project', href: '/contact', theme: 'build', visual: 'build' },
  { eyebrow: 'ARTIFICIAL INTELLIGENCE', title: ['Make Your', 'Business', 'Intelligent.'], description: 'Build practical AI, machine learning and automation solutions that turn information into action.', cta: 'Explore AI', href: '/services/ai-machine-learning', theme: 'ai', visual: 'ai' },
  { eyebrow: 'DIGITAL EXPERIENCES', title: ['Create', 'Web Experiences', 'People Remember.'], description: 'High-performance websites and eCommerce experiences built around your customers.', cta: 'Build Your Website', href: '/services/web-development', theme: 'web', visual: 'web' },
  { eyebrow: 'CONNECTED TECHNOLOGY', title: ['Connect', 'Every Part', 'Of Your Business.'], description: 'Bring web, mobile, software, cloud and automation together into one digital ecosystem.', cta: 'Explore Solutions', href: '/services', theme: 'connect', visual: 'connect' },
  { eyebrow: 'BUSINESS GROWTH', title: ['Turn Technology', 'Into', 'Momentum.'], description: 'Build, launch and continuously improve digital products that support your next stage of growth.', cta: 'Talk To Us', href: '/contact', theme: 'grow', visual: 'grow' },
]

function KineticCanvas({ type }: { type: string }) {
  if (type === 'ai') return <div className="canvas-ai" aria-label="Data streams moving through an intelligent system"><svg viewBox="0 0 640 520" aria-hidden="true"><path d="M45 390 C150 290 177 430 292 265 S450 130 590 72"/><path d="M65 130 C180 206 189 100 315 234 S462 386 600 330"/><path d="M102 466 C190 330 264 420 348 290 S470 204 565 208"/></svg><div className="ai-data-core"><span>INPUT</span><b>MAKE<br/>SENSE</b><span>INTENT → ACTION</span></div>{Array.from({length:12},(_,i)=><i key={i} className={`data-particle data-particle-${i+1}`} />)}<span className="canvas-caption">INFORMATION, IN MOTION</span></div>
  if (type === 'web') return <div className="canvas-web" aria-label="A responsive website interface in progress"><div className="web-window"><div className="web-window-top"><i/><i/><i/><span>iamtechni / preview</span></div><div className="web-topline"><b>FIELD<br/>&amp; FORM</b><span>STUDIO&nbsp;&nbsp;&nbsp; WORK&nbsp;&nbsp;&nbsp; JOURNAL</span><i/></div><div className="web-content"><small>MADE FOR WHAT'S NEXT</small><strong>Make room<br/><em>to grow.</em></strong><span className="web-cta-mark">EXPLORE THE COLLECTION ↗</span><div className="web-image-shape"><i/><b/></div></div><div className="web-footer-lines"><i/><i/><i/></div></div><div className="web-float-panel"><span>LAYOUT</span><b>Responsive</b><i/><i/></div><div className="web-cursor"><ArrowUpRight size={18}/></div><span className="canvas-caption">ONE IDEA, MANY SCREENS</span></div>
  if (type === 'connect') return <div className="canvas-connect" aria-label="A digital system connecting web, mobile, software, cloud and automation"><div className="connect-ribbon ribbon-one"/><div className="connect-ribbon ribbon-two"/><div className="connect-ribbon ribbon-three"/><div className="connect-hub"><span>IAMTECHNI</span><b>Connected<br/>by design</b></div>{[['WEBSITE','connect-web'],['MOBILE','connect-mobile'],['SOFTWARE','connect-software'],['CLOUD','connect-cloud'],['AUTOMATION','connect-auto']].map(([label,cls],i)=><div key={cls} className={`connect-piece ${cls}`} style={{'--piece':i} as React.CSSProperties}><i/><span>{label}</span></div>)}<span className="canvas-caption">THE PARTS WORK BETTER TOGETHER</span></div>
  if (type === 'grow') return <div className="canvas-grow" aria-label="An abstract growth and conversion journey"><div className="grow-backdrop-lines"><i/><i/><i/><i/><i/><i/></div><svg viewBox="0 0 640 520" aria-hidden="true"><path d="M40 408 C140 392 160 345 245 350 S360 242 415 260 S515 120 604 86"/></svg><div className="grow-funnel"><span>DISCOVER</span><i/><span>ENGAGE</span><i/><span>CONVERT</span></div><div className="grow-columns"><i/><i/><i/><i/><i/><i/><i/></div><span className="grow-marker marker-a"/><span className="grow-marker marker-b"/><span className="grow-marker marker-c"/><div className="grow-note">SIGNALS<br/><b>→ MOMENTUM</b></div><span className="canvas-caption">PROGRESS YOU CAN BUILD ON</span></div>
  return <div className="canvas-build" aria-label="Interface fragments assembling into a digital product"><div className="build-fragment fragment-nav"><i/><i/><i/><b/></div><div className="build-fragment fragment-copy"><span>PRODUCT / 01</span><b>Make space<br/>for the next.</b><i/><i/></div><div className="build-fragment fragment-image"><i/><b/></div><div className="build-fragment fragment-card"><span>YOUR WORKSPACE</span><i/><i/><b/></div><div className="build-fragment fragment-chip">READY TO SHIP <ArrowUpRight size={13}/></div><svg viewBox="0 0 640 520" aria-hidden="true"><path d="M80 92 L212 156 M480 64 L412 155 M55 368 L186 326 M560 393 L432 345"/></svg><span className="canvas-caption">IDEA → INTERFACE → EXPERIENCE</span></div>
}

function KineticHero() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [direction, setDirection] = useState(1)
  const heroRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLDivElement>(null)
  const touchX = useRef<number | null>(null)
  const reduceMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const canvasY = useTransform(scrollY, [0, 550], [0, 20])
  const canvasScale = useTransform(scrollY, [0, 550], [1, .97])
  const pointer = useMotionValue({ x: 0, y: 0 })
  const state = heroStates[active]
  const titleVariants: Variants = {
    enter: (travel: number) => ({ opacity: 0, y: travel > 0 ? 28 : -22, scale: .99 }),
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: reduceMotion ? .18 : .68, ease: [.22, 1, .36, 1], staggerChildren: reduceMotion ? 0 : .075 } },
    leave: (travel: number) => ({ opacity: 0, y: travel > 0 ? -18 : 16, scale: .995, transition: { duration: reduceMotion ? .12 : .22, ease: [.4, 0, 1, 1] } }),
  }
  const titleLineVariants: Variants = {
    enter: (travel: number) => ({ opacity: 0, y: travel > 0 ? 17 : -14 }),
    show: { opacity: 1, y: 0, transition: { duration: reduceMotion ? .18 : .56, ease: [.22, 1, .36, 1] } },
    leave: { opacity: 0, y: -8, transition: { duration: reduceMotion ? .1 : .16 } },
  }

  useEffect(() => {
    if (paused || reduceMotion) return
    const timer = window.setInterval(() => { setDirection(1); setActive(value => (value + 1) % heroStates.length) }, 4500)
    return () => window.clearInterval(timer)
  }, [paused, reduceMotion])

  useMotionValueEvent(pointer, 'change', value => {
    if (!canvasRef.current) return
    canvasRef.current.style.setProperty('--parallax-x', `${value.x}px`)
    canvasRef.current.style.setProperty('--parallax-y', `${value.y}px`)
  })

  const onPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (event.pointerType === 'touch' || !canvasRef.current) return
    const box = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - box.left) / box.width - .5
    const y = (event.clientY - box.top) / box.height - .5
    pointer.set({ x: x * 12, y: y * 12 })
  }
  const onTouchStart = (event: React.TouchEvent<HTMLElement>) => { touchX.current = event.touches[0]?.clientX ?? null }
  const onTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
    if (touchX.current === null) return
    const delta = event.changedTouches[0].clientX - touchX.current
    touchX.current = null
    if (Math.abs(delta) > 70) { setDirection(delta < 0 ? 1 : -1); setActive(value => (value + (delta < 0 ? 1 : -1) + heroStates.length) % heroStates.length) }
  }

  return <section ref={heroRef} className={`hero kinetic-hero theme-${state.theme}`} id="home" aria-labelledby="kinetic-title" onPointerEnter={event => { if (event.pointerType !== 'touch') setPaused(true) }} onPointerLeave={() => setPaused(false)} onPointerMove={onPointerMove} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
    <div className="kinetic-light-field" aria-hidden="true"><i/><i/><i/></div>
    <div className="kinetic-hero-container">
    <div className="kinetic-hero-layout">
      <div className="kinetic-copy">
        <div className="kinetic-eyebrow" key={`eyebrow-${active}`}><i/>{state.eyebrow}</div>
        <div className="kinetic-title-window" aria-live="polite" aria-atomic="true"><AnimatePresence mode="wait" initial={false} custom={direction}><motion.h1 id="kinetic-title" key={`title-${active}`} custom={direction} variants={titleVariants} initial="enter" animate="show" exit="leave"><motion.span custom={direction} variants={titleLineVariants}>{state.title[0]}</motion.span><motion.span custom={direction} variants={titleLineVariants}>{state.title[1]}</motion.span><motion.em custom={direction} variants={titleLineVariants}>{state.title[2]}</motion.em></motion.h1></AnimatePresence></div>
        <AnimatePresence mode="wait" initial={false}><motion.p className="kinetic-description" key={`description-${active}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0, transition: { duration: .34, delay: .13 } }} exit={{ opacity: 0, y: -8, transition: { duration: .16 } }}>{state.description}</motion.p></AnimatePresence>
        <a className="kinetic-cta button button-primary" href={state.href}><AnimatePresence mode="wait" initial={false}><motion.span key={`cta-${active}`} initial={{ opacity: 0, y: 9 }} animate={{ opacity: 1, y: 0, transition: { duration: .28, delay: .12 } }} exit={{ opacity: 0, y: -7, transition: { duration: .14 } }}>{state.cta}</motion.span></AnimatePresence><ArrowUpRight size={16}/></a>
        <div className="kinetic-progress" role="group" aria-label="Hero story states">{heroStates.map((item,index)=><button key={item.theme} type="button" aria-label={`Show ${item.eyebrow.toLowerCase()} state`} aria-pressed={active===index} className={active===index?'is-active':''} onClick={()=>{setDirection(index>active?1:-1);setActive(index)}}><span>0{index+1}</span><i/></button>)}</div>
      </div>
      <div className="kinetic-visual-column"><motion.div className="kinetic-canvas-wrap" style={{ y: canvasY, scale: canvasScale }}>
        <div className={`kinetic-canvas canvas-${state.visual}`} ref={canvasRef} key={`canvas-${active}`}><motion.div className="canvas-scene" initial={{ opacity: 0, scale: .94, rotate: active%2?1:-1 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: reduceMotion ? .18 : .75, ease: [.22, 1, .36, 1] }}><KineticCanvas type={state.visual}/></motion.div><div className="canvas-state-label"><span>IAMTECHNI / 0{active+1}</span><b>{state.eyebrow}</b></div><div className="canvas-surface-grain" aria-hidden="true"/></div>
      </motion.div></div>
    </div>
    <div className="kinetic-hero-footer"><span>BUILD · CONNECT · AUTOMATE · GROW</span><span><i/> WHATEVER YOU'RE BUILDING, WE CONNECT THE TECHNOLOGY BEHIND IT.</span></div>
    </div>
  </section>
}

function App() {
  if (window.location.pathname !== '/') return <ServicePages />
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  useEffect(() => { const update = () => setScrolled(window.scrollY > 16); update(); window.addEventListener('scroll', update, { passive: true }); return () => window.removeEventListener('scroll', update) }, [])
  const closeMenu = () => setMenuOpen(false)

  return <MotionConfig reducedMotion="user"><>
    <motion.header className={`site-header ${scrolled ? 'header-scrolled' : ''}`} initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55, ease: [.22, 1, .36, 1] }}>
      <div className="nav-inner">
        <Brand />
        <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          <a href="/" onClick={closeMenu}>Home</a>
          <a href="/about" onClick={closeMenu}>About</a>
          <details className="home-services-menu"><summary>Services <ArrowDownRight size={14}/></summary><div>{[['AI & Machine Learning','ai-machine-learning'],['Web Development','web-development'],['eCommerce Development','ecommerce'],['Mobile App Development','mobile-app-development'],['Custom Software','custom-software'],['Cloud & DevOps','cloud-devops'],['Digital Marketing','digital-marketing'],['Business Automation','automation']].map(([name,slug])=><a key={slug} href={`/services/${slug}`} onClick={closeMenu}>{name}<ArrowUpRight size={13}/></a>)}</div></details>
          <a href="/portfolio" onClick={closeMenu}>Portfolio</a>
          <a href="/contact" onClick={closeMenu}>Contact</a><div className="mobile-menu-contact"><a href="mailto:iamtechni.hr@outlook.com">iamtechni.hr@outlook.com</a><a href="tel:+917418120053">+91 74181 20053</a></div>
        </nav>
        <a className="nav-cta" href="/contact">Let’s talk <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
    </motion.header>

    <main>
      <KineticHero />
      <section className="ecosystem-strip" aria-label="Technologies we work with"><div className="page-shell ecosystem-inner"><p>Technology chosen to fit the work</p><div className="ecosystem-words">{['React', 'Python', 'OpenAI', 'Google Gemini', 'AWS', 'Azure', 'PostgreSQL'].map((item, index) => <InView key={item} delay={index * .045} from={index % 2 ? 'up' : 'scale'}><span>{item}</span></InView>)}</div></div></section>

      <section className="home-technology"><div className="page-shell"><InView className="home-tech-heading"><p className="eyebrow"><span /> A CONNECTED TECHNOLOGY ECOSYSTEM</p><h2>Choose the tools<br /><em>that fit the work.</em></h2><p>Modern technology is most useful when it solves a defined problem and can be supported over time. We work across the layers that make digital services practical: interfaces, applications, data, infrastructure and discovery.</p></InView><div className="home-tech-grid">{[['Frontend','Build responsive websites and product interfaces.','React · Next.js · TypeScript'],['Backend & data','Connect services, business rules and information.','Node.js · Python · PostgreSQL'],['AI & machine learning','Put language models and data to useful work.','OpenAI · Gemini · Python'],['Cloud & DevOps','Run and deliver applications with repeatable foundations.','AWS · Azure · Docker'],['CMS & commerce','Help teams manage content, catalogues and transactions.','WordPress · WooCommerce'],['Marketing & measurement','Understand discovery, behaviour and conversion.','SEO · Analytics · Search Console']].map(([name,copy,stack],i)=><InView key={name} delay={i*.05} from={i%2?'up':'scale'}><article><span>0{i+1}</span><h3>{name}</h3><p>{copy}</p><b>{stack}</b></article></InView>)}</div></div></section>

      <section className="services-section section-pad" id="services"><div className="page-shell">
        <InView className="section-intro services-intro"><div><p className="eyebrow"><span /> WHAT WE DO</p><h2>Technology for the<br /><em>work ahead.</em></h2></div><p className="intro-copy">From the first digital touchpoint to the systems behind it, bring the right expertise together in one place.</p></InView>
        <div className="service-list">{services.map((service) => { const slug = ({'01':'web','02':'ecommerce','03':'mobile','04':'ai','05':'cloud','06':'marketing','07':'software','08':'automation'} as Record<string,string>)[service.number]; return <InView key={service.number} delay={Number(service.number) * .04} from={service.number === '01' ? 'left' : 'up'}><article className="service-row"><span className="service-number">{service.number}</span><span className="service-icon"><service.icon size={22} strokeWidth={1.6} /></span><div className="service-content"><h3>{service.title}</h3><p>{service.copy}</p></div><span className="service-detail">{service.detail}</span><a href={`/services/${slug}`} aria-label={`Explore ${service.title}`}><ArrowUpRight size={19} /></a></article></InView>})}</div>
        <a className="all-services" href="/services">Explore all service capabilities <span>View services <ArrowRight size={15} /></span></a>
      </div></section>

      <section className="story-section ai-section" id="ai"><div className="page-shell story-layout"><InView className="story-copy" from="left"><p className="eyebrow"><span /> AI THAT HAS A JOB TO DO</p><h2>Make good data<br />work <em>harder.</em></h2><p>Bring AI and automation into the parts of your business where they can save time, surface useful knowledge or help people make better decisions. Practical applications include generative AI, retrieval-augmented search, assistants, document processing and machine learning.</p><ul className="capability-list"><li>RAG knowledge assistants and vector search</li><li>AI chatbots, agents and API integrations</li><li>Document intelligence and workflow automation</li></ul><a className="inline-link" href="/services/ai">Explore AI solutions <ArrowUpRight size={15} /></a></InView><InView className="ai-art" from="scale"><div className="ai-orbit ai-orbit-a" /><div className="ai-orbit ai-orbit-b" /><span className="ai-link ai-link-a" /><span className="ai-link ai-link-b" /><span className="ai-link ai-link-c" /><span className="ai-signal signal-a" /><span className="ai-signal signal-b" /><div className="ai-center"><BrainCircuit size={46} /><b>Intelligence<br />in context</b></div><div className="ai-point ai-point-a"><Search size={17} /><span>Find patterns</span></div><div className="ai-point ai-point-b"><MessageCircle size={17} /><span>Answer clearly</span></div><div className="ai-point ai-point-c"><Workflow size={17} /><span>Automate safely</span></div><div className="ai-point ai-point-d"><Database size={17} /><span>Use your data</span></div></InView></div></section>

      <section className="story-section web-section" id="web"><div className="page-shell showcase-layout"><InView className="showcase-visual browser-showcase" from="clip"><div className="showcase-browser"><div className="showcase-browser-bar"><i /><i /><i /><span>yourbrand.in</span></div><div className="showcase-page"><div className="showcase-nav"><b>FIELD &amp; FORM</b><span>Shop</span><span>Our story</span><ShoppingBag size={15} /></div><div className="showcase-feature"><div><small>MADE FOR EVERY DAY</small><strong>Find your<br />good thing.</strong><span className="showcase-link">Explore the collection <ArrowRight size={12} /></span></div><div className="product-still"><div className="product-vase" /><div className="product-orb" /></div></div><div className="showcase-products"><i /><i /><i /></div></div></div><div className="showcase-badge"><Gauge size={16} /><span>Fast, focused<br />experiences</span></div></InView><InView className="showcase-copy" from="right"><p className="eyebrow"><span /> WEB &amp; ECOMMERCE</p><h2>Your best first<br />impression, <em>online.</em></h2><p>Give customers a clear path from discovery to checkout with a high-performance website or commerce experience that feels like your business. We bring together responsive design, React or Next.js development, CMS and API integrations, SEO foundations, security and performance.</p><div className="showcase-points"><span>Thoughtful UX</span><span>Responsive by default</span><span>Built to convert</span></div><a className="inline-link" href="/services/web">Explore web development <ArrowUpRight size={15} /></a><a className="inline-link" href="/services/ecommerce">Build an eCommerce experience <ArrowUpRight size={15} /></a></InView></div></section>

      <section className="mobile-section" id="mobile"><div className="page-shell mobile-layout"><InView className="mobile-copy" from="left"><p className="eyebrow"><span /> MOBILE, MADE USEFUL</p><h2>Good ideas belong<br /><em>in people’s hands.</em></h2><p>From customer-facing apps to tools for your team, create a mobile experience that feels natural on iOS and Android. Plan the user experience, API connections, authentication, notifications, payments, analytics and release support together.</p><div className="mobile-platforms"><span>iOS</span><i /><span>Android</span><i /><span>Cross-platform</span></div><a className="inline-link" href="/services/mobile">Explore mobile app development <ArrowUpRight size={15} /></a></InView><InView className="device-stage" from="scale"><div className="device-halo" /><div className="device device-back"><div className="device-notch" /><div className="device-screen device-screen-back"><i /><i /><b /><span /><span /><span /></div></div><div className="device device-front"><div className="device-notch" /><div className="device-screen"><span className="device-greeting">GOOD AFTERNOON</span><b>Your next<br />step, made<br /><em>simple.</em></b><div className="device-visual"><div /><i /></div><span className="device-action">Explore your plan <ArrowRight size={12} /></span><div className="device-tabs"><i /><i /><i /><i /></div></div></div><div className="device-float"><Check size={15} /> A smoother day</div></InView></div></section>

      <section className="software-section" id="software"><div className="page-shell software-layout"><InView className="software-copy" from="left"><p className="eyebrow"><span /> CUSTOM SOFTWARE</p><h2>Make your tools<br />fit <em>your work.</em></h2><p>Connect the systems you already use or build the one your process is missing. Business management systems, CRM and ERP tools, dashboards, internal applications and role-based workflows can reduce workarounds and make operations clearer.</p><a className="inline-link" href="/services/software">Explore custom software <ArrowUpRight size={15} /></a></InView><InView className="workflow-art" from="right"><div className="workflow-line workflow-line-one" /><div className="workflow-line workflow-line-two" /><div className="workflow-line workflow-line-three" /><div className="workflow-module module-source"><Database size={18} /><b>Business data</b><span>One dependable source</span></div><div className="workflow-module module-logic"><Workflow size={18} /><b>Your process</b><span>Rules that make sense</span></div><div className="workflow-module module-team"><Blocks size={18} /><b>Team tools</b><span>Work in one flow</span></div><div className="workflow-module module-result"><Check size={18} /><b>Clear outcomes</b><span>Less friction, daily</span></div><span className="workflow-spark">+ connected</span></InView></div></section>

      <section className="cloud-section" id="cloud"><div className="page-shell cloud-layout"><InView className="cloud-copy" from="left"><p className="eyebrow"><span /> CLOUD &amp; DEVOPS</p><h2>A steady foundation<br />for <em>what’s next.</em></h2><p>Deploy with confidence, keep environments consistent and make room to scale with a cloud setup matched to your product and team. CI/CD, monitoring, logging, backups and access controls help teams deliver changes predictably and prepare for operational issues.</p><a className="inline-link" href="/services/cloud">Explore cloud &amp; DevOps <ArrowUpRight size={15} /></a></InView><InView className="cloud-map" from="scale"><div className="cloud-map-core"><Cloud size={38} /><b>Reliable delivery</b><span>Build · Ship · Improve</span></div><div className="cloud-map-node cloud-aws">AWS</div><div className="cloud-map-node cloud-azure">Azure</div><div className="cloud-map-node cloud-docker">Docker</div><div className="cloud-map-node cloud-kube">Kubernetes</div><div className="cloud-map-node cloud-actions">GitHub Actions</div><div className="cloud-map-node cloud-terraform">Terraform</div><span className="cloud-map-path path-a" /><span className="cloud-map-path path-b" /><span className="cloud-map-path path-c" /><span className="cloud-map-path path-d" /></InView></div></section>
      <section className="about-section" id="about"><div className="about-layout page-shell"><InView className="about-visual"><div className="about-cross cross-one" /><div className="about-cross cross-two" /><div className="about-statement"><span>THE RIGHT TECHNOLOGY</span><b>makes room<br />for better work.</b><i /></div><div className="about-orbit orbit-left" /><div className="about-orbit orbit-right" /><div className="about-caption">A thoughtful approach, from idea to launch.</div></InView><InView className="about-copy"><h2>Good solutions<br />begin with <em>good questions.</em></h2><p>We’re an independent technology and digital solutions company working with businesses across Pondicherry and Tamil Nadu. We listen first, understand the real challenge, then bring the right people and technology to solve it.</p><p>Our work spans web, mobile, AI, cloud and custom software, with a shared focus on making technology useful to the people who rely on it.</p><a className="inline-link" href="#contact">Get to know us <ArrowUpRight size={15} /></a></InView></div></section>

      <section className="process-section section-pad" id="process"><div className="page-shell"><InView className="process-heading" from="left"><p className="eyebrow"><span /> HOW WE WORK</p><h2>Clear steps.<br /><em>Shared momentum.</em></h2><p>Good delivery comes from a thoughtful sequence, visible decisions and people staying connected to the work. Each stage clarifies what happens next and creates room for useful feedback.</p></InView><div className="process-track"><motion.span className="process-line-progress" aria-hidden="true" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: .3 }} transition={{ duration: 1.15, ease: [.22, 1, .36, 1] }} />{[['Discover',Compass],['Plan',Target],['Design',Sparkles],['Develop',Code2],['Test',ShieldCheck],['Launch',Rocket],['Scale',Layers3]].map(([label, Icon], index) => <InView key={String(label)} delay={index*.055} from={index%2?'up':'scale'}><article className="process-step"><span className="process-marker"><Icon size={18} /></span><span className="process-number">0{index+1}</span><h3>{String(label)}</h3><p>{['Understand goals, audiences, challenges and requirements.','Define architecture, scope, priorities and a practical roadmap.','Shape the user experience, visual system and interactions.','Build in reviewable increments with suitable technologies.','Check behaviour, devices, performance and security.','Deploy and configure the production environment carefully.','Improve and extend the solution as the business grows.'][index]}</p></article></InView>)}</div></div></section>
      <section className="technology-section"><div className="tech-layout page-shell"><InView className="tech-copy"><h2>Modern tools.<br /><em>Considered choices.</em></h2><p>Technology should fit the problem. We work across a flexible stack and choose tools for reliability, maintainability and a good experience.</p></InView><InView className="tech-display"><div className="tech-center"><Braces size={34} strokeWidth={1.4} /><span>THE RIGHT<br />FOUNDATION</span></div><div className="tech-orbit tech-orbit-one" /><div className="tech-orbit tech-orbit-two" />{technologies.map((item, index) => <span key={item} className={`tech-word tech-word-${index}`}>{item}</span>)}</InView></div></section>

      <section className="work-section section-pad" id="work"><div className="page-shell"><InView className="work-heading"><div><h2>Digital work with<br /><em>real purpose.</em></h2></div><p>No completed client project details are currently available to feature. These concept illustrations show possible directions only; they are not client work. We can discuss the challenge, users, scope and technology behind your own project.</p></InView><div className="work-grid"><InView className="work-feature" from="clip"><article className="work-card work-card-large"><div className="work-art work-art-commerce"><div className="mock-browser"><span /><span /><span /><i /></div><div className="mock-shop"><div className="mock-shop-copy"><small>YOUR BUSINESS, ONLINE</small><b>A clearer way<br />to connect.</b><i /></div><div className="mock-shop-object"><span /></div></div></div><div className="work-card-copy"><div><span>ILLUSTRATIVE DIRECTION</span><h3>A digital storefront made for people.</h3></div><ArrowUpRight size={19} /></div></article></InView><InView className="work-secondary" from="right"><article className="work-card work-card-small"><div className="work-art work-art-ops"><div className="ops-node ops-a"><Database size={18} /><i /></div><div className="ops-node ops-b"><Workflow size={18} /><i /></div><div className="ops-node ops-c"><Check size={18} /><i /></div><div className="ops-connector" /></div><div className="work-card-copy"><div><span>ILLUSTRATIVE DIRECTION</span><h3>Less friction in everyday work.</h3></div><ArrowUpRight size={19} /></div></article><p className="work-disclaimer">These are concept illustrations, not client case studies. We’ll feature completed work here as it becomes available.</p></InView></div></div></section>

      <section className="why-section" id="why"><div className="page-shell why-layout"><InView className="why-intro" from="left"><p className="eyebrow"><span /> WHY IAMTECHNI</p><h2>Technology with<br /><em>people in mind.</em></h2><p>Good digital work joins business understanding with careful engineering. We keep the goals, the team and the people using the result in view.</p></InView><div className="why-points"><InView from="right"><article><span className="why-icon icon-blue"><Compass size={20} /></span><div><h3>Understand before building</h3><p>Start from your customers, operations and actual business needs.</p></div><ArrowUpRight size={17} /></article></InView><InView delay={.08} from="right"><article><span className="why-icon icon-cyan"><LockKeyhole size={20} /></span><div><h3>Build for lasting use</h3><p>Choose maintainable foundations with performance and security in mind.</p></div><ArrowUpRight size={17} /></article></InView><InView delay={.16} from="right"><article><span className="why-icon icon-violet"><LifeBuoy size={20} /></span><div><h3>Stay close after launch</h3><p>Keep a direct line for improvements, support and what comes next.</p></div><ArrowUpRight size={17} /></article></InView></div></div></section>

      <section className="capability-section" aria-labelledby="capability-title"><div className="page-shell capability-layout"><InView from="scale"><span className="capability-glyph"><Zap size={23} /></span></InView><InView className="capability-copy" from="right"><p className="eyebrow"><span /> WHAT WE BRING TO THE TABLE</p><h2 id="capability-title">The right mix<br />for <em>real progress.</em></h2><p>We bring a connected set of capabilities to each engagement. The scope stays grounded in your goals, the needs of your team and the people you serve.</p></InView><div className="capability-rail">{[['Business context',BriefcaseBusiness],['Thoughtful design',Sparkles],['Modern engineering',Code2],['Ongoing partnership',MessageCircle]].map(([label, Icon], index) => <InView key={String(label)} delay={index*.07} from={index%2?'up':'left'}><span><Icon size={17} />{String(label)}</span></InView>)}</div></div></section>
      <section className="testimonial-section"><div className="page-shell testimonial-layout"><InView className="testimonial-heading"><h2>What working<br />with IAMTECHNI<br /><em>looks like.</em></h2></InView><InView className="testimonial-content"><span className="quote-mark">01</span><blockquote>Clear communication, visible planning and regular feedback keep the work connected to the original business need.</blockquote><p className="quote-credit">A PRACTICAL PARTNERSHIP</p><span className="testimonial-note">We align on scope and priorities, review working software, test intended use cases and plan a considered launch. After release, support and improvements can continue as needs evolve.</span></InView></div></section>

      <section className="cta-section" id="contact"><div className="cta-layout page-shell"><InView className="cta-copy"><h2>Let's Build Something<br /><em>Remarkable.</em></h2><p>Tell us what you’re building and let’s turn the idea into a scalable digital product.</p><a className="button button-light" href="#contact-form">Let’s talk <ArrowUpRight size={16} /></a><span className="cta-region"><Globe2 size={14} /> Working with businesses across Pondicherry and Tamil Nadu</span></InView><InView className="contact-panel" ><h3 id="contact-form">Start with a note.</h3><p>Share a little about your project and the best way to reach you.</p><form onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>
          <label>Your name<input name="name" autoComplete="name" placeholder="Name" required /></label>
          <label>Work email<input name="email" type="email" autoComplete="email" placeholder="you@business.com" required /></label>
          <label>What are you looking to do?<select name="service" defaultValue=""><option value="" disabled>Select an area</option>{services.map((service) => <option key={service.number}>{service.title}</option>)}</select></label>
          <button className="button button-primary form-button" type="submit">Send an enquiry <ArrowUpRight size={16} /></button>
          {submitted && <p className="form-message" role="status">Thanks for your note. This form needs an enquiry inbox connection before it can send your details.</p>}
        </form></InView></div></section>
    </main>

    <footer className="site-footer"><InView className="footer-main page-shell" from="up"><div className="footer-brand"><Brand footer /><p>Practical technology for businesses ready to build what’s next.</p></div><div className="footer-column"><span>EXPLORE</span><a href="/services">Services</a><a href="/about">About iamtechni</a><a href="#work">Selected work</a><a href="#contact">Let’s talk</a></div><div className="footer-column"><span>CAPABILITIES</span><a href="/services/web-development">Web development</a><a href="/services/ai-machine-learning">AI &amp; machine learning</a><a href="/services/cloud-devops">Cloud &amp; DevOps</a><a href="/services/custom-software">Custom software</a></div><div className="footer-contact"><span>GET IN TOUCH</span><p>Pondicherry, India<br />Working across Tamil Nadu</p><a href="mailto:iamtechni.hr@outlook.com">iamtechni.hr@outlook.com</a><a href="tel:+917418120053">+91 74181 20053</a><a href="#contact">Let’s talk <ArrowUpRight size={14} /></a></div></InView><div className="footer-bottom page-shell"><span>© 2026 iamtechni. All rights reserved.</span><a href="#home">Back to top <ArrowUpRight size={13} /></a></div></footer>
  </></MotionConfig>
}

export default App
