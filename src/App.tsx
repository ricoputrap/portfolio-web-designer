import React from 'react';
import './App.css';
import Navbar from './components/core-ui/organisms/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
