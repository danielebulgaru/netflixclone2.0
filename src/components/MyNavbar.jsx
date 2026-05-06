import { Navbar, Nav, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FaSearch, FaBell } from "react-icons/fa"

function MyNavbar() {
  return (
    <Navbar expand="lg" variant="dark" className="bg-black px-4">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="cursor-pointer">
          <img src="/logo.png" alt="logo" height="50" />
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/tv-shows">TV Shows</Nav.Link>
            <Nav.Link>Movies</Nav.Link>
            <Nav.Link>Recently Added</Nav.Link>
            <Nav.Link>My List</Nav.Link>
            <Nav.Link as={Link} to="/settings">Account</Nav.Link>
          </Nav>

          <div className="d-flex align-items-center gap-3 text-white">
            <FaSearch />
            <span>KIDS</span>
            <FaBell />

            <Link to="/profile">
              <img
                src="/Daniele.jpeg"
                width="35"
                height="35"
                className="object-fit-cover cursor-pointer"
              />
            </Link>

            <span>▾</span>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar