import api from "../config/api";
import MovieInterface, { ResultsInterface } from "../models/interfaces/Movie";

const params = {
  api_key: process.env.REACT_APP_API_KEY,
  language: 'pt-BR',
}

interface PaginationInterface {
  page: number
  results: ResultsInterface[]
  total_results: number
  total_pages: number
}

async function getPolular() {
  return await api.get<PaginationInterface>('/movie/popular', { params })
      .then((response) => response.data)
}

async function getTopRated() {
  return await api.get<PaginationInterface>('/movie/top_rated', { params })
      .then((response) => response.data)
}

async function getMovieDetails(movieId: number) {
  const detailParams = { ...params, append_to_response: 'videos' }
  return await api.get<MovieInterface>('/movie/' + movieId, { params: detailParams })
      .then((response) => response.data)
}

export {
  getPolular,
  getTopRated,
  getMovieDetails
}