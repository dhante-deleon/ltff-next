import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen)
  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <header className="site-header">
      <div className="header-top">
        <Link href="/">
          <div style={{background:'linear-gradient(135deg, var(--accent), var(--accent-dark))', borderRadius:'10px', padding:'8px 14px', display:'flex', alignItems:'center', justifyContent:'center', width:'120px', height:'44px'}}>
            <img src="/white-logo.svg" alt="LTFF" style={{height:'28px', width:'auto'}} />
          </div>
        </Link>
        
        <div className="company-name" style={{fontWeight:700,fontSize:'1.1rem',color:'var(--primary)'}}>Learning Through Food Foundation Inc.</div>
        
        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <Link href="/#programs">Programs</Link>
          <Link href="/events">Events</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/donate" className="btn primary">Donate</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={toggleMenu}
          style={{
            background:'none',
            border:'none',
            cursor:'pointer',
            padding:'8px',
            fontSize:'1.5rem',
            color:'var(--primary)',
            marginLeft:'auto'
          }}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="mobile-nav">
          <Link href="/#programs" onClick={closeMenu}>Programs</Link>
          <Link href="/events" onClick={closeMenu}>Events</Link>
          <Link href="/about" onClick={closeMenu}>About</Link>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
          <Link href="/donate" className="btn primary" style={{width:'100%', textAlign:'center'}} onClick={closeMenu}>Donate</Link>
        </nav>
      )}
    </header>
  )
}
