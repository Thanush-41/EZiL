import { useState } from 'react';
import './Services.css';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  const services = [
    {
      title: 'Universal Camera Support',
      description: 'Any camera works: classroom CCTV, laptop webcams, or phone scans. Seamless integration with existing infrastructure.',
      icon: '📹',
      details: {
        overview: 'EZiL works with any camera setup - from basic webcams to advanced CCTV systems. No need for expensive hardware upgrades.',
        benefits: [
          'Works with existing camera infrastructure',
          'No additional hardware required',
          'Supports multiple camera types simultaneously',
          'Easy setup and configuration'
        ],
        howItWorks: [
          'Connect any camera to the EZiL platform',
          'AI automatically detects and tracks individuals',
          'Real-time processing without storing images',
          'Encrypted FaceIDs generated for privacy'
        ],
        technology: 'Advanced computer vision algorithms with privacy-first design. Multi-tenant architecture for on-premises deployment.'
      }
    },
    {
      title: 'Live Engagement Graphs',
      description: 'Real-time attention tracking shows who\'s engaged throughout the lecture. Monitor student understanding instantly.',
      icon: '📊',
      details: {
        overview: 'Get instant insights into student engagement and attention levels during lectures with real-time analytics.',
        benefits: [
          'Real-time engagement monitoring',
          'Identify struggling students instantly',
          'Adjust teaching pace based on data',
          'Improve overall classroom dynamics'
        ],
        howItWorks: [
          'AI analyzes facial expressions and body language',
          'Real-time sentiment analysis',
          'Live dashboard with engagement metrics',
          'Instant alerts for attention drops'
        ],
        technology: 'Advanced facial expression recognition and sentiment analysis powered by machine learning algorithms.'
      }
    },
    {
      title: 'PMU-Powered Learning',
      description: 'Lecture content automatically adjusts based on student understanding levels using Performance-based Metrics Understanding.',
      icon: '🧠',
      details: {
        overview: 'PMU engine analyzes real-time engagement patterns and automatically adjusts lecture pace, difficulty, and content style.',
        benefits: [
          'Adaptive content delivery',
          'Personalized learning experience',
          'Improved comprehension rates',
          'Data-driven teaching decisions'
        ],
        howItWorks: [
          'Monitor student engagement patterns',
          'Analyze comprehension levels in real-time',
          'Automatically adjust content difficulty',
          'Provide teaching recommendations'
        ],
        technology: 'Machine learning algorithms that process engagement data to optimize learning outcomes through adaptive content delivery.'
      }
    },
    {
      title: '24/7 AI Avatar Support',
      description: 'Students get 1-on-1 help anytime without disturbing teachers. Text-to-speech avatars provide personalized study assistance.',
      icon: '🤖',
      details: {
        overview: 'AI-powered avatars provide round-the-clock study support, answering questions and providing explanations when teachers are unavailable.',
        benefits: [
          '24/7 availability for student support',
          'Personalized learning assistance',
          'Reduces teacher workload',
          'Improves student confidence'
        ],
        howItWorks: [
          'Students ask questions to AI avatar',
          'TTL-based text-to-speech responses',
          'Personalized content based on student level',
          'Integration with lecture materials'
        ],
        technology: 'Natural language processing with text-to-speech synthesis, powered by advanced AI models for educational content delivery.'
      }
    },
    {
      title: 'Zero Training GenUI',
      description: 'Natural language interface - teachers simply ask "show me today\'s attendance" or "who needs help" and get instant results.',
      icon: '💬',
      details: {
        overview: 'GenUI framework understands natural language commands, making the system incredibly easy to use without any training.',
        benefits: [
          'No training required',
          'Natural language commands',
          'Instant data retrieval',
          'User-friendly interface'
        ],
        howItWorks: [
          'Teacher speaks or types natural language query',
          'AI interprets the request',
          'System provides relevant data visualization',
          'Instant actionable insights'
        ],
        technology: 'Advanced natural language processing with generative UI that creates dynamic interfaces based on user queries.'
      }
    },
    {
      title: 'Privacy First Architecture',
      description: 'No face images stored, only encrypted FaceIDs generated. Multi-tenant setup enables on-premises deployment.',
      icon: '🔒',
      details: {
        overview: 'Complete privacy protection with encrypted data processing and optional on-premises deployment for maximum security.',
        benefits: [
          'No facial images stored',
          'Encrypted FaceID generation',
          'On-premises deployment option',
          'GDPR and privacy compliant'
        ],
        howItWorks: [
          'Facial features processed in real-time',
          'Encrypted IDs generated immediately',
          'Original images never stored',
          'Multi-tenant secure architecture'
        ],
        technology: 'Advanced encryption with secure multi-tenant architecture. Privacy-by-design with optional on-premises deployment.'
      }
    }
  ];

  const workflowSteps = [
    {
      number: '1',
      title: 'Get Lecture',
      description: 'Teacher receives AI-generated lecture content from EZiL platform',
      details: 'AI analyzes curriculum requirements and generates comprehensive lecture materials tailored to your teaching style and student needs.',
      icon: '📚'
    },
    {
      number: '2',
      title: 'Start Teaching',
      description: 'Begin explaining to students using the provided content guide',
      details: 'Use the interactive content guide with suggested teaching points, examples, and engagement techniques for optimal delivery.',
      icon: '👩‍🏫'
    },
    {
      number: '3',
      title: 'Live Feedback',
      description: 'EZiL monitors student engagement and attention in real-time',
      details: 'Advanced AI tracks facial expressions, body language, and attention patterns to provide instant engagement metrics.',
      icon: '📊'
    },
    {
      number: '4',
      title: 'Adapt Style',
      description: 'Teacher refines delivery based on engagement data and suggestions',
      details: 'Receive real-time recommendations to adjust pace, difficulty, or teaching approach based on student comprehension levels.',
      icon: '🎯'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Key Features</h2>
        <p className="section-subtitle">
          Revolutionary tools that transform how education works
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button 
                className="service-btn"
                onClick={() => openModal(service)}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* How It Works Section */}
        <div className="workflow-section">
          <h2 className="section-title">Smart Teaching Flow</h2>
          <p className="section-subtitle">How EZiL transforms your classroom experience</p>
          
          {/* Desktop workflow */}
          <div className="workflow-container">
            <div className="workflow-timeline">
              {workflowSteps.map((step, index) => (
                <div key={index} className="workflow-step-container">
                  <div className="workflow-step">
                    <div className="step-header">
                      <div className="step-icon">{step.icon}</div>
                      <div className="step-number">{step.number}</div>
                    </div>
                    <div className="step-content">
                      <h3 className="step-title">{step.title}</h3>
                      <p className="step-description">{step.description}</p>
                      <p className="step-details">{step.details}</p>
                    </div>
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <div className="step-connector">
                      <div className="connector-line"></div>
                      <div className="connector-arrow">→</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile workflow - stacked version */}
          <div className="workflow-mobile">
            {workflowSteps.map((step, index) => (
              <div key={index} className="workflow-step-mobile">
                <div className="step-header-mobile">
                  <div className="step-icon-mobile">{step.icon}</div>
                  <div className="step-number-mobile">{step.number}</div>
                  <h3 className="step-title-mobile">{step.title}</h3>
                </div>
                <div className="step-content-mobile">
                  <p className="step-description-mobile">{step.description}</p>
                  <p className="step-details-mobile">{step.details}</p>
                </div>
                {index < workflowSteps.length - 1 && (
                  <div className="step-divider"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        {/* <div className="team-section">
          <h2 className="section-title">Building EZiL</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-icon">👨‍💻</div>
              <h3>Thanush</h3>
              <p>AI/ML Engineer</p>
            </div>
            <div className="team-member">
              <div className="member-icon">👨‍💼</div>
              <h3>Midhun Akash M</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <div className="member-icon">👨‍🔧</div>
              <h3>Revanth</h3>
              <p>Ex-GE Power, CTO</p>
            </div>
          </div>
          <p className="team-note">Currently seeking pilot partners and early feedback</p>
        </div> */}
      </div>

      {selectedService && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-icon">{selectedService.icon}</div>
              <h2 className="modal-title">{selectedService.title}</h2>
              <button className="modal-close" onClick={closeModal}>×</button>
            </div>
            
            <div className="modal-body">
              <div className="modal-section">
                <h3>Overview</h3>
                <p>{selectedService.details?.overview || 'Detailed information coming soon.'}</p>
              </div>

              <div className="modal-section">
                <h3>Key Benefits</h3>
                <ul>
                  {selectedService.details?.benefits?.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  )) || <li>Benefits information coming soon.</li>}
                </ul>
              </div>

              <div className="modal-section">
                <h3>How It Works</h3>
                <ol>
                  {selectedService.details?.howItWorks?.map((step, index) => (
                    <li key={index}>{step}</li>
                  )) || <li>Process information coming soon.</li>}
                </ol>
              </div>

              <div className="modal-section">
                <h3>Technology</h3>
                <p>{selectedService.details?.technology || 'Technical details coming soon.'}</p>
              </div>
            </div>

            <div className="modal-footer">
              <button className="modal-btn-primary" onClick={closeModal}>
                Get Started
              </button>
              <button className="modal-btn-secondary" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
