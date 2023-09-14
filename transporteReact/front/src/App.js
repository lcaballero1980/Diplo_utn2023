import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

import Header from "./componentes/layout/Header";
import Nav from "./componentes/layout/Nav";
import Footer from "./componentes/layout/Footer";

import Contacto from "./componentes/paginas/Contacto";
import Home from "./componentes/paginas/Home";
import Nosotros from "./componentes/paginas/Nosotros";
import Novedades from "./componentes/paginas/Novedades";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/nosotros" exact element={<Nosotros />} />
          <Route path="/novedades" exact element={<Novedades />} />
          <Route path="/contacto" exact element={<Contacto />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
