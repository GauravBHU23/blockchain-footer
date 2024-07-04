

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: contact@Blockhainhealthcareapp.com</p>
          <p>Phone: +91 8709393673</p>
          <p>Addesss: Banaras Hindu University,<br></br> HealthCare Varanasi (UP)<br></br>Pin Code : - 221005</p>
        </div>

        <div className="footer-section">
          <h4>Legal Information</h4>
          <ul>
            <li><a href="/privacy policy">Privacy Policy</a></li>
            <li><a href="/Terms of Service">Terms of Service</a></li>
            <li><a href="/Disclaimer">Disclaimer</a></li>
            <li><a href="/Cookie Policy">Cookie Policy</a></li>
          </ul>
        </div>
    
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> <br></br>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a><br></br>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> <br></br>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="footer-section">
        <h4>Newsletter Signup</h4>
        <label >Email </label>
        <input type="text" placeholder="Enter Your Email" name="text" id="Email"/><br></br><br></br>
        <button>Subscribe</button>
      </div>
      <div className="footer-bottom">
        <hr></hr>
        <p className="footer-section">&copy; 2024 Blockchain Healthcare App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;