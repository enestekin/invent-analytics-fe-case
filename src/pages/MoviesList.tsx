import './MoviesList.scss';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import { Grid } from 'semantic-ui-react';
import MovieListItem from '../components/MoviesListItem';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMovies } from '../store/moviesSlice';

const URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}`;

export default function MoviesList() {
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const { movies } = useSelector((state: IRootState) => state.movies);
  const {
    filters: { searchString },
  } = useSelector((state: IRootState) => state.movies);

  useEffect(() => {
    const getMoviesData = async () => {
      const response = await fetch(`${URL}&s=${searchString}`);
      const data = await response.json();
      if (data.Search) {
        dispatch(setMovies(data.Search));
        setError('');
      } else {
        setError(data.Error);
      }
    };
    getMoviesData();
  }, [searchString, dispatch]);

  return (
    <>
      {movies?.length > 0 && (
        <div className='movies-list'>
          <Grid textAlign='center'>
            {movies.map((movie) => {
              return <MovieListItem key={movie.imdbID} movie={movie} />;
            })}
          </Grid>
        </div>
      )}
      {movies?.length === 0 && !error && <p>Loading</p>}
      {error && <p>{error}</p>}
    </>
  );
}
