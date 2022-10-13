import React from 'react';import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Hero from './pages/Hero';
import AboutMe from './pages/AboutMe';
import MyWork from './pages/MyWork';
import ContactMe from './pages/ContactMe';

function App() {
  return (
    <Router>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/aboutMe" element={<AboutMe />} />
            <Route path="/myWork" element={<MyWork />} />
            <Route path="/contactMe" element={<ContactMe />} />
          </Routes>
          <Footer />
        </div>
        </Router>
        );
}

export default App;