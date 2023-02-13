import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Pelicula.css";
import { movie } from "../functions/functions";
import {
  Container,
  Row,
  Col,
  Button,
  Carousel,
  Figure,
} from "react-bootstrap/";

const Pelicula = () => {
  const params = useParams();
  const [unicMovie, setMovie] = useState(null);

  useEffect(() => {
    movie(params.id, setMovie);
  }, [params.id]);

  return (
    <>
      {unicMovie !== null ? (
        <Container className="movie">
          <Row className="py-5">
            <Col xs={12} md={6} >
              <Figure className="figure">
                <Figure.Image
                  width={450}
                  height={"auto"}
                  alt={unicMovie.title}
                  src={unicMovie.cover_url}
                />
              </Figure>
            </Col>
            <Col xs={12} md={6}>
              <h1>{unicMovie.title}</h1>
              <p>{unicMovie.overview}</p>
              <span>Duración: {unicMovie.duration}</span>
              <br></br>
              <span>Saga: {unicMovie.saga}</span>
              <br></br>
              <span>Fecha de Estreno: {unicMovie.release_date}</span>
              <br></br>
              <span>Fase: {unicMovie.phase}</span>
              <br></br>
              <span>Escenas Postcreditos: {unicMovie.post_credit_scenes}</span>
              <br></br>
              <span>Director: {unicMovie.directed_by}</span>
              <br></br>
            </Col>
          </Row>
          <Row>
            <h1>Peliculas Relacionadas</h1>
            <Col className="py-5">
              <Carousel fade interval={2000}>
                {unicMovie.related_movies.map((relatedMovie) =>
                  relatedMovie.id !== 3 && relatedMovie.id !== 28 ? (
                    <Carousel.Item
                      className="carousel-item"
                      key={relatedMovie.id}
                    >
                      <Figure className="figure">
                        <Figure.Image
                          width={350}
                          height={"auto"}
                          alt={relatedMovie.title}
                          src={relatedMovie.cover_url}
                        />
                      </Figure>

                      <Carousel.Caption>
                        <h3>{relatedMovie.title}</h3>
                        <p>{`${relatedMovie.overview.substr(0, 200)}...`}</p>
                        <Button
                          href={`/pelicula/${relatedMovie.id}`}
                          variant="primary"
                          size="lg"
                          className="stretched-link"
                        >
                          Ver mas
                        </Button>
                      </Carousel.Caption>
                    </Carousel.Item>
                  ) : (
                    ""
                  )
                )}
              </Carousel>
            </Col>
          </Row>
        </Container>
      ) : (
        "No hay pelicula"
      )}
    </>
  );
};

export default Pelicula;
