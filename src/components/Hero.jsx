import { useState } from 'react';
import './Hero.css';
import TrialModal from './TrialModal';

const Hero = () => {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  const handleTrialClick = (e) => {
    e.preventDefault();
    setIsTrialModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsTrialModalOpen(false);
  };

  return (
    <section id="home" className="hero">
      {/* Background effects */}
      <div className="hero-background-effects">
        <div className="liquid-blob"></div>
        <div className="liquid-blob"></div>
        <div className="liquid-blob"></div>
        <div className="liquid-overlay"></div>
      </div>

      {/* Single unified glass container */}
      <div className="hero-container">
        <div className="hero-unified-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="gradient-text">EZiL</span>
            </h1>
            <p className="hero-subtitle">
              Make it easy to learn
            </p>
            <p className="hero-description">
              Smart classroom platform that works everywhere. From universal camera support 
              to live engagement graphs and 24/7 AI avatar support - EZiL transforms teaching 
              with privacy-first technology that adapts to your students' needs.
            </p>
            <div className="hero-actions">
              <a href="#" className="btn btn-primary" onClick={handleTrialClick}>Join WaitList</a>
            </div>
          </div>

          <div className="hero-features">
            {/* Apple-style liquid particles */}
            <div className="liquid-particle"></div>
            <div className="liquid-particle"></div>
            <div className="liquid-particle"></div>
            <div className="liquid-particle"></div>
            <div className="liquid-particle"></div>
          </div>
        </div>
      </div>

      {/* Trial Modal */}
      <TrialModal 
        isOpen={isTrialModalOpen} 
        onClose={handleCloseModal} 
      />
    </section>
  );
};

export default Hero;
