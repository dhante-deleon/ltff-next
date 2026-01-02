import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact(){
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess(true)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSuccess(false), 5000)
      } else {
        setError(data.error || 'Failed to send message')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Header />
      <main className="container">
        <section style={{padding:'6rem 0', maxWidth:'700px', margin:'0 auto'}}>
          <div style={{marginBottom:'3rem', textAlign:'center'}}>
            <span style={{color:'var(--accent)', fontSize:'0.9rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'1px'}}>Contact Us</span>
            <h1 style={{fontSize:'3rem', fontWeight:800, marginTop:'0.5rem', marginBottom:'1rem', background:'linear-gradient(135deg, var(--primary), var(--accent))', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text'}}>Get in Touch</h1>
            <p style={{fontSize:'1.1rem', color:'var(--secondary)', lineHeight:1.6}}>Have questions or want to partner with us? We'd love to hear from you. Fill out the form below and we'll get back to you within 48 hours.</p>
          </div>
          
          {success && (
            <div style={{background:'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(16,185,129,0.05))', border:'1px solid rgba(16,185,129,0.3)', color:'#047857', padding:'1.25rem', borderRadius:'12px', marginBottom:'2rem', fontSize:'0.95rem', fontWeight:600, animation:'slideDown 0.3s ease-out', display:'flex', gap:'0.75rem', alignItems:'center'}}>
              <span style={{fontSize:'1.3rem'}}>✓</span>
              Thank you! Your message has been sent successfully. We'll get back to you soon.
            </div>
          )}

          {error && (
            <div style={{background:'linear-gradient(135deg, rgba(220,38,38,0.1), rgba(220,38,38,0.05))', border:'1px solid rgba(220,38,38,0.3)', color:'#991b1b', padding:'1.25rem', borderRadius:'12px', marginBottom:'2rem', fontSize:'0.95rem', fontWeight:600, animation:'slideDown 0.3s ease-out', display:'flex', gap:'0.75rem', alignItems:'center'}}>
              <span style={{fontSize:'1.3rem'}}>✕</span>
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} style={{background:'white', borderRadius:'16px', padding:'2.5rem', boxShadow:'0 10px 15px -3px rgba(0,0,0,0.1)', border:'1px solid var(--border-light)'}}>
            <div style={{display:'grid', gap:'1.75rem'}}>
              <div>
                <label style={{display:'block', fontWeight:600, marginBottom:'0.75rem', color:'var(--primary)', fontSize:'0.95rem', textTransform:'uppercase', letterSpacing:'0.5px'}}>Name</label>
                <input 
                  type="text"
                  name="name"
                  placeholder="Your full name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{width:'100%', padding:'0.875rem 1rem', borderRadius:'8px', border:'2px solid var(--border-light)', fontSize:'1rem', fontFamily:'inherit', transition:'all 250ms ease-in-out', outline:'none'}}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                />
              </div>
              <div>
                <label style={{display:'block', fontWeight:600, marginBottom:'0.75rem', color:'var(--primary)', fontSize:'0.95rem', textTransform:'uppercase', letterSpacing:'0.5px'}}>Email</label>
                <input 
                  type="email"
                  name="email"
                  placeholder="your@email.com" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{width:'100%', padding:'0.875rem 1rem', borderRadius:'8px', border:'2px solid var(--border-light)', fontSize:'1rem', fontFamily:'inherit', transition:'all 250ms ease-in-out', outline:'none'}}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                />
              </div>
              <div>
                <label style={{display:'block', fontWeight:600, marginBottom:'0.75rem', color:'var(--primary)', fontSize:'0.95rem', textTransform:'uppercase', letterSpacing:'0.5px'}}>Message</label>
                <textarea 
                  name="message"
                  placeholder="Tell us how we can help..." 
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{width:'100%', padding:'0.875rem 1rem', borderRadius:'8px', border:'2px solid var(--border-light)', fontSize:'1rem', fontFamily:'inherit', transition:'all 250ms ease-in-out', outline:'none', resize:'vertical'}}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                />
              </div>
              <button 
                type="submit"
                disabled={loading}
                className="btn primary" 
                style={{marginTop:'1rem', opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer', width:'100%', textAlign:'center'}}
              >
                {loading ? '⏳ Sending...' : 'Send Message'}
              </button>
            </div>
          </form>

          <div style={{marginTop:'4rem', paddingTop:'3rem', borderTop:'1px solid var(--border-light)'}}>
            <h3 style={{fontSize:'1.5rem', fontWeight:700, marginBottom:'2rem', color:'var(--primary)'}}>Other Ways to Reach Us</h3>
            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))', gap:'2rem'}}>
              <div>
                <div style={{fontSize:'1.75rem', marginBottom:'0.75rem'}}>📧</div>
                <strong style={{display:'block', marginBottom:'0.5rem', color:'var(--primary)'}}>Email</strong>
                <a href="mailto:info@learningthroughfood.org" style={{color:'var(--accent)', textDecoration:'none', transition:'color 250ms ease-in-out'}} onMouseEnter={(e) => e.target.style.color = 'var(--accent-dark)'} onMouseLeave={(e) => e.target.style.color = 'var(--accent)'}>info@learningthroughfood.org</a>
              </div>
              <div>
                <div style={{fontSize:'1.75rem', marginBottom:'0.75rem'}}>📱</div>
                <strong style={{display:'block', marginBottom:'0.5rem', color:'var(--primary)'}}>Phone</strong>
                <a href="tel:+1234567890" style={{color:'var(--accent)', textDecoration:'none', transition:'color 250ms ease-in-out'}} onMouseEnter={(e) => e.target.style.color = 'var(--accent-dark)'} onMouseLeave={(e) => e.target.style.color = 'var(--accent)'}>(234) 567-890</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style jsx>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}
