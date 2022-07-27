import React, { useEffect, useState } from 'react'
import * as ApiTmbService from '../../services/apiTmdb'
import List from '../../components/molecules/List'
import MovieInterface from '../../models/interfaces/Movie'
import HighlightMovie from '../../components/molecules/HighlightMovie'

function Catalog() {
  const [popularMovies, setPopularMovies] = useState<MovieInterface[]>([])
  const [topRatedMovies, setTopRatedMovies] = useState<MovieInterface[]>([])
  const [highlightMovie, setHighlightMovie] = useState<MovieInterface>()


  const imgUrl = 'https://image.tmdb.org/t/p/w300'
  const originalImgUrl = 'https://image.tmdb.org/t/p/original'

  useEffect(() => {
    function searchPopular() {
      ApiTmbService.getPolular()
        .then((response) => {
          const movieImgs = response.results.map((result) => {
            return {
              backdrop_path: result.backdrop_path,
              poster_path: imgUrl + result.poster_path,
              title: result.title,
              id: result.id,
            }
          })
          setPopularMovies(movieImgs)
        })
    }

    function searchTopRated() {
      ApiTmbService.getTopRated()
        .then((response) => {
          const movieImgs = response.results.map((result) => {
            return {
              backdrop_path: result.backdrop_path,
              poster_path: imgUrl + result.poster_path,
              title: result.title,
              id: result.id,
            }
          })
          setTopRatedMovies(movieImgs)
        })
    }

    searchPopular()
    searchTopRated()
  }, [])

  useEffect(() => {
    if (!popularMovies.length) return

    const movie = popularMovies[Math.floor(Math.random() * popularMovies.length)]
    movie.backdrop_path = originalImgUrl + movie.backdrop_path
    movie.poster_path = imgUrl + movie.poster_path

    setHighlightMovie(movie)

  }, [popularMovies])

  return <>
    {highlightMovie && (<HighlightMovie movie={highlightMovie} />)}
    <List title='Populares' moviesImg={popularMovies} />
    <List title='Top Assistidos' moviesImg={topRatedMovies} />
  </>
}

export default Catalog