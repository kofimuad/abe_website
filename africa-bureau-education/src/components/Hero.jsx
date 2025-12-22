import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
const logo = new URL('../assets/logo.png', import.meta.url).href;
const logo2 = new URL('../assets/logo2.png', import.meta.url).href;

export default function Hero() {
  return (
    <div className="relative bg-secondary-900 text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-primary-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight text-primary-400">
              Africa Bureau of Education
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              The Africa Bureau of Education (ABE) is an amalgamation of non-governmental organizations of participating countries in Africa. ABE’s main goal is to champion a common course of advocating for education reforms, to improve the quality of education of our local and regional education systems of pre-tertiary curricula, pedagogies, and assessment. To promote Education-for-All (EFA), and to advance the Human Capital Index (HCI) of respective countries.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Link
                to="/ccsp"
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-bold transition flex items-center gap-2"
              >
                Learn About CCSP <ArrowRight size={20} />
              </Link>
              <Link
                to="/courses"
                className="border-2 border-primary-500 text-primary-400 hover:bg-primary-600 hover:text-white px-6 py-3 rounded-lg font-bold transition"
              >
                Explore Courses
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div>
                <div className="text-3xl font-bold text-primary-400">18</div>
                <div className="text-gray-300">Major Courses</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-400">700+</div>
                <div className="text-gray-300">Career Paths</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Brand Mark */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden md:flex justify-center items-center"
          >
            <div className="relative">
              {/* Logo with shadow/glow effect */}
              <div className="absolute inset-0 bg-primary-500 rounded-3xl filter blur-2xl opacity-20"></div>
              <img
                src={logo}
                alt="Africa Bureau of Education - Brand Mark"
                className="relative h-80 w-80 object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}