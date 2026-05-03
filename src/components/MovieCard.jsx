import { Card } from "react-bootstrap"

function MovieCard({ film }) {
  return (
    <Card className="movie-card bg-black border-0 flex-shrink-0">
      <Card.Img
        src={film.Poster}
        alt={film.Title}
        className="w-100 h-100 object-fit-contain p-1"
      />
    </Card>
  )
}

export default MovieCard