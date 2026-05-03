import { useEffect, useRef, useState } from "react"
import { Button } from "react-bootstrap"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import MovieCard from "./MovieCard.jsx"

function MovieGallery({ title, searchQuery }) {
  const [films, setFilms] = useState([])
  const carouselRef = useRef(null)

  useEffect(() => {
    fetch("https://www.omdbapi.com/?apikey=c3ddce52&s=" + searchQuery)
      .then((response) => response.json())
      .then((data) => {
        console.log("Dati OMDB:", data)

        if (data.Search) {
          const filmsWithImage = data.Search.filter((film) => {
            return film.Poster && film.Poster.startsWith("http")
          })

          setFilms(filmsWithImage)
        }
      })
      .catch((error) => {
        console.log("Errore API:", error)
      })
  }, [searchQuery])

  function scrollLeft() {
    carouselRef.current.scrollLeft -= 500
  }

  function scrollRight() {
    carouselRef.current.scrollLeft += 500
  }

  return (
    <section className="mb-5">
      <h4 className="fw-bold mb-3">{title}</h4>

      <div className="position-relative">
        <Button
          variant="dark"
          className="carousel-button carousel-button-left"
          onClick={scrollLeft}
        >
          <FaChevronLeft />
        </Button>

        <div ref={carouselRef} className="d-flex gap-2 overflow-auto pb-3 movie-carousel">
          {films.map((film) => (
            <MovieCard key={film.imdbID} film={film} />
          ))}
        </div>

        <Button
          variant="dark"
          className="carousel-button carousel-button-right"
          onClick={scrollRight}
        >
          <FaChevronRight />
        </Button>
      </div>
    </section>
  )
}

export default MovieGallery