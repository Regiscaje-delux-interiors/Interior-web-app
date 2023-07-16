import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import CanvasRotate from "../Canvas/CanvasRotate";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <footer className="bg-blue-950">
        <div className="container mx-auto">
          <div className=" flex-div-foot">
            <div className="box-footer-div">
              <h2>REGISCAJE DELUX INTERIORS</h2>
              <p>
                REGISCAJE DELUX INTERIORS fouses its vision on becoming one of
                the leaders in the industry
              </p>
              <div className="icon d_flex">
                <div className="text-lg">
                  <i className="fa-brands fa-google-play"></i>
                  <span>Google Play</span>
                </div>
                <div className="pt-2 text-lg">
                  <i className="fa-brands fa-app-store-ios"></i>
                  <span>App Store</span>
                </div>
              </div>
            </div>

            <div className="box-footer-div">
              <h4>About Us</h4>
              <ul>
                <li>Careers</li>
                <li>Mission</li>
                <li>Vission</li>
                <li>Goals</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="box-footer-div">
              <h4>Customer Care</h4>
              <ul>
                <li>Help Center </li>
                <li>How to Contact Us </li>
                <li>Customer Review </li>
                <li>Email </li>
                <li>Returns & Refunds </li>
              </ul>
            </div>
            <div className="box-footer-div">
              <h4>Contact Us</h4>
              <ul>
                <li>
                  P.O. Box : 30065 Fifth floor Building No 14 Street No 109
                  Doha, State of Qatar
                </li>
                <li>Email: regiscajedeluxinteriors@gmail.com</li>
                <li>Phone: +974 70088156</li>
                <li>Phone: +974 66040601</li>
              </ul>
            </div>
          </div>
          <div className="text-center p-3 " style={{ fontSize: "medium" }}>
            © 2023 Copyright: Regiscaje delux interiors
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
