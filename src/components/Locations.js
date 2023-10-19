import React from "react";
import { rentalList } from "../Data/rentalList";
import Cards from "./Cards";

const Locations = () => {
  // const cardsDisplay = rentalList.reduce
  return (
    <div className="gallery">
      {rentalList.map((rental) => (
        <Cards key={rental.id} rental={rental} />
      ))}
    </div>
  );
};

export default Locations;
