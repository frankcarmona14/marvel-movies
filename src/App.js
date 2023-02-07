import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Pelicula from "./components/Pelicula"

function App() {
  return (
      <section className="container-md">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Inicio></Inicio>}></Route>
            <Route
              path="/pelicula/:id"
              element={<Pelicula></Pelicula>}
            ></Route>
          </Routes>
        </BrowserRouter>
      </section>
  );
}

export default App;
