import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import * as ApiTmbService from '../../services/apiTmdb'
import MovieInterface from "../../models/interfaces/Movie";
import VideoFrame from "../../components/atoms/VideoFrame";
import Header from "../../components/molecules/Header";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieInterface>()
  const [videoKey, setVideoKey] = useState<string>()

  const imgUrl = 'https://image.tmdb.org/t/p/w300'

  useEffect(() => {
    if (!id || movie) return
    ApiTmbService.getMovieDetails(+id)
      .then((response) => {
        setMovie(response)

        const video = response.videos && response.videos.results && response.videos.results[0]
        video && setVideoKey(video.key)
      })
  }, [id, movie])

  return <>
  <Header></Header>
    <div className="container-especifico">
      <h1 className="titulo-especifico">{movie && movie.title}</h1>
      <h2 className="descricao-especifico">{movie && movie.overview}</h2>
      {movie && movie.backdrop_path && (
        <img className="imagem-especifico" src={imgUrl + movie.backdrop_path} alt="" />
      )}
      <br />
      <h1 className="titulo-trailer">Trailer</h1>
      <div className="trailer-especifico">
      {videoKey && <VideoFrame  width="550" height="300" videoKey={videoKey + ''} />}
      </div>
    </div>
  </>
}

export default Movie