import './MoviesList.scss';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import { Grid } from 'semantic-ui-react';
import MovieListItem from '../components/MoviesListItem';

export default function MoviesList() {
  const movies = useSelector((state: IRootState) => state.movies.movies);

  return (
    <div className='movies-list'>
      <Grid textAlign='center'>
        {movies.map((movie) => {
          return <MovieListItem key={movie.imdbID} movie={movie} />;
        })}
      </Grid>
    </div>
  );
}
