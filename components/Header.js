import Link from 'next/link'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <div style={{display:'flex',alignItems:'center',gap:16}}>
          <Link href="/">
            <div style={{background:'linear-gradient(135deg, var(--accent), var(--accent-dark))', borderRadius:'10px', padding:'8px 14px', display:'flex', alignItems:'center', justifyContent:'center', width:'120px', height:'44px'}}>
              <img src="/white-logo.svg" alt="LTFF" style={{height:'28px', width:'auto'}} />
            </div>
          </Link>
          <div style={{fontWeight:700,fontSize:'1.1rem',color:'var(--primary)'}}>Learning Through Food Foundation Inc.</div>
        </div>
        <nav>
          <Link href="/#programs">Programs</Link>
          <Link href="/events">Events</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/donate" className="btn primary">Donate</Link>
        </nav>
      </div>
    </header>
  )
}
