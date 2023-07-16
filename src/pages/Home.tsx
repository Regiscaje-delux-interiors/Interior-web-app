import React from "react";
import Navbar from "../components/Header/Navbar";
import Testimony from "../components/Testimony/Testimony";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Mission from "../components/Mission/Mission";
import Projects from "../components/Projects/Projects";

import Footer from "../components/Footer/Footer";
import { Container } from "@mui/system";
import Partners from "../components/Partners/Partners";
import CanvasRotate from "../components/Canvas/CanvasRotate";

const Home = () => {
  return (
    <div>
      <Hero />
      {/* <Container> */}
      <Services />
      <Mission />
      <Projects />

      <Testimony />
      <Partners />
      {/* </Container> */}
    </div>
  );
};

export default Home;
