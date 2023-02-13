import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Pelicula from "./components/Pelicula";
import Nav from "./components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/pelicula/:id" element={<Pelicula></Pelicula>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
