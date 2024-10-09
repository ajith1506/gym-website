import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import TrainerCard from "../layouts/TrainerCard";
import "./Trainers.css"; // Import external CSS

const Trainers = () => {
  return (
    <div className="trainers-container">
      <h1 className="trainers-title">Our Trainers</h1>

      <div className="trainers-cards">
        <TrainerCard img={img1} name="Maham" />
        <TrainerCard img={img2} name="Aliyan" />
        <TrainerCard img={img3} name="Fatima" />
      </div>
    </div>
  );
};

export default Trainers;
