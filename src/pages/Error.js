import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Error404 from "../components/Error404";

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
