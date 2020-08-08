import React, { useEffect } from "react";
import "./App.css";
import { requests, genres } from "./Utils/requests";
import RowCategories from "./Components/RowCategories";
import Banner from "./Components/Banner";
import NavBar from "./Components/NavBar";
import { connect } from "react-redux";
import * as ActionType from "./Actions";

function App(props) {
  const {
    fetchRequest,
    getNetflixOriginals,
    getTopRated,
    getTrending,
    getActionMovies,
    getComedyMovies,
    getHorrorMovies,
    getRomanticMovies,
    getDocumentryMovies,
  } = props;

  useEffect(() => {
    fetchRequest(requests.netflixOriginals, genres.netflixOriginals);
    fetchRequest(requests.topRatedMoves, genres.topRatedMoves);
    fetchRequest(requests.trending, genres.trending);
    fetchRequest(requests.actionMovies, genres.actionMovies);
    fetchRequest(requests.comedyMovies, genres.comedyMovies);
    fetchRequest(requests.horrorMovies, genres.horrorMovies);
    fetchRequest(requests.romanticMovies, genres.romanticMovies);
    fetchRequest(requests.documentryMovies, genres.documentryMovies);
  }, [fetchRequest]);

  let bannerContent =
    getNetflixOriginals[
      Math.floor(Math.random() * getNetflixOriginals.length - 1)
    ];

  return (
    <div className="parent-container">
      <NavBar />
      <Banner bannerContent={bannerContent} />
      <RowCategories
        rowCategoryTitle={genres.netflixOriginals}
        categoryData={getNetflixOriginals}
      />
      <RowCategories
        rowCategoryTitle={genres.topRatedMoves}
        categoryData={getTopRated}
      />
      <RowCategories
        rowCategoryTitle={genres.trending}
        categoryData={getTrending}
      />
      <RowCategories
        rowCategoryTitle={genres.actionMovies}
        categoryData={getActionMovies}
      />
      <RowCategories
        rowCategoryTitle={genres.comedyMovies}
        categoryData={getComedyMovies}
      />
      <RowCategories
        rowCategoryTitle={genres.horrorMovies}
        categoryData={getHorrorMovies}
      />
      <RowCategories
        rowCategoryTitle={genres.romanticMovies}
        categoryData={getRomanticMovies}
      />
      <RowCategories
        rowCategoryTitle={genres.documentryMovies}
        categoryData={getDocumentryMovies}
      />
    </div>
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
    getActionMovies: state.actionMovies,
    getComedyMovies: state.comedyMovies,
    getHorrorMovies: state.horrorMovies,
    getRomanticMovies: state.romanticMovies,
    getDocumentryMovies: state.documentryMovies,
  };
};

export default connect(mapStateToProps, mapActionToProps)(App);
