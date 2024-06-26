import './MoviesList.scss';
import FilterBar from '../components/FilterBar';
import MovieListItem from '../components/MoviesListItem';
import Loader from '../components/Loader';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import { Grid } from 'semantic-ui-react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMovies } from '../store/moviesSlice';
import PaginationComponent from '../components/Pagination';

const URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}`;

export default function MoviesList() {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  const { movies, totalPages, activePage } = useSelector(
    (state: IRootState) => state.movies
  );
  const {
    filters: { searchString, type, year },
  } = useSelector((state: IRootState) => state.movies);

  useEffect(() => {
    const getMoviesData = async () => {
      setIsLoading(true);
      const response = await fetch(
        `${URL}&s=${searchString}&type=${type}&y=${year}&page=${activePage}`
      );
      const data = await response.json();
      if (data.Search) {
        dispatch(setMovies(data));
        setError('');
      } else {
        dispatch(setMovies([]));
        setError(data.Error);
      }
      setIsLoading(false);
    };
    getMoviesData();
  }, [searchString, dispatch, type, year, activePage]);

  return (
    <>
      <FilterBar />
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        movies?.length > 0 && (
          <div className='movies-list'>
            <Grid textAlign='center'>
              {movies.map((movie) => {
                return <MovieListItem key={movie.imdbID} movie={movie} />;
              })}
            </Grid>
          </div>
        )
      )}

      {!isLoading && error && <p className='movies-list__error'>{error}</p>}
      {totalPages > 0 && (
        <div className='movies-list__pagination'>
          {<PaginationComponent totalPages={totalPages} />}
        </div>
      )}
    </>
  );
}
