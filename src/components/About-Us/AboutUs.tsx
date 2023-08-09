import React, { useEffect, useState } from "react";
import "./About.css";
import Hom from "../../assests/images/Globe.svg.png";
const AboutUs = () => {
  const [rotationAngle, setRotationAngle] = useState(0);

  const rotatePicture = () => {
    setRotationAngle((prevAngle: any) => prevAngle + 1); // Increase rotation angle by 1 degree
    requestAnimationFrame(rotatePicture); // Request the next animation frame
  };

  useEffect(() => {
    const animationId = requestAnimationFrame(rotatePicture);

    return () => {
      cancelAnimationFrame(animationId); // Clean up animation when component unmounts
    };
  }, []); // Empty dependency array ensures the effect runs only once

  const pictureStyle = {
    transform: `rotate(${rotationAngle}deg)`,
    transition: "transform 10s ease-in-out", // Optional smooth transition effect
  };

  return (
    <div className="about-main-div" id="about-us">
      <div className="containers">
        <div>
          <div className="our-sh">About Us</div>
          <div className="w-service-big">REGISCAJE DELUX INTERIORS</div>
        </div>
        <div className="about-div-display">
          <div className="aboutus-write-up-div">
            <div>
              <strong className="st-serve">REGISCAJE DELUX INTERIORS</strong> is
              established to meet your needs on home renovation, small, medium
              and big interior design projects, serving both people of
              low-income and luxury class. We believes in bringing to real life
              imagination of luxury home. With our unimaginable creativity
              power, without compromising quality, we strive to take care of our
              clients taste and budget and still deliver incredible and
              fascinating interiors decor.{" "}
            </div>
            <div className="mt-4">
              <strong className="st-serve">REGISCAJE DELUX INTERIORS</strong>{" "}
              specializes on sales, contracting and services of all kinds of
              interiors needs for both home, corporate and commercial buildings.
              We render both in-store services, contract services and online
              services. The store outlet has in-stock all kinds of interior
              furnishing materials that represents a number of well-renowned
              brands in both Europe, Asia and the U.S. The contract services is
              equipped with well experienced work force that make and install
              all kinds of interior furnishing ranging from; window blinds,
              curtains, wall panels and papers, floor tiling and carpets,
              paintings, lightings, furnitures, POP. Our online services is
              equipped to seamlessly serve our numerous clients all over the
              world.
            </div>
          </div>
          <div className="div-img-left">
            <img
              src={Hom}
              alt="pix"
              className="left-div-img"
              style={pictureStyle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
