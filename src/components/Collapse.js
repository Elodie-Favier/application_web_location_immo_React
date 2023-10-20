import React from "react";

const Collapse = () => {
  return (
    <div className="collapse">
      <div className="collapse__header">
        <p className="collapse__title">Titre</p>
        <button className="collapse__btn">
          <img src="./arrow-down.png" alt="flèche vers le bas" />
        </button>
      </div>
      <div className="collapse__content">
        Je suis un paragraphe qui n'apparait que lorque le bouton est cliqué. Je
        suis un paragraphe qui n'apparait que lorque le bouton est cliqué. Je
        suis un paragraphe qui n'apparait que lorque le bouton est cliqué. Je
        suis un paragraphe qui n'apparait que lorque le bouton est cliqué.
      </div>
    </div>
  );
};

export default Collapse;
