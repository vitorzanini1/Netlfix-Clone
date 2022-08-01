import React, { useEffect, useState } from 'react'
import * as ApiTmbService from '../../services/apiTmdb'
import List from '../../components/molecules/List'
import MovieInterface, { SimpleMovieInterface } from '../../models/interfaces/Movie'
import HighlightMovie from '../../components/molecules/HighlightMovie'
import Header from '../../components/molecules/Header'




function Catalog() {
  const [popularMovies, setPopularMovies] = useState<SimpleMovieInterface[]>([])
  const [topRatedMovies, setTopRatedMovies] = useState<SimpleMovieInterface[]>([])
  const [upcomingMovies, setUpcoming] = useState<SimpleMovieInterface[]>([])
  const [nowPlayingMovies, setNowplaying] = useState<SimpleMovieInterface[]>([])
  const [highlightMovie, setHighlightMovie] = useState<MovieInterface>()


  const imgUrl = 'https://image.tmdb.org/t/p/w300'
  const originalImgUrl = 'https://image.tmdb.org/t/p/original'

  useEffect(() => {
    function searchPopular() {
      ApiTmbService.getPolular()
        .then((response) => {
          const movieImgs = response.results.map((result) => {
            return {
              ...result,
              backdrop_path: originalImgUrl + result.backdrop_path,
              poster_path: imgUrl + result.poster_path,
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
              ...result,
              backdrop_path: originalImgUrl + result.backdrop_path,
              poster_path: imgUrl + result.poster_path,
            }
          })
          setTopRatedMovies(movieImgs)
        })
    }
    function searchUpcoming() {
      ApiTmbService.getUpcoming()
        .then((response) => {
          const movieImgs = response.results.map((result) => {
            return {
              ...result,
              backdrop_path: originalImgUrl + result.backdrop_path,
              poster_path: imgUrl + result.poster_path,
            }
          })
          setUpcoming(movieImgs)
        })
    }
    function searchNowplaying() {
      ApiTmbService.getNowplaying()
        .then((response) => {
          const movieImgs = response.results.map((result) => {
            return {
              ...result,
              backdrop_path: originalImgUrl + result.backdrop_path,
              poster_path: imgUrl + result.poster_path,
            }
          })
          setNowplaying(movieImgs)
        })
    }


    searchPopular()
    searchTopRated()
    searchUpcoming()
    searchNowplaying()
  }, [])

  useEffect(() => {
    if (!popularMovies.length) return

    const movie = popularMovies[Math.floor(Math.random() * popularMovies.length)]

    setHighlightMovie(movie)

  }, [popularMovies])

  return <>
    <Header></Header>
    {highlightMovie && (<HighlightMovie movie={highlightMovie} />)}
    <List title='Populares' moviesImg={popularMovies} />
    <List title='Top Assistidos' moviesImg={topRatedMovies} />
    <List title='Próximos' moviesImg={upcomingMovies} />
    <List title='Assistindo Agora' moviesImg={nowPlayingMovies} />
  </>
}

export default Catalog