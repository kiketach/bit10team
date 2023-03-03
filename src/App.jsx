import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Homepage } from "./Components/Homepage";
import { Interactua } from "./Components/Interactua";
import { TodoList } from "./Components/TodoList";
import { TiposCafe } from "./Components/TiposCafe";

function App() {
  return (
    <>
      <div className="container text-center p-3 mb-2 bg-info text-light">
        <h1>Coffe Dev's</h1>
      </div>
      <div className="container">
        <BrowserRouter>
          <nav className="py-4 text-center">
            <Link className="px-3" to="/homepage">
              Inicio
            </Link>
            <Link className="px-3" to="/TiposCafe">
              Tipos de Bebidas con Café
            </Link>
            <Link className="px-3" to="/interactua">
              Fotos Divertidas del Café
            </Link>
            <Link className="px-3" to="/TodoList">
              Cual es tu Café Favorito?
            </Link>
          </nav>
          <hr />
          <Routes>
            <Route path="/homepage" element={<Homepage />}></Route>
            <Route path="/interactua" element={<Interactua />}></Route>
            <Route path="/todolist" element={<TodoList />}></Route>
            <Route path="/tiposcafe" element={<TiposCafe />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;