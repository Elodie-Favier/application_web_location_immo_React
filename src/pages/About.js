import React from "react";

import BannerAbout from "../components/BannerAbout";
import CollapseAbout from "../components/CollapseAbout";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Header />
      <BannerAbout />
      <CollapseAbout />
      <Footer />
    </div>
  );
};

export default About;
