import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <h2 className="section-title">Revolutionizing Education, One Classroom at a Time</h2>
          <div className="about-grid">
            <div className="about-text">
              <div className="problem-highlight">
                <h3>🎯 The Silent Crisis in Modern Classrooms</h3>
                <p>
                  Every day, millions of students sit in silence while confusion builds. Traditional classrooms 
                  create invisible barriers where <strong>70% of students never raise their hand</strong>, 
                  questions remain unasked, and understanding gaps go unnoticed.
                </p>
              </div>
              
              <div className="solution-preview">
                <h3>💡 Our Revolutionary Approach</h3>
                <p>
                  We're transforming education with AI-powered classroom assistants that break down barriers, 
                  eliminate administrative waste, and create personalized learning experiences that adapt to 
                  every student's unique needs.
                </p>
              </div>

              <div className="impact-statement">
                <h3>🚀 Who Benefits</h3>
                <p>
                  <strong>Educators</strong> who dream of teaching without administrative burdens. 
                  <strong>Students</strong> who deserve personalized attention and confidence to ask questions. 
                  <strong>Institutions</strong> ready to embrace the future of learning - from innovative 
                  startups to prestigious universities.
                </p>
              </div>
            </div>
            <div className="about-right">
              <div className="about-image">
                <div className="image-placeholder">
                  <div className="geometric-shape shape-1"></div>
                  <div className="geometric-shape shape-2"></div>
                  <div className="geometric-shape shape-3"></div>
                </div>
              </div>
              <div className="about-stats">
                <div className="stat">
                  <h3>15min</h3>
                  <p>Daily Time Saved per Teacher</p>
                </div>
                <div className="stat">
                  <h3>3x</h3>
                  <p>More Student Engagement</p>
                </div>
                <div className="stat">
                  <h3>24/7</h3>
                  <p>AI Learning Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
