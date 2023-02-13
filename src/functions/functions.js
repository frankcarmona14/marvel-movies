import axios from "axios";

const movies = async (state) => {
  const peticion = await axios.get(
    "https://mcuapi.herokuapp.com/api/v1/movies?limit=32"
  );
  state(peticion.data.data);
};

const movie = async (id, state) => {
  const peticion = await axios.get(
    `https://mcuapi.herokuapp.com/api/v1/movies/${id}`
  );
  state(peticion.data);
};

export { movies, movie };
