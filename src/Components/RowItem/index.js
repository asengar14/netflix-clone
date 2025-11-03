import React from "react";
import "./rowitem.css";

function RowItem(props) {
  const { item, handlePosterClick } = props;
  const imageBaseURL = "https://image.tmdb.org/t/p/w500";

  return (
    <>
      <div className="posterContainer">
        <img
          onClick={() => {
            handlePosterClick(item);
          }}
          src={`${imageBaseURL}${item.poster_path}`}
          alt={item.name}
          className="postercontainer__image"
        ></img>
      </div>
    </>
  );
}

export default RowItem;
