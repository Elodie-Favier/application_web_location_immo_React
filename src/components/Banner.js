import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <img
        src="./bkg_banner_home1.png"
        alt="rivage"
        className="bannerHome__img1"
      />
      <img
        src="./bkg_banner_home2.png"
        alt="rivage"
        className="bannerHome__img2"
      />
      <div className="banner__filter"></div>
      <p className="banner__tagline">Chez vous, partout et ailleurs</p>
    </div>
  );
};

export default Banner;
