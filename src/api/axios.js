import axios from 'axios';
const { REACT_APP_API_KEY } = process.env;

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: REACT_APP_API_KEY,
    language: 'ko-KR',
  },
});

export default instance;
