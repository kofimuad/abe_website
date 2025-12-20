import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
const logo = new URL('../assets/logo.png', import.meta.url).href;

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'CCSP Program', path: '/ccsp' },
    { name: 'Courses', path: '/courses' },
    { name: 'Research', path: '/research' },
    { name: 'Implementation', path: '/implementation' },
    { name: 'Impact', path: '/impact' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-secondary-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl hover:opacity-80 transition">
            <img
              src={logo}
              alt="Africa Bureau of Education logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-1 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-3 py-2 rounded hover:bg-secondary-800 hover:text-primary-400 transition text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side - Dark Mode Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-secondary-800 text-primary-400 transition"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-primary-400 hover:text-primary-300 transition"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-secondary-800">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-3 py-2 rounded hover:bg-secondary-800 hover:text-primary-400 transition text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}