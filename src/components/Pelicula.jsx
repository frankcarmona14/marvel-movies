import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movie } from "../functions/functions";

const Pelicula = () => {
  const params = useParams();
  const [unicMovie, setMovie] = useState(null);

  useEffect(() => {
    movie(params.id, setMovie);
  }, []);

  return (
    <>
      {unicMovie !== null ? (
        <div>
          <h2>Pelicula {params.id}</h2>
          <p>con el nombre {unicMovie.title}</p>
          <img src={unicMovie.cover_url} alt={unicMovie.title} />
        </div>
      ) : (
        "No hay pelicula"
      )}
    </>
  );
};

export default Pelicula;
