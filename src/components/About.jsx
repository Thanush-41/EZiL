import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <h2 className="section-title">The Problem We Solve</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                <strong>Real classroom pain points:</strong> Teachers waste 15+ minutes on manual attendance while students lose focus. 
                70% of students hesitate to raise hands - questions go unasked, confusion builds. 
                Teachers have no visibility into who's truly understanding vs. just nodding along.
              </p>
              <p>
                <strong>Our Users:</strong> Teachers who want to focus on teaching, not admin work. 
                Students who need personalized learning support. Schools looking to modernize their 
                classrooms - from small colleges to large universities.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <h3>70%</h3>
                  <p>Students Hesitate to Ask Questions</p>
                </div>
                <div className="stat">
                  <h3>24/7</h3>
                  <p>AI Avatar Support Available</p>
                </div>
                <div className="stat">
                  <h3>100%</h3>
                  <p>Privacy-First Architecture</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <div className="geometric-shape shape-1"></div>
                <div className="geometric-shape shape-2"></div>
                <div className="geometric-shape shape-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
