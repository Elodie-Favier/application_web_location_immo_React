import React, { useState } from "react";

const Carrousel = ({ rental }) => {
  const [current, setCurrent] = useState(0);
  const pictures = rental.pictures;
  const length = pictures.length;
  const currentNumber = current + 1;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider">
      <div className={length === 1 ? "displaynone" : "slider__arrows"}>
        <img
          src="/big-arrow-forward.png"
          alt="flèche vers gauche"
          className="bigArrow"
          onClick={prevSlide}
        />
        <img
          src="/arrow-small_back.png"
          alt="flèche vers gauche"
          className="smallArrow"
          onClick={prevSlide}
        />
        <img
          src="/big-arrow-next.png"
          alt="flèche vers droite"
          className="bigArrow"
          onClick={nextSlide}
        />
        <img
          src="/arrow-small_next.png"
          alt="flèche vers droite"
          className="smallArrow"
          onClick={nextSlide}
        />
      </div>
      <div className={length === 1 ? "displaynone" : "slider__number"}>
        <p>
          {currentNumber} / {length}
        </p>
      </div>
      {pictures.map((picture, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={`${picture}-${index}`}
          >
            {index === current && (
              <img src={picture} alt="logements" className="slider__img" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Carrousel;
