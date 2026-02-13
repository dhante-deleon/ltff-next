export default function VideoSection() {
  return (
    <section className="video-section">
      <div className="container">
        <div className="video-content">
          <div className="video-header">
            <h3>Our Impact in Action</h3>
            <p>Watch how Learning Through Food Foundation transforms lives through nutrition and education.</p>
          </div>
          
          <div className="video-container">
            <video 
              controls 
              width="100%" 
              height="auto"
              poster="/videos/poster.jpg"
              className="video-player"
            >
              <source src="/videos/LTFF AVP 2026.mov" type="video/quicktime" />
              <source src="/videos/LTFF AVP 2026.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
