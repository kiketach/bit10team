import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Homepage } from "./Components/Homepage";

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
              Interactua con Nosotros
            </Link>
          </nav>
          <hr />
          <Routes>
            <Route path="/homepage" element={<Homepage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;