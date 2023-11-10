import React from "react";
import Error404 from "../components/Error404";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Error = () => {
  return (
    <div>
      <Header />
      <Error404 />
      <Footer />
    </div>
  );
};

export default Error;
