import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const starArray = [...Array(5).keys()].map((i) => i + 1);

const Rating = ({ rental }) => {
  let selectedStars = rental.rating;
  parseInt(selectedStars);

  return (
    <div className="ratings__bloc">
      {starArray.map((index) => (
        <FontAwesomeIcon
          key={`${selectedStars}-${index}`}
          icon={faStar}
          color={selectedStars >= index ? "#ff6060" : "#E3E3E3"}
          className="rating__star"
        />
      ))}
    </div>
  );
};

export default Rating;
