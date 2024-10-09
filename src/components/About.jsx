import React from "react";
import img from "../assets/about.png";
import "./About.css"; // Import external CSS

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-heading">About Us</h1>
        <div className="about-text">
          <p>
            Your well-being is your greatest wealth. Whether it's achieving
            optimal health or enhancing your fitness journey, we're here to
            support you every step of the way.
          </p>
          <p>
            At our fitness center, our team of certified personal trainers,
            attentive staff, and experienced management are dedicated to
            fostering a nurturing environment.
          </p>
        </div>
      </div>
      <div className="about-image">
        <img src={img} alt="About us" />
      </div>
    </div>
  );
};

export default About;
