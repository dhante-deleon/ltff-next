export default function Footer(){
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="site-footer">
      <div className="container">
        <div>
          <strong>Learning Through Food Foundation</strong>
          <p>Empowering communities through nutrition, education, and sustainable food access.</p>
        </div>
        <div>
          <strong>Get in Touch</strong>
          <p>Email: <a href="mailto:info@learningthroughfood.org">info@learningthroughfood.org</a></p>
          <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
        </div>
        <div>
          <strong>Quick Links</strong>
          <p><a href="/donate">Donate Now</a></p>
          <p><a href="/contact">Partner With Us</a></p>
          <p><a href="/about">Our Story</a></p>
        </div>
      </div>
      <div style={{borderTop:'1px solid rgba(255,255,255,0.1)', marginTop:'2rem', paddingTop:'1.5rem', textAlign:'center'}}>
        <p style={{fontSize:'0.85rem', color:'rgba(255,255,255,0.6)', margin:0}}>© {currentYear} Learning Through Food Foundation. All rights reserved.</p>
      </div>
    </footer>
  )
}
