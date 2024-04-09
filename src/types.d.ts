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
