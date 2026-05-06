import { Container } from "react-bootstrap"
import MovieGallery from "./MovieGallery.jsx"
import Footer from "./Footer.jsx"

function TVShows() {
  return (
    <main className="bg-netflix text-white min-vh-100">
      <Container fluid className="px-5 py-4">
        <h1 className="fw-bold mb-4">TV Shows</h1>

        <MovieGallery title="Popular TV Shows" searchQuery="breaking bad" />
        <MovieGallery title="Fantasy Series" searchQuery="game of thrones" />
        <MovieGallery title="Sci-Fi Series" searchQuery="stranger things" />
      </Container>

      <Footer />
    </main>
  )
}

export default TVShows