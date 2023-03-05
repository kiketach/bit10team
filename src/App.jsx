import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Homepage } from "./Components/Homepage";
import { Interactua } from "./Components/Interactua";
import { TodoList } from "./Components/TodoList";
import { TiposCafe } from "./Components/TiposCafe";

function App() {
  return (
    <>
      <div className="container-fluid text-center p-3 mb-2 bg-info text-light">
        <h1>Coffe Dev's</h1>
      </div>
      <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-black" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" to="/TiposCafe">
                  Tipos de Bebidas con Café
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" to="/interactua">
                  Fotos Divertidas del Café
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" to="/TodoList">
                  Cual es tu Café Favorito?
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/interactua" element={<Interactua />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/tiposcafe" element={<TiposCafe />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
