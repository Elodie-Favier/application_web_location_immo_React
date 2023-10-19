import React from "react";

const Cards = ({ rental }) => {
  return (
    <div className="card">
      <div className="card__filter"></div>
      <img
        src={rental.cover}
        alt="illustration de la location"
        className="card__img"
      />
      <p className="card__text">{rental.title}</p>
    </div>
  );
};

export default Cards;
