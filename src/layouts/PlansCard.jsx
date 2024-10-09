import React from "react";
import { MdOutlineAttachMoney } from "react-icons/md";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import Button from "./Button";
import "./PlansCard.css"; // Import the external CSS file

const PlansCard = (props) => {
  const features = [
    "Daily complimentary sessions with a personal trainer.",
    "Access to gym facilities during operational hours.",
    "Access to all rooms.",
    "Use of advance gym equipment.",
  ];

  const renderCircle = (index) => {
    if (props.title === "Trial Plan") {
      return index === 0 ? (
        <AiFillCheckCircle className="circle-icon text-green" size={24} />
      ) : (
        <AiFillCloseCircle className="circle-icon text-red" size={25} />
      );
    } else if (props.title === "Gold Plan") {
      return index < features.length / 2 ? (
        <AiFillCheckCircle className="circle-icon text-green" size={25} />
      ) : (
        <AiFillCloseCircle className="circle-icon text-red" size={25} />
      );
    } else {
      return props.price > 0 ? (
        <AiFillCheckCircle className="circle-icon text-green" size={25} />
      ) : (
        <AiFillCloseCircle className="circle-icon text-red" size={25} />
      );
    }
  };

  return (
    <div className="plans-card">
      <h2 className="card-title">{props.title}</h2>

      <div className="price-wrapper">
        <MdOutlineAttachMoney className="price-icon" size={24} />
        <h3 className="price">{props.price}</h3>
      </div>

      <div className="features-list">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            {renderCircle(index)}
            <p className="feature-text">{feature}</p>
          </div>
        ))}
      </div>

      <div className="button-wrapper">
        <Button title="Buy Plan" />
      </div>
    </div>
  );
};

export default PlansCard;
