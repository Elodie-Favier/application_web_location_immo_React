import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Locations from "../components/Locations";

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
