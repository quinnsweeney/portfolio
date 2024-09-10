import "./App.css";
import Home from "./pages/home/Home";
import Nav from "./components/Nav/Nav";
import Resume from "./pages/resume/Resume";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about/About";

function App() {
  return (
    <Router>
      <Nav
        links={[
          { text: "Home", link: "/" },
          { text: "Resume", link: "/resume" },
          { text: "About me", link: "/about-me" },
        ]}
      />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about-me" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
