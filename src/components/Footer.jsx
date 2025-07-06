import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>EZiL</h3>
            <p>Making educational organizations efficient through innovative technology solutions.</p>
            <div className="social-links">
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="#" aria-label="GitHub">🐱</a>
              <a href="#" aria-label="YouTube">�</a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Features</h4>
            <ul>
              <li><a href="#services">Face Scan Attendance</a></li>
              <li><a href="#services">Sentiment Analysis</a></li>
              <li><a href="#services">Avatar Replays</a></li>
              <li><a href="#services">Teacher Dashboard</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About EZiL</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>📧 contact@ezil.org</p>
            <p>📱 www.ezil.org</p>
            <p>📍 Education Technology Hub</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 EZiL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
