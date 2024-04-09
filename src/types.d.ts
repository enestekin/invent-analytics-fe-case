export type MoviesStateType = {
  movies: {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
  }[];
  activePage: number;
  filters: {
    searchString: string;
    releaseYear: string;
    type: string;
  };
};

export type MovieType = {
  Title: string;
  Director: string;
  Actors: string;
  Genre: string;
  imdbRating: string;
  Year: string;
  Runtime: string;
  Plot: string;
  Poster: string;
};
