import { Container, Button } from "react-bootstrap"
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube
} from "react-icons/fa"

function Footer() {
  return (
    <footer className="text-secondary py-5">
      <Container className="footer-container">
        <div className="d-flex gap-4 text-white fs-5 mb-3">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
         </div>

        <div className="row small g-3">
        <div className="col-6 col-md-3">
        <a href="#">Audio and Subtitles</a>
        </div>
        <div className="col-6 col-md-3">
        <a href="#">Audio Description</a>
        </div>
        <div className="col-6 col-md-3">
        <a href="#">Help Center</a>
        </div>
        <div className="col-6 col-md-3">
        <a href="#">Gift Cards</a>
        </div>
        <div className="col-6 col-md-3">
        <a href="#">Media Center</a>
        </div>
        <div className="col-6 col-md-3">
        <a href="#">Investor Relations</a>
        </div>
        <div className="col-6 col-md-3">
        <a href="#">Jobs</a>
        </div>
        <div className="col-6 col-md-3">
        <a href="#">Terms of Use</a>
        </div>
        <div className="col-6 col-md-3">
        <a href="#">Privacy</a>
        </div>
        <div className="col-6 col-md-3">
        <a href="#">Legal Notices</a>
        </div>
        <div className="col-6 col-md-3">
        <a href="#">Cookie Preferences</a>
        </div>
        <div className="col-6 col-md-3">
        <a href="#">Corporate Information</a>
        </div>
        <div className="col-6 col-md-3">
        <a href="#">Contact Us</a>
        </div>
          </div>

        <Button variant="outline-secondary" size="sm" className="rounded-0 mt-4">
          Service Code
        </Button>

        <p className="small mt-3">© 1997-2019 Netflix, Inc.</p>
      </Container>
    </footer>
  )
}

export default Footer