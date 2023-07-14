import React from "react";
import Marquee from "react-fast-marquee";
import bg from "../../assests/images/bg.png";
import clis from "../../assests/images/clipsal-logo.jpg";
import pier from "../../assests/images/pierlite.png";
import wilco from "../../assests/images/wilco.jpg";
import kopos from "../../assests/images/kopos.jpg";

import "./Partners.css";

type Props = {};
const Partners: React.FC<Props> = () => {
  return (
    <div>
      {" "}
      <h3 className="text-center antialiased f pt-16 pb-8 text-slate-950  text-5xl part-h">
        {" "}
        Our Partners
      </h3>
      <div className="m-partners">
        <Marquee direction="left" pauseOnHover>
          <div className="img-wrap">
            <img src={pier} alt="nns" className="parnet-img" />
          </div>
          <div className="img-wrap">
            <img src={clis} alt="nns" className="parnet-img" />
          </div>
          <div className="img-wrap">
            <img src={wilco} alt="nns" className="parnet-img" />
          </div>
          {/* <div className="img-wrap">
            <img src={partners3} alt="nns" className="parnet-img" />
          </div> */}
          <div className="img-wrap">
            <img src={bg} alt="nns" className="parnet-img" />
          </div>
        </Marquee>
        <div className="p-per">
          <Marquee direction="right" pauseOnHover>
            <div className="img-wrap">
              <img src={kopos} alt="nns" className="parnet-img" />
            </div>
            {/* <div className="img-wrap">
              <img src={partners3} alt="nns" className="parnet-img" />
            </div> */}
            <div className="img-wrap">
              <img src={clis} alt="nns" className="parnet-img" />
            </div>
            <div className="img-wrap">
              <img src={wilco} alt="nns" className="parnet-img" />
            </div>
            <div className="img-wrap">
              <img src={bg} alt="nns" className="parnet-img" />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Partners;
