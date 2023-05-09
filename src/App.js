import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
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
      <header className="header" style={{"padding":"2% 2%", paddingTop:'0', paddingBottom:'0',"display":"flex","justifyContent":"space-between","backgroundColor":"#061a40", boxShadow:'0px 0px 8px 0px rgba(0,0,0,0.2)' , borderRadius:'0', zIndex:'7', position:'fixed', top:'0', width:'100%'}}>
        <div style={{"margin":".6em 0","display":"inline-block"}}>
          <h1 style={{"fontSize":"2rem","fontWeight":600}} className="navbar-brand">
            <NavLink to='/'  style={{"textDecoration":"none","color":"#FCF7F8"}}>Road Health Monitoring</NavLink>
          </h1>
        </div>
        <div style={{"color":"#FCF7F8", marginTop:'2%', fontSize: "1.25rem"}}>
          <NavLink to='/' style={{"color":"#FCF7F8", textDecoration: 'none'}}>About</NavLink>
          <NavLink to='/dashboard' style={{"color":"#FCF7F8", paddingLeft:'4rem', marginRight:'2rem', textDecoration: 'none'}}>Dashboard</NavLink>
        </div>
      </header>
      <Routes>
        <Route path="/dashboard" element={<Nodes />} />
        <Route path="/" element={<About />} />
        <Route path="/:id" element={<Plot />} />
      </Routes>
    </Router>
  );
}

export default App;
