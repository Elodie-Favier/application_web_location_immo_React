import React, { useState } from "react";

const CollapseAbout2 = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="collapse">
      <div className="collapse__header" onClick={() => setIsActive(!isActive)}>
        <div className="collapse__title">{title}</div>
        <button className="collapse__btn">
          {isActive ? (
            <div>
              <img
                src="/arrow-up1.png"
                className="collapse__arrowup1"
                alt="fleche vers le haut"
              />
              <img
                src="/arrow-up2.png"
                className="collapse__arrowup2"
                alt="fleche vers le haut"
              />
            </div>
          ) : (
            <div>
              <img
                src="/arrow-down1.png"
                className="collapse__arrowdown1"
                alt="fleche vers le bas"
              />
              <img
                src="/arrow-down2.png"
                className="collapse__arrowdown2"
                alt="fleche vers le bas"
              />
            </div>
          )}
        </button>
      </div>
      {isActive && <div className="collapse__content">{content}</div>}
    </div>
  );
};

export default CollapseAbout2;
