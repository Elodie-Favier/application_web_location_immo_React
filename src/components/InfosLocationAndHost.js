import React from "react";

const InfosLocationAndHost = () => {
  return (
    <div className="info">
      <div className="info__localisation">
        <h2>Exemple de titre</h2>
        <p>Localisation</p>
      </div>
      <div className="info__host">
        <div className="info__host__identity">
          <p>Elodie Alien</p>
          <img src="./host.png" alt="avatar du propriétaire" />
        </div>
      </div>
    </div>
  );
};

export default InfosLocationAndHost;
