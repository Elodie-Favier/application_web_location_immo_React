import React from "react";
import Rating from "./Rating";

const InfosRentalAndHost = ({ rental }) => {
  const rentalTags = rental.tags;
  // const index = 0;

  return (
    <div className="info">
      <div className="info__rental">
        <div className="info__localisation">
          <h2>{rental.title}</h2>
          <p>{rental.location}</p>
        </div>
        <div className="info__host">
          <div className="info__host__identity">
            <p>{rental.host.name} </p>
            <img src={rental.host.picture} alt="avatar du propriétaire" />
          </div>
          <div className="info__ratings">
            <Rating rental={rental} />
          </div>
        </div>

        <div className="info__details">
          {
            <div className="details__tags">
              {rentalTags.map((tag, index) => {
                return (
                  <p key={`${tag}-${index}`} className="tags">
                    {tag}
                  </p>
                );
              })}
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default InfosRentalAndHost;
