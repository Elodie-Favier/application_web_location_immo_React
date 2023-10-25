import React from "react";

const Carrousel = () => {
  return (
    <div className="sheet__carrousel">
      <img
        className="sheet__img"
        src="./img-test-carrousel.png"
        alt="images de la location"
      />
      <div className="sheet__arrows">
        <img
          src="./big-arrow-forward.png"
          alt="flèche vers gauche"
          className="sheet__"
        />
        <img
          src="./big-arrow-next.png"
          alt="flèche vers droite"
          className="sheet__"
        />
      </div>
    </div>
  );
};

export default Carrousel;
