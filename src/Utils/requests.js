const API = "19fce9e252a152b8b3a79d037e603e3f";
export const requests = {
  trending: `trending/all/day?api_key=${API}`,
  netflixOriginals: `discover/tv?api_key=${API}&language=en-US&sort_by=popularity.desc`,
  topRatedMoves: `/movie/top_rated?api_key=${API}&language=en-US`,
  actionMovies: `discover/movie?api_key=${API}&with_genres=28`,
  comedyMovies: `discover/movie?api_key=${API}&with_genres=35`,
  horrorMovies: `discover/movie?api_key=${API}&with_genres=27`,
  romanticMovies: `discover/movie?api_key=${API}&with_genres=10749`,
  documentryMovies: `discover/movie?api_key=${API}&with_genres=99`,
};

export const genres = {
  trending: "Trending",
  netflixOriginals: "NETFLIX ORIGINAL",
  topRatedMoves: `Top Rated Movies`,
  actionMovies: `Action Movies`,
  comedyMovies: `Comedy Movies`,
  horrorMovies: `Horror Movies`,
  romanticMovies: `Romantic Movies`,
  documentryMovies: `Documentary Movies`,
};
