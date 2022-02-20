import axios from 'axios';

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = 'b675357cf6acffd71700477320b61071';

export const getPopularMovies = async () => {
  const resp = await axios.get(`${apiUrl}/movie/popular?${apiKey}`);
  return resp.data.results;
};

export const getUpcomingMovies = async () => {
  const resp = await axios.get(`${apiUrl}/movie/upcoming?${apiKey}`);
  return resp.data.results;
};

export const getPopularTv = async () => {
  const resp = await axios.get(`${apiUrl}/tv/popular?${apiKey}`);
  return resp.data.results;
};
