import React, { useEffect, useState } from "react";
import { movies } from "../functions/functions";
import { Row, Col, Card, Button } from "react-bootstrap/";

const Inicio = () => {
  const [unicMovies, setMovies] = useState(null);

  useEffect(() => {
    movies(setMovies);
  }, []);
  return (
    <>
      <section className="container py-5">
        <Row xs={1} md={2} lg={3} className="g-4">
          {unicMovies !== null
            ? unicMovies.map((movie) => (
                <Col key={movie.id}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src={movie.cover_url}
                      alt={movie.title}
                    />
                    <Card.Body>
                      <Card.Title>{movie.title}</Card.Title>
                      <Card.Text>
                        Fecha de salida: {movie.release_date}
                      </Card.Text>
                      <div className="d-grid gap-2">
                        <Button
                          href={`/pelicula/${movie.id}`}
                          variant="secondary"
                          size="lg"
                          className="stretched-link"
                        >
                          Ver mas
                        </Button>
                      </div>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        Dirigida por: {movie.directed_by}
                      </small>
                    </Card.Footer>
                  </Card>
                </Col>
              ))
            : "No hay peliculas"}
        </Row>
      </section>
    </>
  );
};

export default Inicio;
