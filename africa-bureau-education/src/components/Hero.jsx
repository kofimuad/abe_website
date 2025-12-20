import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';

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
              Transform Education in Africa
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              The Common Career Selective Programme (CCSP) aligns education with real-world careers, ensuring students graduate with relevant skills and opportunities.
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

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden md:flex justify-center"
          >
            <div className="relative">
              <div className="w-full aspect-square bg-primary-900 rounded-2xl flex items-center justify-center">
                <BookOpen size={200} className="text-primary-700 opacity-50" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary-500 text-white px-6 py-3 rounded-lg font-bold">
                Education for All
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}