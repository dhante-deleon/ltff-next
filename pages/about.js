import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'

const tabs = [
  {
    id: 'history',
    label: 'Our History',
    content: `Our charitable work in the Philippines started in 1991 with a Christmas Party dedicated to the less fortunate and their families. The first party started with 150 people and within four years it grew to over 300 people. In 1996, we changed our annual giving from a Christmas party to providing a Christmas meal to the less fortunate. We now annually provide 300 food baskets to needy families.

In 2007, we started to provide the most basic supplies needed at school. We now annually supply the children in our daily feeding program.

In 2011, we established an advisory committee to discuss how best to help the needy of the Philippines. We collectively agreed that we should focus on setting up a charity to provide a daily meal for children to attend school. Thus, the birth of Learning Through Food Foundation in 2011.

In December 2012, we received our official recognition with the SEC of the Philippines as a Charitable Foundation. In 2016, we became an officially accredited NGO with the Department of Social Welfare and Development (DSWD).

At the outset of 2013, we started to provide a once a month feeding program to the seriously malnourished children in Malaban, Binan, Laguna. With our initial funding, we were able to increase the number fed from 80 to 180 people.

Learning Through Food Foundation now averages 200 meals every Saturday to the seriously malnourished children of Malaban, Binan, Laguna.

On June 2, 2014, Learning Through Food Foundation Inc. adopted the incoming grade 1 class of 2014 of MALABAN EAST ELEMENTARY SCHOOL of Malaban, Binan, Laguna. LTFF endeavours to feed these children daily during the school year until they reach grade 7. Working with the Principal and his/her staff, LTFF only provides meals for children who are in attendance. There is NO CASH donated to the school. LTFF covers all costs associated with purchasing, transporting and preparing the meals. We currently feed 407 children per day.

In 2019, Learning Through Food Foundation, Inc. became partners with The Inner Wheel Club of Las Pinas in providing free Dental Mission to our beneficiaries In Malaban East Elementary School. The team composed of 18 Dentist's with the leadership of Dra. Analie Bolinag conducted lectures on proper brushing, dental hygiene and sanitation, nail cutting and lice shampooing to our beneficiaries. Tooth extraction and tooth fillings were administered after the lecture and six months after the Dental Mission, follow-ups by the same Dentist's were conducted. Toothbrush, toothpaste, medicines and other materials were provided by the Foundation. As agreed, yearly Dental Mission will now be conducted between Learning Through Food Foundation, Inc. and The Inner Wheel of Las Pinas in Malaban East Elementary School.`
  },
  {
    id: 'mission',
    label: 'Our Mission',
    content: `LTFF envisions a community that upholds:
• Excellent quality programs to eliminate hunger
• Social community involvement
• Transformative culture

We are dedicated to providing nutritious meals and practical education that empowers children and families to reach their full potential.`
  },
  {
    id: 'vision',
    label: 'Our Vision',
    content: `We envision a community where all children have access to nutritious food that will allow them to focus on their education with a full belly. A place where food security and education go hand in hand, creating pathways to brighter futures for every child regardless of their background.`
  },
  {
    id: 'news',
    label: 'Latest News',
    content: `Lota and I would like to thank all our donors for their gracious generosity in helping Learning Through Food Foundation, Inc. with its feeding program.

Please find below a brief update of our activities for 2025–2026.

<b>OUR MISSION</b>

Learning Through Food Foundation, Inc.'s commitment is to provide a high-quality nutritional feeding program to help eliminate hunger in less fortunate undernourished communities. Working with the teachers and staff of Malaban East Elementary School in Biñan, Laguna, we endeavor to supply a nutritious meal on the condition that the children attend class.

We firmly believe this incentive has led to an increase in daily attendance, and we are pleased to report that our graduating Grade 6 class achieved an average daily attendance rate of 99%.

The school year begins on June 8, 2026. We are pleased to announce that TotalEnergies Global Services Philippines will adopt the incoming Grade 1 class and sponsor their feeding expenses for the next 6 years. With this new sponsorship, LTFF will now adopt the Grade 2 class for the next 5 years. One of our founding sponsors, Sonderhoff Einsel, will continue its sponsorship of students entering Grade 5.

We expect to feed approximately 600 children daily this year. Additionally, we are in discussions with another original sponsor regarding support for a future Grade 1 class beginning in 2027.

Separately, due to increased funding from TotalEnergies Global Services Philippines, we were able to increase our regular Saturday feeding program in Barangay Malaban Zone 1 Dulong Ilaya from 250 to 450 meals. However, beginning June 2026, funding was redirected toward the children's daily feeding program at the school, which is more aligned with our founding principle of "Learning Through Food." As a result, the community outreach program has reverted to 250 meals per feeding day.

<b>6TH PRO-AM GOLF TOURNAMENT</b>

Our yearly Pro-Am Golf Tournament was again a success. We continue to grow our sponsor participation, and by 2027 we expect to have all 18 holes sponsored. We sincerely thank Canlubang Golf and Country Club for hosting the event and the PGT professionals who generously donated their time.

<b>DENTAL MISSION</b>

In February, we successfully conducted our third Dental Mission at Malaban East Elementary School in partnership with Sweat It Out Team. A team of 15 dentists and support staff, led by Doc Analie Bolinao, provided oral prophylaxis, tooth extractions, fluoride treatments, oral health education, handwashing drills, lice treatment, and wellness activities for our beneficiaries.

To support this initiative, LTFF's founders donated two portable high-speed drilling machines, two portable dental chairs, and additional dental equipment. We hope to continue providing regular dental care to students throughout their participation in our program.

The school also presented LTFF with a Certificate of Appreciation for our support through the Dental Mission.

<b>ACADEMIC RECOGNITION PROGRAM</b>

At the end of School Year 2025–2026, LTFF hosted a recognition program for Grade 4 and Grade 6 students. Awards were given to students with perfect attendance records and those who demonstrated exemplary academic performance. We believe these awards encourage consistent learning, accountability, and academic excellence.

<b>SCHOOL SUPPLIES DISTRIBUTION</b>

Every student beneficiary receives an LTFF school supplies kit that includes school bags, paper, pencils, ballpens, and notebooks. This initiative helps reduce the financial burden on families and promotes a more positive learning environment.

<b>CHRISTMAS GIFT GIVING</b>

Every December, LTFF distributes 300 grocery baskets to families in Malaban, Biñan, Laguna, along with 200 loot bags for children. Distribution is coordinated with community leaders to ensure fairness and order.

<b>AWARD AND RECOGNITION</b>

The Department of Education Region IV-A CALABARZON, City Schools Division of Biñan, awarded Learning Through Food Foundation, Inc. recognition for its steadfast support, active collaboration, and invaluable contribution toward advancing education programs and school improvement initiatives.

<b>MESSAGE FROM ANDREW AND LOTA NEMEC</b>

We want to thank our sponsors for the trust they place in us. We are humbled by your generosity and deeply grateful for your support.

We also thank our community partners, including teachers, school staff, principals, community leaders, volunteers, the dental mission team, PGT professionals, and our hardworking staff.

Together, this collaboration allows us to continue fulfilling our dream that no child's education will be hindered by hunger.

---

Dear Participants and Sponsors,

A huge thank you to everyone who took part in and supported our  6th PRO-AM Golf Tournament this past January 13, 2026, at the Canlubang Golf and Country Club. Your presence helped make the day a tremendous success.  It  was  wonderful  to  see  so  many  golfers  come  together  with  our  PROs  for  a  day  of  friendly  competition, camaraderie, and community spirit.  We are especially grateful for your generous sponsorship. Your support was crucial to the event’s success and directly helped our Foundation meet its goal ensuring children can study on a full belly.  We hope you enjoyed the event, and we look forward to the possibility of partnering with you again next year.  

Sincerely,  Andrew and Lota  Co-Founders  Learning Through Food Foundation, Inc.  

Photos and Videos are compiled and can be found here: <a href="https://drive.google.com/drive/folders/1Rj0fFx2r0sEVHRaRlLMgJpizlyhobiO2" target="_blank" rel="noopener noreferrer" style="color: var(--accent); text-decoration: none; font-weight: 600; border-bottom: 2px solid var(--accent);">Google Drive</a>

---

To all our sponsors and participants at Learning Through Food Foundation's 5th Annual Pro Am Golf Tournament:

To all our sponsors who helped make this happen, Lota and I would like to express our deepest gratitude for your generosity and trust you place in us. We welcome you in joining our shared mission to provide the elementary school children of Malaban, Laguna with daily nourishment so that they can study on a full belly.

Again thank you for making this year's event a success.

Sincerely,
Andrew and Lota Nemec
Co-Founders
Learning Through Food Foundation Inc

---

In December 3, 2023,

We are pleased to announce that The Department of Education through City Schools Division of Binan City awarded LEARNING THROUGH FOOD FOUNDATION, INC. a "Plaque of Recognition" as Partner of Malaban East Elementary School for being a valuable partner in Education through provision of significant programs and projects that support Quality Education in the City Schools Division of Binan City for School Year 2022-2023.

We would like to thank all our Sponsors for their kind generosity to help us make this happen. We sincerely value the trust you place in our Foundation.

Sincerely,
Andrew and Lota Nemec
Co-Founders
Learning Through Food Foundation Inc.

---

In August 9, 2022,

Mr. Felix Einsel, Managing Partner of Sonderhoff and Einsel a leading law firm based in Japan will team up with Learning Through Food Foundation, Inc. to participate in our Feeding Program from August 22, 2022. Sonderhoff and Einsel, through Learning Through Food Foundation, Inc., will adopt the incoming Grade 1 Class and will endeavour to feed them for the next 7 years.

On behalf of Learning Through Food Foundation, Inc., We sincerely thank Mr. Felix Einsel for his firm's kind generosity and placing their trust in our Foundation.

Sincerely,
Andrew and Lota Nemec
Co-Founders
Learning Through Food Foundation Inc.`
  }
]

