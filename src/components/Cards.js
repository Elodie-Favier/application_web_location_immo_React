import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ rental }) => {
  return (
    <div className="card">
      <Link to="Housing">
        <div className="card__filter"></div>
        <img
          src={rental.cover}
          alt="illustration de la location"
          className="card__img"
        />
        <p className="card__text">{rental.title}</p>
      </Link>
    </div>
  );
};

export default Cards;
