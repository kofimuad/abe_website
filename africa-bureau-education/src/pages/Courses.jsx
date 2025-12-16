import React from 'react';
import { Helmet } from 'react-helmet-async';
import CourseExplorer from '../components/CourseExplorer';

export default function Courses() {
  return (
    <>
      <Helmet>
        <title>Explore 18 Courses - Africa Bureau of Education</title>
        <meta name="description" content="Explore all 18 career-focused courses" />
      </Helmet>

      <div className="min-h-screen">
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Explore Our Courses</h1>
            <p className="text-xl text-blue-100">
              Discover 18 major courses designed to match your interests and career aspirations
            </p>
          </div>
        </section>

        <CourseExplorer />
      </div>
    </>
  );
}