import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import coursesData from '../data/courses.json';
import CourseCard from './CourseCard';
import Fuse from 'fuse.js';

export default function CourseExplorer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Agriculture',
    'Business',
    'Technical',
    'Home Economics',
    'Visual Arts',
    'General Arts',
    'General Science',
  ];

  const fuse = new Fuse(coursesData, {
    keys: ['name', 'abstract'],
    threshold: 0.3,
  });

  const filteredCourses = useMemo(() => {
    let result = coursesData;

    if (searchTerm) {
      result = fuse.search(searchTerm).map((r) => r.item);
    }

    if (selectedCategory !== 'All') {
      result = result.filter((course) => course.category === selectedCategory);
    }

    return result;
  }, [searchTerm, selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-8">Explore Our 18 Courses</h2>

      {/* Search Bar */}
      <div className="mb-8 relative">
        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search courses..."
          className="w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              selectedCategory === category
                ? 'bg-primary-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Course Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course, index) => (
          <CourseCard key={course.code} course={course} index={index} />
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No courses found matching your search.</p>
        </div>
      )}
    </div>
  );
}