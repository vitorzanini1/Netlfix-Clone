export default interface MovieInterface {
  backdrop_path: string | null
  poster_path: string | null
  title: string
  id: number
  videos?: {
    results: VideoInterface[]
  }
}

export interface VideoInterface {
  key: string
}

export interface ResultsInterface {
  backdrop_path: string | null
  poster_path: string | null
  title: string
  id: number
}