import { createSlice } from "@reduxjs/toolkit";
import * as ActionType from "../Actions";
import { genres } from "../Utils/requests";

const initialState = {
  netflixOriginals: [],
  trending: [],
  topRated: [],
  actionMovies: [],
  comedyMovies: [],
  horrorMovies: [],
  romanticMovies: [],
  documentryMovies: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  // keep listening for saga actions (FETCH_SUCCESS) coming from the existing sagas
  extraReducers: (builder) => {
    builder.addCase(ActionType.FETCH_SUCCESS, (state, action) => {
      const requestInfo = action.requestInfo;
      const result = action.result || [];
      if (requestInfo === genres.netflixOriginals) {
        state.netflixOriginals = result;
      } else if (requestInfo === genres.topRatedMoves) {
        state.topRated = result;
      } else if (requestInfo === genres.actionMovies) {
        state.actionMovies = result;
      } else if (requestInfo === genres.comedyMovies) {
        state.comedyMovies = result;
      } else if (requestInfo === genres.horrorMovies) {
        state.horrorMovies = result;
      } else if (requestInfo === genres.documentryMovies) {
        state.documentryMovies = result;
      } else if (requestInfo === genres.romanticMovies) {
        state.romanticMovies = result;
      } else if (requestInfo === genres.trending) {
        state.trending = result;
      }
    });
  },
});

export default moviesSlice.reducer;
