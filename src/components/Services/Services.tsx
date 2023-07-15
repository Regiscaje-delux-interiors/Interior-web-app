import React from "react";
import { BiMobile } from "react-icons/bi";
import { GrCloudlinux } from "react-icons/gr";
import {
  SiGooglesearchconsole,
  SiJirasoftware,
  SiSemanticweb,
  SiWebpack,
} from "react-icons/si";
import "./Service.css";
import { Container } from "react-bootstrap";

const Services = () => {
  return (
    <div className="service-main-div">
      {/* <Container> */}
      <div className="dsp-service-div">
        <div>
          <div className="our-sh">// OUR SERVICE</div>
          <div className="w-service-big">
            We Offer a Wide Variety of Interior and Home Design
          </div>
        </div>
        <div className="all-service">ALL SERVICES</div>
      </div>
      <div className="dsp-web-d">
        <div className="web-service-div">
          <div>
            <SiWebpack className="icon-service" />{" "}
          </div>
          <div className="bold-h-service">Home Decoration</div>
          <div className="p-service">
            <p className="p1-service">
              Create functional, safe, and aesthetically pleasing spaces by
              assessing space requirements for work and living spaces,
              determining optimal furniture placement, selecting and sourcing
              decorative items.
            </p>
            <br />
            <p className="p2-service">
              We maintain a strict adherence to building codes and regulatory
              standards.
            </p>
          </div>
        </div>

        <div className="web-service-div">
          <div>
            <SiSemanticweb className="icon-service" />{" "}
          </div>
          <div className="bold-h-service">
            Interior & Exterior Furniture Decoration
          </div>
          <div className="p-service">
            <p className="p1-service">
              {" "}
              Our carpentry/furniture services are based on structures
              beautification, such as office partitioning, living room
              furnitures, kitchen cabinets, bedroom convy, etc. Creating extra
              revenue in Hotels, Conference Halls, Convention Centers by holding
              several smaller functions as well as large ones.
            </p>
            <br />
            <p className="p2-service">
              <strong className="st-serve">REGISCAJE DELUX INTERIORS</strong> We
              are specialists in operable walls, moveable walls, sliding folding
              partitions, vinyl concertina partitions, folding walls and glass
              walls.
            </p>
          </div>
        </div>

        <div className="web-service-div">
          <div>
            <BiMobile className="icon-service" />{" "}
          </div>
          <div className="bold-h-service">Design and Drafting</div>
          <div className="p-service">
            <p className="p1-service">
              {" "}
              To meet various architectural needs of small to medium size
              residential and commercial projects.
            </p>
            <br />
            <p className="p2-service">
              With the use of state-ofthe art CAD software to deliver digital
              drawings, diagrams, and blueprints of various structures to
              architects, and 3D modeling.
            </p>
          </div>
        </div>

        <div className="web-service-div">
          <div>
            <SiJirasoftware className="icon-service" />{" "}
          </div>
          <div className="bold-h-service">Industrial Cleaning</div>
          <div className="p-service">
            <p className="p1-service">
              {" "}
              Intensive construction cleaning services includes building
              cleaning works, facility cleaning services, which focuses on new
              built houses, renovated houses as required by clients in keeping
              offices, homes, hotels or other public areas neat, organized and
              well decorated.
            </p>
            <br />
            <p className="p2-service">
              Offering flexible cleaning solutions based on the nature of the
              industry and client’s requirements.
            </p>
          </div>
        </div>

        <div className="web-service-div">
          <div>
            <GrCloudlinux className="icon-service" />{" "}
          </div>
          <div className="bold-h-service">Landscaping</div>
          <div className="p-service">
            <p className="p1-service">
              We also specializes in landscaping servies. Our lanscpe division
              stands ready to meet our Client requirements as per project needs
              and specifications.
            </p>
            <br />

            <p className="p2-service">
              <li> Cost Savings</li>
              <li> Commissioning</li>
              <li> Flexibility</li>
              <li> Commitment</li>
              <li> Experience</li>
              <li> Increased Collaboration</li>
              <li> Quality Control</li>
              <li> Capability</li>
              <li>Project Execution</li>
              <li> Automatic Software updates</li>
              <li> Success</li>
              <li> Sustainability</li>
            </p>
          </div>
        </div>

        <div className="web-service-div">
          <div>
            <SiGooglesearchconsole className="icon-service" />{" "}
          </div>
          <div className="bold-h-service">Consultation</div>
          <div className="p-service">
            <p className="p1-service">
              We are our client’s and customers representatives from conception,
              planning to furnishing of the project.{" "}
            </p>
            <br />
            <p className="p2-service">
              Dial us and have experience of our expertise.
            </p>
          </div>
        </div>
      </div>
      {/* </Container> */}
    </div>
  );
};

export default Services;
