import React from 'react';
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Leadership from './pages/Leadership';
import Research from './pages/Research';
import Community from './pages/Community';
import Hobbies from './pages/Hobbies';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        Manogna <span>Chalasani</span>
      </div>
      <ul className="navbar-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/leadership">Leadership</NavLink></li>
        <li><NavLink to="/research">Research</NavLink></li>
        <li><NavLink to="/community">Community</NavLink></li>
        <li><NavLink to="/hobbies">Hobbies</NavLink></li>
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>
        © 2026 Manogna Chalasani &nbsp;·&nbsp;{' '}
        <a href="https://linkedin.com/in/manogna-ch" target="_blank" rel="noreferrer">LinkedIn</a>
        {' '}&nbsp;·&nbsp;{' '}
        <a href="https://github.com/manognachalasani" target="_blank" rel="noreferrer">GitHub</a>
        {' '}&nbsp;·&nbsp;{' '}
        <a href="mailto:manognachalasani@gmail.com">manognachalasani@gmail.com</a>
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/research" element={<Research />} />
        <Route path="/community" element={<Community />} />
        <Route path="/hobbies" element={<Hobbies />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
