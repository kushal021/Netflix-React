const API_KEY = "b44974c8ad6dd93fadd07763b36ab312";

const request = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchDocumentariesMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  fetchHorroMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
};

export default request;
