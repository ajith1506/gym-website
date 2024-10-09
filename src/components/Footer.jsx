import React from "react";
import { Link } from "react-scroll";
import { AiTwotonePhone, AiOutlineMail } from "react-icons/ai";
import "./Footer.css";  // Import external CSS

const newDate = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-section">
          <Link to="/">
            <h1 className="footer-title">Level Gyms</h1>
          </Link>
          <p className="footer-text">
            The best fitness destination in Lahore, for men and women.
          </p>
        </div>
        <div className="footer-section">
          <h1 className="footer-heading">Address</h1>
          <p className="footer-text">
            Plot 339 Block R2 Johar Town Lahore, 54000 Pakistan
          </p>
        </div>
        <div className="footer-section">
          <h1 className="footer-heading">Business Hours</h1>
          <ul className="footer-list">
            <li>Mon-Sat: 7:00 AM – 12:00 AM</li>
            <li>Sun: Closed</li>
          </ul>
        </div>
        <div className="footer-section">
          <h1 className="footer-heading">Contact</h1>
          <div className="footer-contact">
            <AiTwotonePhone size={20} />
            <p className="footer-contact-text">+92-309-4795547</p>
          </div>
          <div className="footer-contact">
            <AiOutlineMail size={20} color="red" />
            <p className="footer-contact-text">levelszone@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-bottom-text">
          © <span className="footer-highlight">Levels gym</span> | {newDate}
        </p>
      </div>
    </div>
  );
};

export default Footer;
