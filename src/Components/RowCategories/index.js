import React, { useState } from "react";
import * as ActionType from "../../Actions";
import { connect, useStore } from "react-redux";
import RowItem from "../RowItem";
import "./row-categories.css";
import Youtube from "react-youtube";
import movieTrailor from "movie-trailer";

function RowCategories(props) {
  const [videoURL, setVideoURL] = useState("");
  const [videoTitlePrevious, setVideoTitlePrevious] = useState("");
  const { rowCategoryTitle, categoryData } = props;

  const options = {
    width: "100%",
    height: "390px",
    playerVars: {
      autoplay: 1,
    },
  };

  const handlePosterClick = (movie) => {
    const title = movie?.name || movie?.original_name || movie?.title;
    if (title != videoTitlePrevious) {
      movieTrailor(title || "")
        .then((url) => {
          const params = new URLSearchParams(new URL(url).search);
          setVideoURL(params.get("v"));
          setVideoTitlePrevious(title);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (title === videoTitlePrevious) {
      setVideoURL("");
    }
  };

  return (
    <>
      <h1 className="row__title">{rowCategoryTitle}</h1>
      <div className="row__list">
        {categoryData.map((item, index) => (
          <RowItem
            key={index}
            item={item}
            handlePosterClick={handlePosterClick}
          />
        ))}
      </div>
      {videoURL && <Youtube videoId={videoURL} opts={options} />}
    </>
  );
}

const mapActionToProps = (dispatch) => {
  return {
    fetchRequest: (fetchTypeRequest, serviceName) => {
      dispatch({
        type: ActionType.FETCH_ACTION,
        fetchTypeRequest: fetchTypeRequest,
        serviceName: serviceName,
      });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    getNetflixOriginals: state.netflixOriginals,
    getTopRated: state.topRated,
    getTrending: state.trending,
  };
};

export default connect(mapStateToProps, mapActionToProps)(RowCategories);
