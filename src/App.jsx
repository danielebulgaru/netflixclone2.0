import { Routes, Route, useLocation,} from "react-router-dom"
import { Container, Dropdown, ButtonGroup, Button } from "react-bootstrap"
import MyNavbar from "./components/MyNavbar.jsx"
import MovieGallery from "./components/MovieGallery.jsx"
import Footer from "./components/Footer.jsx"
import ProfilePage from "./components/ProfilePage.jsx"
import SettingsPage from "./components/SettingsPage.jsx"
import TVShows from "./components/TVShows.jsx"
import MovieDetails from "./components/MovieDetails.jsx"

function HomePage() {
  return (
    <main className="bg-netflix text-white min-vh-100">
      <Container fluid className="px-5">
        <div className="d-flex align-items-center gap-4 py-4">
          <h1 className="fw-bold m-0">TV Shows</h1>

          <Dropdown>
  <Dropdown.Toggle variant="dark" className="border border-light rounded-0 px-3 py-1">
    Genres
  </Dropdown.Toggle>

  <Dropdown.Menu variant="dark" className="mt-2">
    <Dropdown.Item href="#">Action</Dropdown.Item>
    <Dropdown.Item href="#">Fantasy</Dropdown.Item>
    <Dropdown.Item href="#">Drama</Dropdown.Item>
    <Dropdown.Item href="#">Horror</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

          <ButtonGroup className="ms-auto d-none d-md-flex">
            <Button variant="outline-secondary" size="sm">☰</Button>
            <Button variant="outline-secondary" size="sm">▦</Button>
          </ButtonGroup>
        </div>

        <MovieGallery title="Trending Now" searchQuery="harry potter" />
        <MovieGallery title="Watch It Again" searchQuery="lord of the rings" />
        <MovieGallery title="New Releases" searchQuery="star wars" />
      </Container>

      <Footer />
    </main>
  )
}

function App() {
  const location = useLocation()

  return (
    <>
      {location.pathname !== "/profile" && <MyNavbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tv-shows" element={<TVShows />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/movie-details/:movieId" element={<MovieDetails />} />
      </Routes>
    </>
  )
}

export default App