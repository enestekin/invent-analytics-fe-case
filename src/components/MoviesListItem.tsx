import { GridColumn } from 'semantic-ui-react';
import './MoviesListItem.scss';

interface MovieListItemProps {
  movie: {
    Title: string;
    Year: string;
    imdbID: string;
    Poster: string;
  };
}

export default function MovieListItem({ movie }: MovieListItemProps) {
  return (
    <GridColumn
      className='movieslist-item'
      mobile={10}
      tablet={6}
      computer={5}
      largeScreen={3}
      as='a'
      href={`/movies/${movie.imdbID}`}
    >
      <div
        className='movieslist-item__img'
        style={{ backgroundImage: `url(${movie.Poster})` }}
      ></div>
      <div>
        <p>
          <strong>Name:</strong> {movie.Title}
        </p>
        <p>
          <strong>Release Year:</strong> {movie.Year}
        </p>
        <p>
          <strong>Id:</strong> {movie.imdbID}
        </p>
      </div>
    </GridColumn>
  );
}
