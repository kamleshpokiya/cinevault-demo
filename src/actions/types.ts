export interface Movie {
  id: string;
  title: string;
  year: number;
  image: string;
  userId: string | null;
  createdAt: string | Date; // Date string
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
  totalCount: number;
}

export type MoviesResponse = successMoviesResponse | errorMoviesResponse;

interface successMoviesResponse {
  status: true;
  movies: Movie[];
  pagination: Pagination;
}

interface errorMoviesResponse {
  status: false;
  error: string;
}
