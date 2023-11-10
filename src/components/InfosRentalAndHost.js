import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";

// const element = <FontAwesomeIcon icon={faStar} />

const InfosRentalAndHost = ({ rental }) => {
  const rentalTags = rental.tags;
  // let selectedStars = rental.rating;
  // selectedStars = parseInt(selectedStars);
  // console.log(selectedStars);
  // // const [stars, SetStars] = useState();
  // console.log(selectedStars);
  // const stars  =

  return (
    <div className="info">
      <div className="info__rental">
        <div className="info__localisation">
          <h2>{rental.title}</h2>
          <p>{rental.location}</p>
        </div>
        <div className="info__host">
          <div className="info__host__identity">
            <p>{rental.host.name} </p>
            <img src={rental.host.picture} alt="avatar du propriétaire" />
          </div>
          <div className="info__ratings">
            <div className="ratings__bloc">
              <img
                src="/star.png"
                className="rating__star rating__star--inactive"
                alt="etoile"
              />
              <img
                src="/star.png"
                className="rating__star rating__star--inactive"
                alt="etoile"
              />
              <img
                src="/star.png"
                className="rating__star rating__star--inactive"
                alt="etoile"
              />
              <img
                src="/star.png"
                className="rating__star rating__star--inactive"
                alt="etoile"
              />
              <img
                src="/star.png"
                className="rating__star rating__star--inactive"
                alt="etoile"
              />
            </div>
          </div>
        </div>

        <div className="info__details">
          {
            <div className="details__tags">
              {rentalTags.map((tag) => {
                return <p className="tags">{tag}</p>;
              })}
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default InfosRentalAndHost;
