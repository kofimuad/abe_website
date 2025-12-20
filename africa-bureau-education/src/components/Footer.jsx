import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Africa Bureau of Education</h3>
            <p className="text-gray-400">
              Transforming education in Africa through innovative career-focused curricula.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/ccsp" className="hover:text-white transition">CCSP Program</Link></li>
              <li><Link to="/research" className="hover:text-white transition">Research</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/courses" className="hover:text-white transition">Courses</Link></li>
              <li><Link to="/implementation" className="hover:text-white transition">Implementation</Link></li>
              <li><Link to="/impact" className="hover:text-white transition">Impact</Link></li>
              <li><Link to="/blog" className="hover:text-white transition">Blog</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:info@abe.org" className="hover:text-white transition">
                  info@abe.org
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>+233 (XXX) XXX-XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Accra, Ghana</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-secondary-800 pt-8 flex justify-between items-center">
          <p className="text-gray-400">&copy; 2025 Africa Bureau of Education. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary-400 transition"><Facebook size={20} /></a>
            <a href="#" className="hover:text-primary-400 transition"><Twitter size={20} /></a>
            <a href="#" className="hover:text-primary-400 transition"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}