import React, { useState } from "react";

const CollapseAbout2 = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="collapse">
      <div className="collapse__header" onClick={() => setIsActive(!isActive)}>
        <div className="collapse__title">{title}</div>
        <button className="collapse__btn">
          {isActive ? (
            <img src="./arrow-up.png" alt="fleche vers le haut" />
          ) : (
            <img src="./arrow-down.png" alt="fleche vers le bas" />
          )}
        </button>
      </div>
      {isActive && <div className="collapse__content">{content}</div>}
    </div>
  );
};

export default CollapseAbout2;
