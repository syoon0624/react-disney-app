import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import './Row.css';

const Row = ({ title, id, fetchUrl }) => {
  console.log(document.getElementById(id).scrollLeft);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    const response = await axios.get(fetchUrl);
    console.log('response', response);
    setMovies(response.data.results);
  };

  return (
    <div>
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          <span className="arrow">{'<'}</span>
        </div>
        <div id={id} className="row__posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              className="row__poster"
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.name}
            />
          ))}
        </div>
        <div className="slider__arrow-right">
          <span className="arrow">{'>'}</span>
        </div>
      </div>
    </div>
  );
};

export default Row;
