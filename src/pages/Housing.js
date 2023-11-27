import React, { Fragment } from "react";
import InfosRentalAndHost from "../components/InfosRentalAndHost";
import Carrousel from "../components/Carrousel";
import { rentalList } from "../Data/rentalList";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Error404 from "../components/Error404";
import CollapseRentalEquipment from "../components/CollapseRentalEquipment";
import CollapseRentalDescription from "../components/CollapseRentalDescription";

const Housing = () => {
  const { id } = useParams();
  const rental = rentalList.find((rental) => rental.id.includes(id));

  if (rental) {
    return (
      <div>
        <Header />
        <div className="sheet">
          {rentalList
            .filter((rental) => rental.id.includes(id))
            .map((rental) => (
              <Fragment key={rental.id}>
                <Carrousel key={rental.pictures} rental={rental} />
                <InfosRentalAndHost key={rental.id} rental={rental} />

                <div className="collapse__rental">
                  <CollapseRentalDescription
                    key={rental.description}
                    rental={rental}
                  />
                  <CollapseRentalEquipment
                    key={rental.equipments}
                    rental={rental}
                  />
                </div>
              </Fragment>
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
