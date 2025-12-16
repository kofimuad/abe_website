import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const courseIcons = {
  'Agriculture Science': '🌾',
  'Administration': '📋',
  'Business & Finance': '💼',
  'Management': '👔',
  'Technical/Vocational': '🔧',
  'Production Technology': '⚙️',
  'Home Science': '🏠',
  'Hospitality & Tourism': '🏨',
  'Audio Visual & Physical Arts': '🎨',
  'Multimedia Arts': '📺',
  'Law & Legal Arts': '⚖️',
  'Education & Training': '📚',
  'Social Science': '👥',
  'Health Science': '⚕️',
  'Engineering Science': '🏗️',
  'Life & Physical Science': '🔬',
  'Computer Science': '💻',
  'Transportation Science': '✈️',
};

export default function CourseCard({ course, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition p-6 border-t-4 border-blue-600"
    >
      <div className="text-5xl mb-4">{courseIcons[course.name] || '📖'}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{course.name}</h3>
      <p className="text-gray-600 text-sm mb-4">{course.abstract}</p>

      <div className="mb-4">
        <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
          {course.careers.length} Career Paths
        </span>
      </div>

      <Link
        to={`/courses/${course.code}`}
        className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition"
      >
        Explore Course <ArrowRight size={18} />
      </Link>
    </motion.div>
  );
}