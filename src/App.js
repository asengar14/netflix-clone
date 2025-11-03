import React, { useEffect } from "react";
import "./App.css";
import { requests, genres } from "./Utils/requests";
import RowCategories from "./Components/RowCategories";
import Banner from "./Components/Banner";
import NavBar from "./Components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import * as ActionType from "./Actions";

function App() {
  const dispatch = useDispatch();

  const getNetflixOriginals = useSelector((state) => state.netflixOriginals);
  const getTopRated = useSelector((state) => state.topRated);
  const getTrending = useSelector((state) => state.trending);
  const getActionMovies = useSelector((state) => state.actionMovies);
  const getComedyMovies = useSelector((state) => state.comedyMovies);
  const getHorrorMovies = useSelector((state) => state.horrorMovies);
  const getRomanticMovies = useSelector((state) => state.romanticMovies);
  const getDocumentryMovies = useSelector((state) => state.documentryMovies);

  useEffect(() => {
    dispatch({
      type: ActionType.FETCH_ACTION,
      fetchTypeRequest: requests.netflixOriginals,
      serviceName: genres.netflixOriginals,
    });
    dispatch({
      type: ActionType.FETCH_ACTION,
      fetchTypeRequest: requests.topRatedMoves,
      serviceName: genres.topRatedMoves,
    });
    dispatch({
      type: ActionType.FETCH_ACTION,
      fetchTypeRequest: requests.trending,
      serviceName: genres.trending,
    });
    dispatch({
      type: ActionType.FETCH_ACTION,
      fetchTypeRequest: requests.actionMovies,
      serviceName: genres.actionMovies,
    });
    dispatch({
      type: ActionType.FETCH_ACTION,
      fetchTypeRequest: requests.comedyMovies,
      serviceName: genres.comedyMovies,
    });
    dispatch({
      type: ActionType.FETCH_ACTION,
      fetchTypeRequest: requests.horrorMovies,
      serviceName: genres.horrorMovies,
    });
    dispatch({
      type: ActionType.FETCH_ACTION,
      fetchTypeRequest: requests.romanticMovies,
      serviceName: genres.romanticMovies,
    });
    dispatch({
      type: ActionType.FETCH_ACTION,
      fetchTypeRequest: requests.documentryMovies,
      serviceName: genres.documentryMovies,
    });
  }, [dispatch]);

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
      <RowCategories rowCategoryTitle={genres.topRatedMoves} categoryData={getTopRated} />
      <RowCategories rowCategoryTitle={genres.trending} categoryData={getTrending} />
      <RowCategories rowCategoryTitle={genres.actionMovies} categoryData={getActionMovies} />
      <RowCategories rowCategoryTitle={genres.comedyMovies} categoryData={getComedyMovies} />
      <RowCategories rowCategoryTitle={genres.horrorMovies} categoryData={getHorrorMovies} />
      <RowCategories rowCategoryTitle={genres.romanticMovies} categoryData={getRomanticMovies} />
      <RowCategories rowCategoryTitle={genres.documentryMovies} categoryData={getDocumentryMovies} />
    </div>
  );
}

export default App;
