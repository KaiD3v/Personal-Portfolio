import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes
import Navbar from "./components/Navbar/Navbar";
import HamburguerMenu from "./components/Menu/HamburguerMenu";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

// Páginas
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Project from "./pages/Project/Project";
import Skills from "./pages/Skills/Skills";

function App() {
  const [menuState, setMenuState] = useState(false)
  
  return (
    <div className="App">
        <Router>
          <Navbar isActive={menuState} setMenuState={setMenuState}/>
          <HamburguerMenu isActive={menuState}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<Project />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
