import React from "react";
import "./Button.css"; // Import external CSS

const Button = (props) => {
  return (
    <div>
      <button className="custom-button">
        <span className="button-bg-light"></span>
        <span className="button-bg-dark"></span>
        <span className="button-text">{props.title}</span>
        <span className="button-border"></span>
      </button>
    </div>
  );
};

export default Button;
