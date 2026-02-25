// import axios from "axios";
// import { Movie } from "../types/movie";
// // import type { FetchMoviesResponse } from "../types/movie";

// export const fetchMovies = async (
//   query: string,
//   page: number
// ): Promise<FetchMoviesResponse> => {
//   const response = await axios.get<FetchMoviesResponse>(
//     "https://api.themoviedb.org/3/search/movie",
//     {
//       params: {
//         query,
//         page,
//       },
//       headers: {
//         Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
//       },
//     }
//   );

//   return response.data;
// };

import axios from "axios";
import type { Movie } from "../types/movie";

interface FetchMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export const fetchMovies = async (
  query: string,
  page: number
): Promise<FetchMoviesResponse> => {
  const response = await axios.get<FetchMoviesResponse>(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: {
        query,
        page,
      },
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      },
    }
  );

  return response.data;
};