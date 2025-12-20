import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import CCSP from './pages/CCSP';
import Courses from './pages/Courses';
import CoursePage from './pages/CoursePage';
import Research from './pages/Research';
import Implementation from './pages/Implementation';
import Impact from './pages/Impact';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    const isDark = saved ? saved === 'true' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, []);

  const updateDarkMode = (isDark) => {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDark);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    updateDarkMode(newDarkMode);
  };

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/ccsp" element={<CCSP />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:courseId" element={<CoursePage />} />
              <Route path="/research" element={<Research />} />
              <Route path="/implementation" element={<Implementation />} />
              <Route path="/impact" element={<Impact />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;