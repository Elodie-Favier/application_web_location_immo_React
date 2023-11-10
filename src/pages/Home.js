import React from "react";
import Banner from "../components/Banner";
import Locations from "../components/Locations";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Locations />
      <Footer />
    </div>
  );
};

export default Home;
