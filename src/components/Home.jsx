import { Container, Dropdown } from "react-bootstrap"
import MovieGallery from "./components/MovieGallery"
import Footer from "./components/Footer"

const Home = () => {
  return (
    <main className="home-page">
      <Container fluid className="px-5">
        <div className="d-flex align-items-center gap-4 my-4">
          <h1 className="text-white">TV Shows</h1>

          <Dropdown>
            <Dropdown.Toggle variant="outline-light" size="sm">
              Genres
            </Dropdown.Toggle>
            <Dropdown.Menu variant="dark">
              <Dropdown.Item>Action</Dropdown.Item>
              <Dropdown.Item>Fantasy</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <MovieGallery title="Harry Potter" searchQuery="harry potter" />
        <MovieGallery title="Lord of the Rings" searchQuery="lord of the rings" />
        <MovieGallery title="Star Wars" searchQuery="star wars" />
      </Container>

      <Footer />
    </main>
  )
}

export default Home