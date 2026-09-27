import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Menu, X } from 'lucide-react'

const services = [
  ['AI & Machine Learning', 'ai-machine-learning'],
  ['Web Development', 'web-development'],
  ['eCommerce Development', 'ecommerce'],
  ['Mobile App Development', 'mobile-app-development'],
  ['Custom Software', 'custom-software'],
  ['Cloud & DevOps', 'cloud-devops'],
  ['Digital Marketing', 'digital-marketing'],
  ['Business Automation', 'automation'],
]

export function Brand({ footer = false, href = '/' }: { footer?: boolean; href?: string }) {
  return <a className={`brand ${footer ? 'brand-footer' : ''}`} href={href} aria-label="iamtechni home">
    <span className="brand-crop"><img src="/iamtechni-logo.png" alt="iamtechni" /></span>
  </a>
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 16)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  const closeMenu = () => setMenuOpen(false)

  return <motion.header id="top" className={`site-header ${scrolled ? 'header-scrolled' : ''}`} initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55, ease: [.22, 1, .36, 1] }}>
    <div className="nav-inner">
      <Brand />
      <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
        <a href="/" onClick={closeMenu}>Home</a>
        <a href="/about" onClick={closeMenu}>About</a>
        <details className="home-services-menu"><summary>Services <ArrowDownRight size={14}/></summary><div>{services.map(([name, slug]) => <a key={slug} href={`/services/${slug}`} onClick={closeMenu}>{name}<ArrowUpRight size={13}/></a>)}</div></details>
        <a href="/portfolio" onClick={closeMenu}>Portfolio</a>
        <a href="/contact" onClick={closeMenu}>Contact</a>
        <div className="mobile-menu-contact"><a href="mailto:iamtechni.hr@outlook.com">iamtechni.hr@outlook.com</a><a href="tel:+917418120053">+91 74181 20053</a></div>
      </nav>
      <a className="nav-cta" href="/contact">Let’s talk <ArrowUpRight size={15} /></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
    </div>
  </motion.header>
}

export function SiteFooter({ interior = false }: { interior?: boolean }) {
  const home = interior ? '/' : ''
  return <footer className={`site-footer${interior ? ' detail-site-footer' : ''}`}>
    <motion.div className="footer-main page-shell" variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: .72, ease: [.22, 1, .36, 1] } } }} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .16 }}>
      <div className="footer-brand"><Brand footer href={home || '#home'} /><p>Practical technology for businesses ready to build what’s next.</p></div>
      <div className="footer-column"><span>EXPLORE</span><a href="/services">Services</a><a href="/about">About iamtechni</a><a href={interior ? '/portfolio' : '#work'}>Selected work</a><a href={interior ? '/contact' : '#contact'}>Let’s talk</a></div>
      <div className="footer-column"><span>CAPABILITIES</span><a href="/services/web-development">Web development</a><a href="/services/ai-machine-learning">AI &amp; machine learning</a><a href="/services/cloud-devops">Cloud &amp; DevOps</a><a href="/services/custom-software">Custom software</a></div>
      <div className="footer-contact"><span>GET IN TOUCH</span><p>Pondicherry, India<br />Working across Tamil Nadu</p><a href="mailto:iamtechni.hr@outlook.com">iamtechni.hr@outlook.com</a><a href="tel:+917418120053">+91 74181 20053</a><a href={interior ? '/contact' : '#contact'}>Let’s talk <ArrowUpRight size={14} /></a></div>
    </motion.div>
    <div className="footer-bottom page-shell"><span>© 2026 iamtechni. All rights reserved.</span><a href={interior ? '#top' : '#home'}>Back to top <ArrowUpRight size={13} /></a></div>
  </footer>
}
