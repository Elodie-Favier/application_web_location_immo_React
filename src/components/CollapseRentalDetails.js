import React from "react";
import CollapseRental from "./CollapseRental";

const CollapseRentalDetails = () => {
  const collapseRentalData = [
    {
      title: "Description",
      content:
        "Climatisation Wi-Fi Cuisine Espace de travail Fer à repasser Sèche-cheveux Cintres",
    },
    {
      title: "Equipements",
      content:
        "Climatisation Wi-Fi Cuisine Espace de travail Fer à repasser Sèche-cheveux Cintres",
    },
  ];
  return (
    <div className="collapse__rental">
      {collapseRentalData.map(({ title, content }) => (
        <CollapseRental title={title} content={content} />
      ))}
    </div>
  );
};

export default CollapseRentalDetails;
