import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const starArray = [...Array(5).keys()].map((i) => i + 1);
console.log(starArray);

const Rating = ({ rental }) => {
  let selectedStars = rental.rating;
  parseInt(selectedStars);
  console.log(selectedStars);

  return (
    <div className="ratings__bloc">
      {starArray.map(
        (
          index // use many times
        ) => (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            color={selectedStars >= index ? "#ff6060" : "#f6f6f6"}
            className="rating__star"
          />
        )
      )}
    </div>
  );
};

export default Rating;
