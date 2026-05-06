import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

function MovieCard({ film }) {
  return (
    <Link to={`/movie-details/${film.imdbID}`} className="text-decoration-none">
      <Card className="movie-card bg-black border-0 flex-shrink-0">
        <Card.Img
          src={film.Poster}
          alt={film.Title}
          className="w-100 h-100 object-fit-contain p-1"
        />
      </Card>
    </Link>
  )
}

export default MovieCard