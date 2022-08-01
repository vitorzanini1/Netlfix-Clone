import React from "react"
import MovieInterface from '../../../models/interfaces/Movie'
import { useNavigate } from 'react-router-dom'
import Title from '../../atoms/Title'
import Button from 'react-bootstrap/Button';

interface HighlightMovieInterface {
  movie: MovieInterface
}

function HighlightMovie({ movie }: HighlightMovieInterface) {
  const navigate = useNavigate()

  function sendToMovie(id: number) {
    navigate('/filme/' + id)
  }

  return (
    <div style={{
      backgroundImage: `url(${movie.backdrop_path})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '94vh',
    }}>
      <div style={{
        background: 'linear-gradient(to top, #111 10%, transparent 90%',
        height: 'inherit',
      }}>
        <div style={{
          backgroundImage: 'linear-gradient(to right, #111 20%, transparent 80%',
          height: 'inherit',
        }}>
          <div className="container-filme-destaque">
            <Title className="titulo-filme-destaque">{movie.title}</Title>
            <h2 className="descricao-filme-destaque">{movie.overview}</h2>
            <br />
                <div className="botoes-destaque">
                <Button variant="primary" size="lg" active>
                  Assistir
                </Button>{' '}
                <Button variant="secondary" size="lg" active>
                  Informações
                </Button>
                </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HighlightMovie

