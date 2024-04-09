import './MovieDetail.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MovieType } from '../types';

const URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}`;

export default function MovieDetail() {
  const [movie, setMovie] = useState<MovieType>();
  const { id } = useParams();

  useEffect(() => {
    fetch(`${URL}&i=${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  return (
    <>
      {movie && (
        <div className='movie-detail'>
          <div>
            <img src={movie.Poster} alt='movie img' />
          </div>
          <div>
            <p>
              <b>Title:</b> {movie.Title}
            </p>
            <p>
              <b>Director:</b> {movie.Director}
            </p>
            <p>
              <b>Actors:</b> {movie.Actors}
            </p>
            <p>
              <b>Genre:</b> {movie.Genre}
            </p>
            <p>
              <b>Imdb Rating:</b> {movie.imdbRating}
            </p>
            <p>
              <b>Year:</b> {movie.Year}
            </p>
            <p>
              <b>Runtime:</b> {movie.Runtime}
            </p>
            <p>
              <b>Plot:</b> {movie.Plot}
            </p>
          </div>
        </div>
      )}
      {!movie && <p>Loading...</p>}
    </>
  );
}
