import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerAbout from "../components/BannerAbout";
import CollapseAbout from "../components/CollapseAbout";

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
