import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Error404 = () => {
  return (
    <div>
      <Header />
      <div className="error">
        <p className="error__404">404</p>
        <p className="error__message">
          Oups ! La page que vous demandez n'existe pas.
        </p>
        <NavLink to="/">
          <p className="backToAcceuil">Retourner sur la page d’accueil</p>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default Error404;
