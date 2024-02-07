import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes
import Navbar from "./components/Navbar/Navbar";
import HamburguerMenu from "./components/Menu/HamburguerMenu";
import { ButtonProvider } from "./hooks/useMenuContext";
import Footer from "./components/Footer/Footer";

// Páginas
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Project from "./pages/Project/Project";
import Skills from "./pages/Skills/Skills";
import Skill from "./pages/Skill/Skill";

function App() {
  return (
    <div className="App">
      <ButtonProvider>
        <Router>
          <Navbar />
          <HamburguerMenu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<Project />} />
            <Route path="/skills" element={<Skills />} />
            <Route path={"/skill/:id"} element={<Skill />} />
          </Routes>

        </Router>
      </ButtonProvider>
    </div>
  );
}

export default App;
