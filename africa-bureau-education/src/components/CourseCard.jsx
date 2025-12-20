import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const courseIcons = {
  'Agriculture Science': 'https://cdn.jsdelivr.net/npm/openmoji@latest/color/svg/1F33E.svg',
  'Administration': 'https://cdn.jsdelivr.net/npm/openmoji@latest/color/svg/1F4CB.svg',
  'Business & Finance': 'https://cdn.jsdelivr.net/npm/openmoji@latest/color/svg/1F4BC.svg',
  'Management': 'https://cdn.jsdelivr.net/npm/openmoji@latest/color/svg/1F60A.svg',
  'Technical/Vocational': 'https://cdn.jsdelivr.net/npm/openmoji@latest/color/svg/1F527.svg',
  'Production Technology': 'https://cdn.jsdelivr.net/npm/openmoji@latest/color/svg/2699.svg',
  'Home Science': 'https://cdn.jsdelivr.net/npm/openmoji@latest/color/svg/1F3E0.svg',
  'Hospitality & Tourism': 'https://cdn.jsdelivr.net/npm/openmoji@latest/color/svg/1F3E8.svg',
  'Audio Visual & Physical Arts': 'https://cdn.jsdelivr.net/npm/openmoji@latest/color/svg/1F3A8.svg',
  'Multimedia Arts': 'https://cdn.jsdelivr.net/npm/openmoji@latest/color/svg/1F4FA.svg',
  'Law & Legal Arts': 'https://cdn.jsdelivr.net/npm/openmoji@latest/color/svg/2696.svg',
  'Education & Training': 'https://cdn.jsdelivr.net/npm/openmoji@latest/color/svg/1F4DA.svg',
  'Social Science': 'https://cdn.jsdelivr.net/npm/openmoji@latest/color/svg/1F465.svg',
  'Health Science': 'https://cdn.jsdelivr.net/npm/openmoji@latest/color/svg/2695.svg',
  'Engineering Science': 'https://cdn.jsdelivr.net/npm/openmoji@latest/color/svg/1F3D7.svg',
  'Life & Physical Science': 'https://cdn.jsdelivr.net/npm/openmoji@latest/color/svg/1F52C.svg',
  'Computer Science': 'https://cdn.jsdelivr.net/npm/openmoji@latest/color/svg/1F4BB.svg',
  'Transportation Science': 'https://cdn.jsdelivr.net/npm/openmoji@latest/color/svg/2708.svg',
};

export default function CourseCard({ course, index }) {
  const iconUrl = courseIcons[course.name] || courseIcons['Agriculture Science'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition p-6 border-t-4 border-primary-600"
    >
      {/* Icon Container */}
      <div className="mb-4 h-20 w-20">
        <img
          src={iconUrl}
          alt={course.name}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>

      {/* Course Title */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        {course.name}
      </h3>

      {/* Course Description */}
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
        {course.abstract}
      </p>

      {/* Career Paths Badge */}
      <div className="mb-4">
        <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900 px-3 py-1 rounded-full">
          {course.careers.length} Career Paths
        </span>
      </div>

      {/* Explore Link */}
      <Link
        to={`/courses/${course.code}`}
        className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition"
      >
        Explore Course <ArrowRight size={18} />
      </Link>
    </motion.div>
  );
}