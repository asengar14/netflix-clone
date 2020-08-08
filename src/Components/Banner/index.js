import React from "react";
import "./banner.css";

function Banner(props) {
  const { bannerContent } = props;

  return (
    <header
      className="bannerContainer"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${bannerContent?.backdrop_path})`,
        backgroundPosition: "inherit",
      }}
    >
      <div className="bannerContainer__content">
        <h1 className="bannerContainer__title">
          {bannerContent?.original_name ||
            bannerContent?.name ||
            bannerContent?.title}
        </h1>
        <div className="bannerContainer__buttons">
          <button className="bannerContainer__button">Play</button>
          <button className="bannerContainer__button">My List</button>
        </div>
        <div className="bannerContainer__description">
          {bannerContent?.overview}
        </div>
      </div>
      <div className="bannerContainer__fadeBottom" />
    </header>
  );
}

export default Banner;
