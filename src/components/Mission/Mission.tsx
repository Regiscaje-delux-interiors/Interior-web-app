import React from "react";
import "./Mission.css";
import ist from "../../assests/images/ind.jpg";
import hut from "../../assests/images/Hut.jpg";
import huts from "../../assests/images/Screeding.jpg";
const Mission = () => {
  return (
    <div className="bg-indigo-950 h-screen mission-section">
      <div className="container">
        <div>
          <h6 className="pt-24 text-white antialiased font-semibold">
            Why REGISCAJE DELUX INTERIORS
          </h6>
          <h1 className="text-5xl text-white antialiased font-semibold pt-2 mis-h1">
            Our Mission
          </h1>
          <p className="mission-write">
            Rgiscaje Delux Interiors helps you to meet the luxury comfort of
            your home. We aim to design your home with the best style that fits
            your desired lifestyle.
          </p>
        </div>
        <div className="mission-card-display">
          <div className="mission-card">
            <div className="mission-card-img-div">
              <img src={hut} alt="img" className="mission-card-img" />
            </div>
            <div className="container mission-card-text">
              <h2 className="mission-card-head antialiased">
                Luxury Interior Decoration
              </h2>
              <p>
                We aim to deliver the best quality in interior and exterior
                househood decorations. Bringing a taste to your luxury lifestyle{" "}
              </p>
            </div>
          </div>
          <div className="mission-card">
            <div className="mission-card-img-div">
              <img src={huts} alt="img" className="mission-card-img" />
            </div>
            <div className="container mission-card-text">
              <h2 className="mission-card-head antialiased">
                House Painting and Screeding
              </h2>
              <p>
                We aim to deliver the best quality in interior and exterior
                househood decorations. Bringing a taste to your luxury lifestyle{" "}
              </p>
            </div>
          </div>
          <div className="mission-card">
            <div className="mission-card-img-div">
              <img src={ist} alt="img" className="mission-card-img" />
            </div>
            <div className="container mission-card-text">
              <h2 className="mission-card-head antialiased">
                Industrial Cleaning
              </h2>
              <p>
                We aim to deliver the best quality in interior and exterior
                househood decorations. Bringing a taste to your luxury lifestyle{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
