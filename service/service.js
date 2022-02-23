import axios from 'axios';

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = 'api_key=b675357cf6acffd71700477320b61071';

// https://api.themoviedb.org/3/movie/popular?api_key=b675357cf6acffd71700477320b61071
export const getPopularMovies = async () => {
  const {data} = await axios.get(`${apiUrl}/movie/popular?${apiKey}`);
  return data.results;
};
// https://api.themoviedb.org/3/movie/upcoming?api_key=b675357cf6acffd71700477320b61071
export const getUpcomingMovies = async () => {
  const {data} = await axios.get(`${apiUrl}/movie/upcoming?${apiKey}`);
  return data.results;
};

// https://api.themoviedb.org/3/tv/popular?api_key=b675357cf6acffd71700477320b61071
export const getPopularTv = async () => {
  const {data} = await axios.get(`${apiUrl}/tv/popular?${apiKey}`);
  return data.results;
};

// https://api.themoviedb.org/3/discover/movie?api_key=b675357cf6acffd71700477320b61071&with_genres=10751
export const getFamilyMovies = async () => {
  const {data} = await axios.get(
    `${apiUrl}/discover/movie?${apiKey}&with_genres=10751`,
  );
  return data.results;
};

// https://api.themoviedb.org/3/discover/movie?api_key=b675357cf6acffd71700477320b61071&with_genres=99
export const getDocumentaryMovies = async () => {
  const {data} = await axios.get(
    `${apiUrl}/discover/movie?${apiKey}&with_genres=99`,
  );
  return data.results;
};

// https://api.themoviedb.org/3/movie/12?api_key=b675357cf6acffd71700477320b61071
export const getMovie = async id => {
  const {data} = await axios.get(`${apiUrl}/movie/${id}?${apiKey}`);
  return data;
};
