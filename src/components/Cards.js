import React from "react";

import { Link } from "react-router-dom";

const Cards = ({ rental }) => {
  const rentalId = (e) => {
    return e.target.id;
  };
  return (
    <div className="card">
      <Link to={`/housing/${rental.id}`}>
        <div className="card__filter"></div>
        <img
          onClick={rentalId}
          value={rental.id}
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
