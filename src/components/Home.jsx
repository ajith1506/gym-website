import React from "react";
import Button from "../layouts/Button";
import "./Home.css"; // Import external CSS

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Discover your strength!</h1>

        <div className="button-container">
          <Button title="Get Started" />
        </div>
      </div>
    </div>
  );
};

export default Home;
