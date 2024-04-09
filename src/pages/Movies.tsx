import { useSelector } from 'react-redux';
import { MoviesStateType } from '../types';

export default function Movies() {
  const movies = useSelector((state: MoviesStateType) => state.movies);
  console.log(movies);

  return (
    <div>
      <h1>Movies</h1>
    </div>
  );
}
