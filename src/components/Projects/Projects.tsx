import React from "react";
import "./Projects.css";
import pprt from "../../assests/images/pprt.jpg";
import hut from "../../assests/images/Hom.jpg";
import elect from "../../assests/images/elect.jpg";
import max from "../../assests/images/max.jpg";
import gg from "../../assests/images/comp.jpg";
import hj from "../../assests/images/gg.jpg";
import wall from "../../assests/images/wall.jpg";
import funi from "../../assests/images/funi.jpg";
import scred from "../../assests/images/Screeding.jpg";
import { Container } from "react-bootstrap";
const Projects = () => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [isFlippeds, setIsFlippeds] = React.useState(false);
  const [isFlippedss, setIsFlippedss] = React.useState(false);
  const [isFlippedsss, setIsFlippedsss] = React.useState(false);
  const [isFlippedssss, setIsFlippedssss] = React.useState(false);
  const [isFlippedsssss, setIsFlippedsssss] = React.useState(false);
  const [isFlippedssssss, setIsFlippedssssss] = React.useState(false);
  const [isFlippedsssssss, setIsFlippedsssssss] = React.useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  const handleFlips = () => {
    setIsFlippeds(!isFlippeds);
  };
  const handleFlipss = () => {
    setIsFlippedss(!isFlippedss);
  };
  const handleFlipsss = () => {
    setIsFlippedsss(!isFlippedsss);
  };
  const handleFlipssss = () => {
    setIsFlippedssss(!isFlippedssss);
  };
  const handleFlipsssss = () => {
    setIsFlippedsssss(!isFlippedsssss);
  };
  const handleFlipssssss = () => {
    setIsFlippedssssss(!isFlippedssssss);
  };
  const handleFlipsssssss = () => {
    setIsFlippedsssssss(!isFlippedsssssss);
  };
  return (
    <div className="bg-indigo-950 projects-section">
      <div className="container mx-auto">
        <div className="project-heading">
          <h1>Our Projects</h1>
          <hr className="project-hr" />
        </div>

        <div className="project-photo-display">
          <div
            className={`flip-card ${isFlipped ? "flipped" : ""}`}
            onMouseEnter={handleFlip}
            onMouseLeave={handleFlip}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={max} alt="img" className="project-photo" />
              </div>
              <div className="flip-card-back">
                <img src={hut} alt="img" className="project-photo" />
              </div>
            </div>
          </div>
          <div
            className={`flip-card ${isFlippeds ? "flipped" : ""}`}
            onMouseEnter={handleFlips}
            onMouseLeave={handleFlips}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={elect} alt="img" className="project-photo" />
              </div>
              <div className="flip-card-back">
                <img src={hut} alt="img" className="project-photo" />
              </div>
            </div>
          </div>
          <div
            className={`flip-card ${isFlippedss ? "flipped" : ""}`}
            onMouseEnter={handleFlipss}
            onMouseLeave={handleFlipss}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={hj} alt="img" className="project-photo" />
              </div>
              <div className="flip-card-back">
                <img src={hut} alt="img" className="project-photo" />
              </div>
            </div>
          </div>
          <div
            className={`flip-card ${isFlippedsss ? "flipped" : ""}`}
            onMouseEnter={handleFlipsss}
            onMouseLeave={handleFlipsss}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={scred} alt="img" className="project-photo" />
              </div>
              <div className="flip-card-back">
                <img src={hut} alt="img" className="project-photo" />
              </div>
            </div>
          </div>
          <div
            className={`flip-card ${isFlippedssss ? "flipped" : ""}`}
            onMouseEnter={handleFlipssss}
            onMouseLeave={handleFlipssss}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={gg} alt="img" className="project-photo" />
              </div>
              <div className="flip-card-back">
                <img src={funi} alt="img" className="project-photo" />
              </div>
            </div>
          </div>
          <div
            className={`flip-card ${isFlippedsssss ? "flipped" : ""}`}
            onMouseEnter={handleFlipsssss}
            onMouseLeave={handleFlipsssss}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={wall} alt="img" className="project-photo" />
              </div>
              <div className="flip-card-back">
                <img src={hut} alt="img" className="project-photo" />
              </div>
            </div>
          </div>
          <div
            className={`flip-card ${isFlippedssssss ? "flipped" : ""}`}
            onMouseEnter={handleFlipssssss}
            onMouseLeave={handleFlipssssss}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={funi} alt="img" className="project-photo" />
              </div>
              <div className="flip-card-back">
                <img src={hut} alt="img" className="project-photo" />
              </div>
            </div>
          </div>
          <div
            className={`flip-card ${isFlippedsssssss ? "flipped" : ""}`}
            onMouseEnter={handleFlipsssssss}
            onMouseLeave={handleFlipsssssss}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={pprt} alt="img" className="project-photo" />
              </div>
              <div className="flip-card-back">
                <img src={wall} alt="img" className="project-photo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
