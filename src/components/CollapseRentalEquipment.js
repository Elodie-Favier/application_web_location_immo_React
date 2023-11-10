import React, { useState } from "react";

const CollapseRentalEquipment = ({ rental }) => {
  const equipments = rental.equipments;
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="collapse__bloc">
      <div
        className="collapse__rentalheader"
        onClick={() => setIsActive(!isActive)}
      >
        <div className="collapse__rentaltitle">
          <p>Equipements</p>
        </div>
        <button className="collapse__rentalbtn">
          {isActive ? (
            <div>
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
      {isActive && (
        <div className="collapse__rental__content">
          {
            <div>
              {equipments.map((equip, index) => {
                return <ul key={index}>{equip}</ul>;
              })}
            </div>
          }
        </div>
      )}
    </div>
  );
};

export default CollapseRentalEquipment;
