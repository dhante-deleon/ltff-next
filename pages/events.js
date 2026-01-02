import { useState } from 'react'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'

const eventCategories = [
  { id: 'all', label: 'All Events' },
  { id: 'feedProg', label: 'Feeding Program' },
  { id: 'schSuppDist', label: 'School Supplies Distribution' },
  { id: 'decGoodsGiving', label: 'December Goods Giving' },
  { id: 'golfSpon', label: 'Golf for Sponsors' },
  { id: 'dentMis', label: 'Dental Missions' },
  { id: 'recogPartner', label: 'Recognition of Partnership' }
]

const events = [
  // Feeding Program
  ...Array.from({ length: 7 }, (_, i) => ({
    id: `feedProg-${i + 1}`,
    category: 'feedProg',
    image: `/images/feeding-prog_${i + 1}.jpg`,
    title: 'Feeding Program',
    description: 'Providing nutritious meals to children daily.'
  })),
  // School Supplies Distribution
  ...Array.from({ length: 3 }, (_, i) => ({
    id: `schSuppDist-${i + 1}`,
    category: 'schSuppDist',
    image: `/images/school-supplies-dist_${i + 1}.jpg`,
    title: 'School Supplies Distribution',
    description: 'Equipping students with essential learning materials.'
  })),
  // Christmas Gift Giving
  ...Array.from({ length: 9 }, (_, i) => ({
    id: `decGoodsGiving-${i + 1}`,
    category: 'decGoodsGiving',
    image: `/images/christmas-gift-giving_${i + 1}.jpg`,
    title: 'December Goods Giving',
    description: 'Spreading joy during the holiday season.'
  })),
  // Golf for Sponsors
  ...Array.from({ length: 4 }, (_, i) => ({
    id: `golfSpon-${i + 1}`,
    category: 'golfSpon',
    image: `/images/golf-tour_${i + 1}.jpg`,
    title: 'Golf for Sponsors',
    description: 'Community engagement and fundraising event.'
  })),
  // Dental Missions
  ...Array.from({ length: 6 }, (_, i) => ({
    id: `dentMis-${i + 1}`,
    category: 'dentMis',
    image: `/images/dentis-prog_${i + 1}.jpg`,
    title: 'Dental Mission',
    description: 'Providing free dental care to communities.'
  })),
  // Recognition of Partnership
  ...Array.from({ length: 4 }, (_, i) => ({
    id: `recogPartner-${i + 1}`,
    category: 'recogPartner',
    image: `/images/recog-partner_${i + 1}.jpg`,
    title: 'Recognition of Partnership',
    description: 'Celebrating partnerships and collaborations.'
  }))
]

export default function Events() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredEvents = activeFilter === 'all' 
    ? events 
    : events.filter(event => event.category === activeFilter)

  return (
    <>
      <Header />
      <main>
        {/* Events Section */}
        <section style={{ padding: '4rem 0', background: 'linear-gradient(135deg, rgba(255,107,53,0.05) 0%, rgba(255,183,153,0.05) 100%)' }}>
          <div className="container">
            {/* Section Title */}
            <div style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--primary)' }}>Events</h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--secondary)', lineHeight: 1.8 }}>
                Discover how Learning Through Food Foundation is making a difference in our community through various programs and events.
              </p>
            </div>

            {/* Filter Buttons */}
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '3rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              {eventCategories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  style={{
                    padding: '0.6rem 1.2rem',
                    borderRadius: '8px',
                    border: 'none',
                    background: activeFilter === cat.id ? 'linear-gradient(135deg, var(--accent), var(--accent-dark))' : 'white',
                    color: activeFilter === cat.id ? 'white' : 'var(--primary)',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: activeFilter === cat.id ? '0 4px 12px rgba(255,107,53,0.3)' : '0 2px 4px rgba(0,0,0,0.05)',
                    fontSize: '0.9rem'
                  }}
                  onMouseEnter={e => {
                    if (activeFilter !== cat.id) {
                      e.target.style.transform = 'translateY(-2px)'
                    }
                  }}
                  onMouseLeave={e => {
                    e.target.style.transform = 'translateY(0)'
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
              {filteredEvents.map(event => (
                <div key={event.id} style={{ animation: 'fadeIn 0.3s ease' }}>
                  <div
                    style={{
                      background: 'white',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                      border: '1px solid var(--border)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-8px)'
                      e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.15)'
                      e.currentTarget.style.borderColor = 'var(--accent)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)'
                      e.currentTarget.style.borderColor = 'var(--border)'
                    }}
                    onClick={() => setSelectedImage(event.image)}
                  >
                    {/* Image Container */}
                    <div style={{ position: 'relative', width: '100%', height: '240px', overflow: 'hidden', background: '#f0f0f0' }}>
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        quality={80}
                      />
                      {/* Zoom Icon Overlay */}
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(0,0,0,0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0,
                        transition: 'opacity 0.3s ease'
                      }} className="overlay-icon">
                        <div style={{ fontSize: '2.5rem', color: 'white' }}>🔍</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div style={{ padding: '1.5rem' }}>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--primary)' }}>
                        {event.title}
                      </h4>
                      <p style={{ fontSize: '0.95rem', color: 'var(--secondary)', margin: 0 }}>
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '2rem'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
              borderRadius: '12px',
              overflow: 'hidden'
            }}
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Event"
              width={1200}
              height={800}
              style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
              quality={90}
            />
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'rgba(255,255,255,0.9)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                fontSize: '1.5rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s'
              }}
              onMouseEnter={e => e.target.style.background = 'white'}
              onMouseLeave={e => e.target.style.background = 'rgba(255,255,255,0.9)'}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <Footer />

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        div:hover .overlay-icon {
          opacity: 1 !important;
        }
      `}</style>
    </>
  )
}
