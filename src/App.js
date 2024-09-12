import "./App.css";
import Home from "./pages/home/Home";
import Nav from "./components/Nav/Nav";
import { HashRouter as Router, Routes, Route, Switch } from "react-router-dom";
import About from "./pages/about/About";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Nav
          links={[
            { text: "Home", link: "#/" },
            { text: "About me", link: "#/about-me" },
          ]}
        />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about-me" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
