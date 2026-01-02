import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Donate(){
  return (
    <>
      <Header />
      <main className="container">
        <section style={{padding:'4rem 0', maxWidth:'800px'}}>
          <h2 style={{fontSize:'2.5rem', fontWeight:800, marginBottom:'1.5rem', background:'linear-gradient(135deg, #1F2937, #FF6B35)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text'}}>Support Our Mission</h2>
          <p style={{fontSize:'1.1rem', color:'#6B7280', lineHeight:1.8, marginBottom:'2rem'}}>
            Your donation directly supports nutritious meals for children, educational programs, and sustainable community initiatives. Every dollar makes a real impact.
          </p>
          
          <div style={{background:'linear-gradient(135deg, rgba(255,107,53,0.1), rgba(255,183,153,0.1))', borderRadius:'16px', padding:'2.5rem', marginBottom:'2rem'}}>
            <h3 style={{marginTop:0, fontSize:'1.3rem', color:'#1F2937', marginBottom:'1.5rem'}}>Where Your Donation Goes</h3>
            <div style={{display:'grid', gap:'1.5rem'}}>
              <div style={{display:'flex', gap:'1rem'}}>
                <div style={{fontSize:'1.5rem'}}>🍎</div>
                <div>
                  <strong style={{color:'#1F2937', display:'block', marginBottom:'0.25rem'}}>Nutritious Meals</strong>
                  <span style={{color:'#6B7280'}}>70% – Direct food programs</span>
                </div>
              </div>
              <div style={{display:'flex', gap:'1rem'}}>
                <div style={{fontSize:'1.5rem'}}>📚</div>
                <div>
                  <strong style={{color:'#1F2937', display:'block', marginBottom:'0.25rem'}}>Education & Workshops</strong>
                  <span style={{color:'#6B7280'}}>20% – Nutrition and skill training</span>
                </div>
              </div>
              <div style={{display:'flex', gap:'1rem'}}>
                <div style={{fontSize:'1.5rem'}}>🤝</div>
                <div>
                  <strong style={{color:'#1F2937', display:'block', marginBottom:'0.25rem'}}>Community Programs</strong>
                  <span style={{color:'#6B7280'}}>10% – Partnership & operations</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{marginBottom:'2rem'}}>
            <a className="btn primary" href="#" style={{display:'inline-block', fontSize:'1.1rem', padding:'1rem 2rem'}}>Donate Now</a>
          </div>

          <p style={{color:'#9CA3AF', fontSize:'0.95rem'}}>
            Learning Through Food Foundation is a 501(c)(3) nonprofit organization. Your donation is tax-deductible.
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
