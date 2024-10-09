import React from "react";
import PlansCard from "../layouts/PlansCard";
import "./Plans.css"; // Import external CSS

const Plans = () => {
  return (
    <div className="plans-container">
      <h1 className="plans-title">Gym membership</h1>

      <div className="plans-cards">
        <PlansCard title="Trial Plan" price="0" />
        <PlansCard title="Gold Plan" price="1000" />
        <PlansCard title="Platinum Plan" price="2000" />
      </div>
    </div>
  );
};

export default Plans;
