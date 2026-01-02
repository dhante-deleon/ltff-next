import Image from 'next/image'

const items = [
  {title: 'School Feeding Programs', desc: 'Nutritious meals delivered to students daily, ensuring no child goes hungry while learning.', img:'/images/feeding-prog_1.jpg'},
  {title: 'Health & Nutrition Workshops', desc: 'Educational sessions teaching families about balanced nutrition and healthy lifestyle choices.', img:'/images/dentis-prog_1.jpg'},
  {title: 'Community Partnerships', desc: 'Collaborating with local organizations to expand food access and build sustainable programs.', img:'/images/school-supplies-dist_1.jpg'}
]

export default function Programs(){
  return (
    <section id="programs" className="programs container">
      <h3>Our Impact</h3>
      <p className="muted">Discover how Learning Through Food Foundation is making a difference in our community.</p>
      <div className="cards">
        {items.map((it)=> (
          <article key={it.title} className="card">
            <div style={{position:'relative', width:'100%', height:'300px', borderRadius:'8px', overflow:'hidden', marginBottom:'1.5rem'}}>
              <Image src={it.img} alt={it.title} fill style={{objectFit:'cover'}} quality={85} priority />
            </div>
            <h4>{it.title}</h4>
            <p>{it.desc}</p>
            <a className="link" href="#">Learn more →</a>
          </article>
        ))}
      </div>
    </section>
  )
}
