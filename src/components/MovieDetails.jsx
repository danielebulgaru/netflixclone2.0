import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Container, Row, Col, Card } from "react-bootstrap"

function MovieDetails() {
  const { movieId } = useParams()
  const [movie, setMovie] = useState(null)
  const [comments, setComments] = useState([])

  useEffect(() => {
    fetch("https://www.omdbapi.com/?apikey=c3ddce52&i=" + movieId)
      .then((response) => response.json())
      .then((movieData) => {
        setMovie(movieData)
      })
      .catch((error) => {
        console.log("Errore dettagli film:", error)
      })

    fetch("https://striveschool-api.herokuapp.com/api/comments/" + movieId, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWZiMjdmNTY1ODQ3YjAwMTVjODE2YTQiLCJpYXQiOjE3NzgwNjc0NDUsImV4cCI6MTc3OTI3NzA0NX0.tLHTCPGW-RVKR4S_rz1NLoVYby8hD7MFwt7aHZc_hjs"
      }
    })
      .then((response) => response.json())
      .then((commentsData) => {
        setComments(commentsData)
      })
      .catch((error) => {
        console.log("Errore commenti:", error)
      })
  }, [movieId])

  return (
    <main className="bg-netflix text-white min-vh-100 py-5">
      <Container>
        {movie && (
          <>
            <Row className="g-4">
              <Col md={4}>
                <img src={movie.Poster} alt={movie.Title} className="img-fluid" />
              </Col>

              <Col md={8}>
                <h1>{movie.Title}</h1>
                <p className="text-secondary">{movie.Year}</p>
                <p>{movie.Plot}</p>

                <p>
                  <strong>Genre:</strong> {movie.Genre}
                </p>
                <p>
                  <strong>Director:</strong> {movie.Director}
                </p>
                <p>
                  <strong>Actors:</strong> {movie.Actors}
                </p>
                <p>
                  <strong>Runtime:</strong> {movie.Runtime}
                </p>
                <p>
                  <strong>IMDB Rating:</strong> {movie.imdbRating}
                </p>
              </Col>
            </Row>

            <section className="mt-5">
              <h3>Comments</h3>

              {comments.length > 0 ? (
                comments.map((comment) => (
                  <Card key={comment._id} className="bg-dark text-white mb-3">
                    <Card.Body>
                      <Card.Text>{comment.comment}</Card.Text>
                      <Card.Text className="text-secondary small">
                        Rate: {comment.rate}/5
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ))
              ) : (
                <p className="text-secondary">No comments available.</p>
              )}
            </section>
          </>
        )}
      </Container>
    </main>
  )
}

export default MovieDetails