import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import MovieModal from './MovieModal';
import './Row.css';

const Row = ({ title, id, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});

  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    const response = await axios.get(fetchUrl);
    console.log('response', response);
    setMovies(response.data.results);
  };

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
  };

  return (
    <div>
      <h2>{title}</h2>
      <div className="slider">
        <div
          className="slider__arrow-left"
          onClick={() => {
            document.getElementById(id).scrollLeft =
              document.getElementById(id).scrollLeft - (window.innerWidth - 80);
          }}
        >
          <span className="arrow">{'<'}</span>
        </div>
        <div id={id} className="row__posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              className="row__poster"
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.name}
              onClick={() => handleClick(movie)}
            />
          ))}
        </div>
        <div
          className="slider__arrow-right"
          onClick={() => {
            document.getElementById(id).scrollLeft =
              document.getElementById(id).scrollLeft + (window.innerWidth - 80);
          }}
        >
          <span className="arrow">{'>'}</span>
        </div>
      </div>

      {modalOpen ? (
        <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
      ) : null}
    </div>
  );
};

export default Row;
