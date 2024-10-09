import React from "react";
import Button from "../layouts/Button";
import "./Contact.css"; // Import external CSS

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <form className="contact-form">
          <h1 className="contact-heading">Contact Us</h1>
          <div className="form-group">
            <label htmlFor="userName">Your Name</label>
            <input
              className="form-input"
              type="text"
              name="userName"
              id="userName"
              placeholder="Enter your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="userEmail">Your Email</label>
            <input
              className="form-input"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Enter your Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="userNumber">Your Number</label>
            <input
              className="form-input"
              type="number"
              name="userNumber"
              id="userNumber"
              placeholder="Enter your Number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="userMessage">Your Message</label>
            <textarea
              className="form-textarea"
              name="userMessage"
              id="userMessage"
              rows="4"
              placeholder="Enter your Message"
            ></textarea>
          </div>
          <div className="button-group">
            <Button title="Send Message" />
            <Button title="Start a call" href="tel:+92" />
          </div>
        </form>
        <div className="map-container">
          <iframe
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108915.64214412407!2d74.19009261029682!3d31.452296963075824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901246c16dbad%3A0x9fb71f55f2cb6a59!2sLevels%20gym!5e0!3m2!1sen!2s!4v1709278409350!5m2!1sen!2s"
            width="500"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
