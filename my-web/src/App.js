import './App.css';
import logo from './logo.svg';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="Page">
      <Router>
        {/* Navbar */}
        <div className="sidebar">
          <div className="nav-scrollable">
            <nav className="flex-row">
              <div className="nav-item">
                <NavLink activeClassName="nav-link.active" className="nav-link" to="/about"><span className="nav-title"> ABOUT </span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink activeClassName="nav-link.active" className="nav-link" to="/projects"><span className="nav-title"> PROJECTS </span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink activeClassName="nav-link.active" className="nav-link" to=""><span className="nav-title" style={{fontSize: "4vw"}}> ALCARODIA </span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink activeClassName="nav-link.active" className="nav-link" to="/author"><span className="nav-title"> AUTHOR </span></NavLink>
              </div>
              <div className="nav-item">
                <NavLink activeClassName="nav-link.active" className="nav-link" to="/contact"><span className="nav-title"> CONTACT </span></NavLink>
              </div>
            </nav>
          </div>
        </div>
          
        {/* Content */}
        <main className="Content">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="" element={<Alcarodia />} />
            <Route path="/author" element={<Author />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

function About() {
  return <h2>About Section</h2>;
}

function Projects() {
  return <h2>Projects Section</h2>;
}

function Alcarodia() {
  return <HomePage />;
}

function Author() {
  return <h2>Author Section</h2>;
}

function Contact() {
  return <h2>Contact Section</h2>;
}

export default App;
