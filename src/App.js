import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import Navbar from "./components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Skills from "./components/pages/Skills";
import Experiences from "./components/pages/Experiences";
import Portfolios from "./components/pages/Portfolios";
import Educations from "./components/pages/Educations";
import Home from "./components/pages/Home";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/About" element={<About />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/experiences" element={<Experiences />}></Route>
        <Route path="/portfolios" element={<Portfolios />}></Route>
        <Route path="/educations" element={<Educations />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
