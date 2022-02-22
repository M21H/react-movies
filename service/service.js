import axios from 'axios';

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = 'api_key=b675357cf6acffd71700477320b61071';

export const getPopularMovies = async () => {
  const {data} = await axios.get(`${apiUrl}/movie/popular?${apiKey}`);
  return data.results;
};

export const getUpcomingMovies = async () => {
  const {data} = await axios.get(`${apiUrl}/movie/upcoming?${apiKey}`);
  return data.results;
};

export const getPopularTv = async () => {
  const {data} = await axios.get(`${apiUrl}/tv/popular?${apiKey}`);
  return data.results;
};

export const getFamilyMovies = async () => {
  const {data} = await axios.get(
    `${apiUrl}/discover/movie?${apiKey}&with_genres=10751`,
  );
  return data.results;
};

export const getDocumentaryMovies = async () => {
  const {data} = await axios.get(
    `${apiUrl}/discover/movie?${apiKey}&with_genres=99`,
  );
  return data.results;
};
