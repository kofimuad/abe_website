import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Briefcase } from 'lucide-react';
import coursesData from '../data/courses.json';

export default function CoursePage() {
  const { courseId } = useParams();
  const course = coursesData.find((c) => c.code === courseId);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
          <Link to="/courses" className="text-primary-600 hover:underline">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{course.name} - Africa Bureau of Education</title>
        <meta name="description" content={course.abstract} />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-secondary-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <Link to="/courses" className="flex items-center gap-2 mb-4 hover:opacity-80 transition">
              <ArrowLeft size={20} /> Back to Courses
            </Link>
            <h1 className="text-5xl font-bold mb-2 text-white">{course.name}</h1>
            <p className="text-xl text-gray-300">{course.abstract}</p>
          </div>
        </section>

        {/* Course Details */}
        <section className="py-20 dark:bg-stone-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="md:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg shadow-lg p-8 mb-8 dark:bg-slate-800"
                >
                  <h2 className="text-3xl font-bold mb-4">Course Overview</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">{course.description}</p>

                  <h3 className="text-2xl font-bold mb-4">Course Components</h3>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-3">
                      <span className="text-primary-600 font-bold">•</span>
                      <span className="text-gray-700">Core Subjects aligned with {course.name}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-600 font-bold">•</span>
                      <span className="text-gray-700">Selective Subjects for specialization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-600 font-bold">•</span>
                      <span className="text-gray-700">Elective Subjects for broader learning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-600 font-bold">•</span>
                      <span className="text-gray-700">Practical training and internships</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-600 font-bold">•</span>
                      <span className="text-gray-700">Project-Based Learning activities</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Career Paths */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8"
                >
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                    <Briefcase size={28} className="text-primary-600" />
                    Career Options
                  </h2>

                  <div className="grid md:grid-cols-2 gap-4">
                    {course.careers.map((career, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="bg-primary-50 dark:bg-stone-600 p-4 rounded border-l-4 border-primary-600"
                      >
                        <p className="font-semibold text-gray-900">{career}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-primary-100 rounded-lg dark:bg-stone-600">
                    <p className="text-sm text-gray-700">
                      <strong>Career Requirements:</strong> {course.careerRequirements}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 sticky top-24"
                >
                  <h3 className="text-xl font-bold mb-4">Course Information</h3>

                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <p className="text-sm text-gray-600 mb-1">Course Code</p>
                      <p className="font-bold text-lg">{course.code}</p>
                    </div>

                    <div className="border-b pb-4">
                      <p className="text-sm text-gray-600 mb-1">Category</p>
                      <p className="font-bold">{course.category}</p>
                    </div>

                    <div className="border-b pb-4">
                      <p className="text-sm text-gray-600 mb-1">Career Paths</p>
                      <p className="font-bold text-2xl text-primary-600">{course.careers.length}+</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 mb-2">Next Steps</p>
                      <Link
                        to="/contact"
                        className="w-full dark:text-white bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-lg font-semibold text-center block transition"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}