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
        <section style={{padding:'4rem 0', maxWidth:'700px'}}>
          <h2 style={{fontSize:'2.5rem', fontWeight:800, marginBottom:'1.5rem'}}>Get in Touch</h2>
          <p style={{fontSize:'1.1rem', color:'#6B7280', marginBottom:'2.5rem'}}>Have questions or want to partner with us? We'd love to hear from you. Fill out the form below and we'll get back to you within 48 hours.</p>
          
          {success && (
            <div style={{background:'#d1fae5', border:'1px solid #6ee7b7', color:'#047857', padding:'1rem', borderRadius:'8px', marginBottom:'2rem', fontSize:'0.95rem', fontWeight:600}}>
              ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
            </div>
          )}

          {error && (
            <div style={{background:'#fee2e2', border:'1px solid #fca5a5', color:'#991b1b', padding:'1rem', borderRadius:'8px', marginBottom:'2rem', fontSize:'0.95rem', fontWeight:600}}>
              ✕ {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} style={{background:'white', borderRadius:'16px', padding:'2rem', boxShadow:'0 4px 6px -1px rgba(0,0,0,0.1)', border:'1px solid #E5E7EB'}}>
            <div style={{display:'grid',gap:'1.5rem'}}>
              <div>
                <label style={{display:'block', fontWeight:600, marginBottom:'0.5rem', color:'#1F2937'}}>Name</label>
                <input 
                  type="text"
                  name="name"
                  placeholder="Your name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{width:'100%', padding:'0.75rem 1rem', borderRadius:'8px', border:'1px solid #E5E7EB', fontSize:'1rem', fontFamily:'inherit'}} 
                />
              </div>
              <div>
                <label style={{display:'block', fontWeight:600, marginBottom:'0.5rem', color:'#1F2937'}}>Email</label>
                <input 
                  type="email"
                  name="email"
                  placeholder="your@email.com" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{width:'100%', padding:'0.75rem 1rem', borderRadius:'8px', border:'1px solid #E5E7EB', fontSize:'1rem', fontFamily:'inherit'}} 
                />
              </div>
              <div>
                <label style={{display:'block', fontWeight:600, marginBottom:'0.5rem', color:'#1F2937'}}>Message</label>
                <textarea 
                  name="message"
                  placeholder="Tell us how we can help..." 
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{width:'100%', padding:'0.75rem 1rem', borderRadius:'8px', border:'1px solid #E5E7EB', fontSize:'1rem', fontFamily:'inherit'}} 
                />
              </div>
              <button 
                type="submit"
                disabled={loading}
                className="btn primary" 
                style={{marginTop:'1rem', opacity: loading ? 0.6 : 1, cursor: loading ? 'not-allowed' : 'pointer'}}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  )
}
