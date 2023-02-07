import React, { useEffect, useState } from "react";
import { movies } from "../functions/functions";

const Inicio = () => {
  const [unicMovies, setMovies] = useState(null);
  const person28 =
    "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/doctor-strange-in-the-multiverse-of-madness.jpg";
  const person29 =
    "https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/thor-love-and-thunder.jpg";
  useEffect(()=>{
    movies(setMovies)
  }, [])
  return (
    <>
    
      {unicMovies !== null
        ? unicMovies.map((movie) =>
            movie.id === 28 ? (
              <div key={movie.id}>
                <a href={`/pelicula/${movie.id}`}>{movie.title}</a>
                <img src={person28} alt={movie.title} />
              </div>
            ) : movie.id === 29 ? (
              <div key={movie.id}>
                <a href={`/pelicula/${movie.id}`}>{movie.title}</a>
                <img src={person29} alt={movie.title} />
              </div>
            ) : (
              <div key={movie.id}>
                <a href={`/pelicula/${movie.id}`}>{movie.title}</a>
                <img src={movie.cover_url} alt={movie.title} />
              </div>
            )
          )
        : "No hay peliculas"}
    </>
  );
};

export default Inicio;
