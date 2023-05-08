import Nodes from "./views/Nodes";
import About from "./views/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Plot } from "./views/Plot";

function App() {
  return (
    <Router>
      <header className="header" style={{"padding":"2% 2%","display":"flex","justifyContent":"space-between","backgroundColor":"white", boxShadow:''}}>
        <div style={{"fontSize":"1.5em","margin":".6em 0","display":"inline-block"}}>
          <h1 style={{"fontSize":"1.75rem","fontWeight":600}} className="navbar-brand">
            <a style={{"textDecoration":"none","color":"#FCF7F8"}}>Road Health Monitoring</a>
          </h1>
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
