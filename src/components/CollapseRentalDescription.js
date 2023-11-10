import React, { useState } from "react";

const CollapseRentalDescription = ({ rental }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="collapse__bloc">
      <div
        className="collapse__rentalheader"
        onClick={() => setIsActive(!isActive)}
      >
        <div className="collapse__rentaltitle">
          <p>Description</p>
        </div>
        <button className="collapse__rentalbtn">
          {isActive ? (
            <div className="collapse__rentalarrows">
              <img
                src="/arrow-up1.png"
                alt="fleche vers le haut"
                className="collapse__arrowUp1"
              />
              <img
                src="/arrow-up2.png"
                alt="fleche vers le haut"
                className="collapse__arrowUp2"
              />
            </div>
          ) : (
            <div>
              <img
                src="/arrow-down1.png"
                alt="fleche vers le bas"
                className="collapse__arrowDown1"
              />
              <img
                src="/arrow-down2.png"
                alt="fleche vers le bas"
                className="collapse__arrowDown2"
              />
            </div>
          )}
        </button>
      </div>
      <div className="collapse_rental__bloc"></div>
      {isActive && (
        <div className="collapse__rental__content">{rental.description}</div>
      )}
    </div>
  );
};

export default CollapseRentalDescription;
