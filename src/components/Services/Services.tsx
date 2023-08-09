import React from "react";
import { BiMobile } from "react-icons/bi";
import { GrCloudlinux } from "react-icons/gr";
import { BiSolidHomeHeart } from "react-icons/bi";
import {
  SiGooglesearchconsole,
  SiJirasoftware,
  SiSemanticweb,
  SiWebpack,
} from "react-icons/si";
import {
  FaFirstdraft,
  FaHouseChimneyWindow,
  FaPaintRoller,
} from "react-icons/fa6";
import "./Service.css";
import { Container } from "react-bootstrap";
import { DownloadProfiles } from "../DownloadProfile/DownloadProfile";
import {
  MdCarpenter,
  MdCleaningServices,
  MdOutlineCleaningServices,
  MdOutlineElectricalServices,
  MdPointOfSale,
} from "react-icons/md";
import { GiBrickWall } from "react-icons/gi";

const Services = () => {
  return (
    <div className="service-main-div" id="services">
      <div className="containers">
        <div className="dsp-service-div">
          <div>
            <div className="our-sh">OUR SERVICE</div>
            <div className="w-service-big">
              We Offer a Wide Variety of Interior and Home Design
            </div>
          </div>
        </div>
        <div className="all-service">
          <DownloadProfiles />{" "}
        </div>
        <div className="dsp-web-d">
          <div className="web-service-div">
            <div>
              <BiSolidHomeHeart className="icon-service" />{" "}
            </div>
            <div className="bold-h-service">HOME DECORATION AND DESIGN</div>
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
              <FaHouseChimneyWindow className="icon-service" />{" "}
            </div>
            <div className="bold-h-service">WINDOW BLINDS AND CURTAINS</div>
            <div className="p-service">
              <p className="p1-service">
                Design, built and install all kinds of Window Blinds and
                Curtains. Such like, venetian blinds, vertical blinds, roller
                sunscreen/blackout blinds, day and night blinds, shangrila
                blinds, automated blinds and curtains, etc.
              </p>
              <br />
              <p className="p2-service">
                Curtains are part of the key concepts we use to bring out the
                beauty of homes, offices and corporate places. We deal on sales,
                production and fabrication of all kinds of curtain designs.
              </p>
            </div>
          </div>
          <div className="web-service-div">
            <div>
              <MdOutlineElectricalServices className="icon-service" />{" "}
            </div>
            <div className="bold-h-service">ELECTRICAL WORKS</div>
            <div className="p-service">
              <p className="p1-service">
                It includes power and lighting system installations, trucking
                and tray installation, low voltage (LV) power distribution, UPS
                systems, Supply, Erection & Commissioning of Electrical
                Equipment such as Transformers, Generators, MCC, earthing &
                lightning system, MDB, SMDB installation 3 & termination etc.
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
              <MdCarpenter className="icon-service" />{" "}
            </div>
            <div className="bold-h-service">CARPENTRY AND FURNITURE</div>
            <div className="p-service">
              <p className="p1-service">
                Our carpentry/furniture services are based on structures
                beautification, such as office partitioning, living room
                furnitures, kitchen cabinets, bedroom convy, etc. Creating extra
                revenue in Hotels, Conference Halls, Convention Centers by
                holding several smaller functions as well as large ones.
              </p>
              <br />
              <p className="p2-service">
                We are specialists in operable walls, moveable walls, sliding
                folding partitions, vinyl concertina partitions, folding walls
                and glass walls.
              </p>
            </div>
          </div>

          <div className="web-service-div">
            <div>
              <GiBrickWall className="icon-service" />{" "}
            </div>
            <div className="bold-h-service">
              WALL PAPER/PANELS/TILING AND FLOORING
            </div>
            <div className="p-service">
              <p className="p1-service">
                {" "}
                Beautifying, Decorating and protecting floors and walls of the
                bathroom, kitchen, living rooms, staircase, of both homes and
                commercial buildings using all kinds of designs including
                ceramic tile, porcelain tile, glass tile, marble tile, granite
                tile and natural stone tile, wall papers, wall panels.
              </p>
              <br />
              <p className="p2-service">
                <strong className="st-serve">REGISCAJE DELUX INTERIORS</strong>{" "}
                puts in addition to other flooring works with wood, carpet, or
                even vinyl plank flooring.
              </p>
            </div>
          </div>

          <div className="web-service-div">
            <div>
              <FaFirstdraft className="icon-service" />{" "}
            </div>
            <div className="bold-h-service">DESIGN AND DRAFTING</div>
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
              <MdCleaningServices className="icon-service" />{" "}
            </div>
            <div className="bold-h-service">INDUSTRIAL CLEANING</div>
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
              <FaPaintRoller className="icon-service" />{" "}
            </div>
            <div className="bold-h-service">PAINTING/SCREEDING WORKS</div>
            <div className="p-service">
              <p className="p1-service">
                Excellent painting, screeding, coating on the interior and
                exterior of structures, buildings, rooms and other surfaces.
                Preparing walls and other surfaces for painting by scraping and
                selecting the right materials for the structure.
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
              <MdPointOfSale className="icon-service" />{" "}
            </div>
            <div className="bold-h-service">
              SALES/MARKETING AND CONSULTATION
            </div>
            <div className="p-service">
              <p className="p1-service">
                We are our client’s and customers representatives from
                conception, planning to furnishing of the project.{" "}
              </p>
              <br />
              <p className="p2-service">
                Dial us and have experience of our expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