export default function About(){
  const [activeTab, setActiveTab] = useState('history')

  return (
    <>
      <Header />
      <main>
        <section style={{padding:'4rem 0', background:'linear-gradient(135deg, rgba(255,107,53,0.05) 0%, rgba(255,183,153,0.05) 100%)'}}>
          <div className="container">
            <div className="about-grid">
              {/* Image Section */}
              <div className="about-image">
                <Image src="/about-logo.jpg" alt="Learning Through Food" fill style={{objectFit:'cover'}} quality={85} priority />
              </div>

              {/* Content Section */}
              <div>
                <div style={{marginBottom:'2rem'}}>
                  <span style={{color:'var(--accent)', fontSize:'0.9rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'1px'}}>About Us</span>
                  <h2 style={{fontSize:'2.5rem', fontWeight:800, marginTop:'0.5rem', marginBottom:'1rem', color:'var(--primary)'}}>Learning Through Food Foundation, Inc.</h2>
                  <p style={{color:'var(--secondary)', fontSize:'1.05rem', lineHeight:1.8}}>Empowering communities through nutrition, education, and sustainable food access since 1991.</p>
                </div>

                {/* Tab Navigation */}
                <div className="tab-buttons">
                  {tabs.map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                      style={{
                        padding:'0.75rem 1.5rem',
                        borderRadius:'8px',
                        border:'none',
                        background:activeTab === tab.id ? 'linear-gradient(135deg, var(--accent), var(--accent-dark))' : 'white',
                        color:activeTab === tab.id ? 'white' : 'var(--primary)',
                        fontWeight:600,
                        cursor:'pointer',
                        transition:'all 0.3s ease',
                        boxShadow:activeTab === tab.id ? '0 4px 12px rgba(255,107,53,0.3)' : '0 2px 4px rgba(0,0,0,0.05)',
                        fontSize:'0.95rem'
                      }}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="tab-content-box">
                  {tabs.map(tab => (
                    activeTab === tab.id && (
                      <div key={tab.id} style={{animation:'fadeIn 0.3s ease'}}>
                        <p style={{color:'var(--secondary)', fontSize:'1rem', lineHeight:1.8, margin:0, whiteSpace:'pre-wrap', fontFamily:'inherit'}} dangerouslySetInnerHTML={{__html: tab.content}}>
                        </p>
                      </div>
                    )
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats/Impact Section */}
        <section style={{padding:'4rem 0'}}>
          <div className="container">
            <h2 style={{fontSize:'2rem', fontWeight:800, marginBottom:'3rem', textAlign:'center', color:'var(--primary)'}}>Our Impact</h2>
            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:'1.5rem'}}>
              {[
                {number:'30+', label:'Years of Service'},
                {number:'407+', label:'Children Fed Daily'},
                {number:'300+', label:'Families Supported'},
                {number:'12+', label:'Programs & Initiatives'}
              ].map((stat, i) => (
                <div key={i} style={{background:'white', borderRadius:'12px', padding:'2rem', textAlign:'center', boxShadow:'0 4px 6px -1px rgba(0,0,0,0.1)', border:'1px solid var(--border)', transition:'all 0.3s', cursor:'pointer'}} onMouseEnter={e=>e.currentTarget.style.transform='translateY(-4px)'} onMouseLeave={e=>e.currentTarget.style.transform='translateY(0)'}>
                  <div style={{fontSize:'2.5rem', fontWeight:800, background:'linear-gradient(135deg, var(--accent), var(--accent-dark))', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', marginBottom:'0.5rem'}}>{stat.number}</div>
                  <div style={{color:'var(--secondary)', fontWeight:600}}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media(max-width:768px){
          div[style*="gridTemplateColumns: 1fr 2fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}
