import React, { useEffect, useState } from 'react'
import * as ApiTmbService from '../../services/apiTmdb'
import Title from '../../components/atoms/Title'
import List from '../../components/molecules/List'

function Catalog() {
  const [popularMovies, setPopularMovies] = useState<string[]>([])

  const imgUrl = 'https://image.tmdb.org/t/p/w300'

  useEffect(() => {
    ApiTmbService.getPolular()
      .then((response) => {
        const movieImgs = response.results.map((result: any) => {
          return imgUrl + result.poster_path
        })
        console.log(movieImgs)
        setPopularMovies(movieImgs)
      })
  }, [])

  return <>
    <Title>Catalogo</Title>
    <List moviesImg={popularMovies} />
  </>
}

export default Catalog