import React, { useState } from "react";

const CollapseRental = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="collapse__rental">
      <div
        className="collapse__rental__header"
        onClick={() => setIsActive(!isActive)}
      >
        <div className="collapse__rental__title">{title}</div>
        <button className="collapse__rental__btn">
          {isActive ? (
            <img src="./arrow-up.png" alt="fleche vers le haut" />
          ) : (
            <img src="./arrow-down.png" alt="fleche vers le bas" />
          )}
        </button>
      </div>
      {isActive && <div className="collapse__rental__content">{content}</div>}
    </div>
  );
};

export default CollapseRental;
