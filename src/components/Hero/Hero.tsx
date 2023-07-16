import React, { useState, useEffect, useRef } from "react";
import pprt from "../../assests/images/pprt.jpg";
import maxj from "../../assests/images/max.jpg";
import houy from "../../assests/images/houy.jpg";
import { Carousel, Container } from "react-bootstrap";

import CountUp from "react-countup";
import "./Hero.css";
import { Typewriter } from "react-simple-typewriter";
type Props = {
  img?: any;
  text?: string;
};
const Hero: React.FC<Props> = () => {
  const [isloop, setIsloop] = useState(0);

  const images = [pprt];

  return (
    <div className="bg-slate-950 w-full h-full pb-32 hero-main-div ">
      <div className="containers ">
        <div className=" mx-auto flex justify-between items-center flex-wrap pt-8  ">
          <div className="md:w-1/2  sm:w-screen leading-5 sm:mt-20">
            <h4 className=" text-white text-5xl antialiased font-semibold typewriter-div">
              Discover Most Suitable Interior Property Design
              {/* <Typewriter
              words={["Discover Most Suitable Interior Property Design"]}
              cursor
              deleteSpeed={10}
              typeSpeed={70}
              delaySpeed={1000}
              loop={false}
              onLoopDone={() => setIsloop(isloop)}
            /> */}
            </h4>
            <div className="text-white leading-4 mt-6 pf ">
              <h5 className="text-xl">Trading and Contracting Company</h5>
              <p className="mt-1 text-xl">where creativity meets comfort</p>
            </div>
            <div className="mt-6 flex justify-start gap-5 items-start text-slate-300 text-lg pf-write">
              <div className="  antialiased font-semibold">
                <span className="text-2xl ">
                  <CountUp end={200} duration={20} />
                </span>{" "}
                <span>
                  <strong className="text-amber-400">+</strong>
                </span>
                <p className=" text-lg text-slate-300">Prenium Products</p>
              </div>
              <div className=" antialiased font-semibold">
                <span className="text-2xl ">
                  <CountUp end={4000} duration={20} />
                </span>{" "}
                <span>
                  <strong className="text-amber-400">+</strong>
                </span>
                <p className=" text-lg text-slate-300">Happy Customer</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center my-auto">
            <div className=" mt-20 rounded-t-full  border border-black overflow-hidden items-center">
              <Carousel slide={false} className="hide-arrows">
                <Carousel.Item>
                  <img
                    src={pprt}
                    alt="img"
                    className="w-full object-cover h-96 "
                  />
                </Carousel.Item>
                {/* <Carousel.Item>
                <img
                  src={maxj}
                  alt="img"
                  className="w-full object-contain h-96 "
                />
              </Carousel.Item> */}
                <Carousel.Item>
                  <img
                    src={houy}
                    alt="img"
                    className="w-full object-cover h-96 "
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
