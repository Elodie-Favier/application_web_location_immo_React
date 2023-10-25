import React from "react";
import Carrousel from "./Carrousel";
import InfosLocationAndHost from "./InfosLocationAndHost";
import RentalDetails from "./RentalDetails";
import Ratings from "./Ratings";
import CollapseRentalDetails from "./CollapseRentalDetails";

const HousingSheet = () => {
  return (
    <div className="sheet">
      <Carrousel />
      <InfosLocationAndHost />
      <Ratings />
      <RentalDetails />
      <CollapseRentalDetails />
    </div>
  );
};

export default HousingSheet;
