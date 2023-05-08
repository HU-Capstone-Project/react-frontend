import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import Team from "./views/Team";
import Nodes from "./views/Nodes";
import About from "./views/About";
import { Plot } from "./views/Plot";

function App() {
  const linkStyle = {
    textDecoration: "none",
    color: "#FCF7F8",
    marginLeft: "1em",
  };

  return (
    <Router>
      <header
        className="header"
        style={{
          padding: "2% 2%",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "white",
          boxShadow:''
        }}
      >
        <div
          style={{
            fontSize: "1.5em",
            margin: ".6em 0",
            display: "inline-block",
          }}
        >
          <h1
            style={{ fontSize: "1.75rem", fontWeight: 600 }}
            className="navbar-brand"
          >
            <Link to="/" style={{ textDecoration: "none", color: "#FCF7F8" }}>
              Road Health Monitoring
            </Link>
          </h1>
        </div>
        <nav>
          <Link to="/home" style={linkStyle}>
            Home
          </Link>
          <Link to="/about" style={linkStyle}>
            About
          </Link>
          <Link to="/team" style={linkStyle}>
            Team
          </Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Nodes />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:id" element={<Plot />} />
      </Routes>
    </Router>
  );
}

export default App;
