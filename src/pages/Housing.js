import React from "react";
import InfosRentalAndHost from "../components/InfosRentalAndHost";
import Carrousel from "../components/Carrousel";
import { rentalList } from "../Data/rentalList";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Error404 from "../components/Error404";
import CollapseRentalEquipment from "../components/CollapseRentalEquipment";
import CollapseRentalDescription from "../components/CollapseRentalDescription";
// import Rating from "../components/Rating";

const Housing = () => {
  const { id } = useParams();
  const rental = rentalList.find((rental) => rental.id.includes(id));

  if (rental) {
    return (
      <div>
        <Header />
        <div className="sheet">
          <Carrousel rental={rental} />
          {rentalList
            .filter((rental) => rental.id.includes(id))
            .map((rental, index) => (
              <div>
                <InfosRentalAndHost key={index} rental={rental} />

                <div className="collapse__rental">
                  <CollapseRentalDescription
                    key={rental.description}
                    rental={rental}
                  />
                  <CollapseRentalEquipment rental={rental} />
                </div>
              </div>
            ))}
        </div>
        <Footer />
      </div>
    );
  } else {
    return <Error404 />;
  }
};

export default Housing;
