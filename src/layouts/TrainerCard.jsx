import React from "react";
import { BsInstagram, BsTwitter, BsFacebook, BsTwitterX } from "react-icons/bs";
import "./TrainerCard.css"; // Import the external CSS file

const TrainerCard = (props) => {
  return (
    <div className="trainer-card">
      <div className="image-wrapper">
        <img className="trainer-image" src={props.img} alt="Trainer" />
      </div>
      <div className="text-center">
        <h1 className="trainer-name">{props.name}</h1>
        <div className="social-icons">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram className="icon instagram-icon" size={25} />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFacebook className="icon facebook-icon" size={25} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitterX className="icon twitterx-icon" size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;
