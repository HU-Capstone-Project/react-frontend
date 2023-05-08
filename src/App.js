import Nodes from "./views/Nodes";
import About from "./views/About";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import { Plot } from "./views/Plot";

function App() {
  return (
    <Router>
      <header className="header" style={{"padding":"2% 2%", paddingTop:'0', paddingBottom:'0',"display":"flex","justifyContent":"space-between","backgroundColor":"#061a40", boxShadow:'0px 0px 8px 0px rgba(0,0,0,0.2)' , borderRadius:'0', zIndex:'7', position:'fixed', top:'0', width:'100%'}}>
        <div style={{"fontSize":"1.5em","margin":".6em 0","display":"inline-block"}}>
          <h1 style={{"fontSize":"1.75rem","fontWeight":600}} className="navbar-brand">
            <a style={{"textDecoration":"none","color":"#FCF7F8"}}>Road Health Monitoring</a>
          </h1>
        </div>
        <div style={{"color":"#FCF7F8", marginTop:'2%'}}>
          <a><NavLink to='/'></NavLink>About</a>
          <a><NavLink to='/'></NavLink>Dashboard</a>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Nodes />} />
        <Route path="/about" element={<About />} />
        <Route path="/:id" element={<Plot />} />
      </Routes>
    </Router>
  );
}

export default App;
