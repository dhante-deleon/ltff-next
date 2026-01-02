import Image from 'next/image'

export default function Hero(){
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <h2>Building healthier, stronger communities through food and education.</h2>
          <p>We believe every child deserves access to nutritious meals and practical learning. Our programs combine food security with hands-on education to transform lives.</p>
          <div className="cta-row">
            <a href="/donate" className="btn primary">Support Our Mission</a>
            <a href="/#programs" className="btn ghost">Learn More</a>
          </div>
        </div>
        <div className="hero-image">
          <Image src="/hero-image.jpg" alt="Community team with Learning Through Food banner" fill style={{objectFit:'cover'}} />
        </div>
      </div>
    </section>
  )
}
