import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CCSP() {
  const benefits = [
    'Expands from 7 to 18 major courses',
    'Aligns education with real-world careers',
    'Focuses on individual student abilities',
    'Provides 20-40 career options per course',
    'Improves quality of education',
    'Prepares students for tertiary education',
    'Supports lifelong learning',
    'Promotes Education-for-All (EFA)',
  ];

  const curriculum = [
    { step: 1, title: 'Problem Identification', desc: 'Students learn at half capacity, limited course options' },
    { step: 2, title: 'Needs Assessment', desc: 'Analyze course and curriculum development gaps' },
    { step: 3, title: 'Goals & Objectives', desc: 'Define stakeholder and student outcomes' },
    { step: 4, title: 'Educational Strategies', desc: 'Implement active learning and project-based approaches' },
    { step: 5, title: 'Implementation', desc: 'Deploy CCSP across junior and senior high schools' },
    { step: 6, title: 'Evaluation & Feedback', desc: 'Measure effectiveness and continuous improvement' },
  ];

  const courseExpansion = [
    { original: 'Agriculture', expanded: 'Agriculture Science (1 course)' },
    { original: 'Business', expanded: 'Administration, Business & Finance, Management (3 courses)' },
    { original: 'Technical', expanded: 'Technical/Vocational, Production Technology (2 courses)' },
    { original: 'Home Economics', expanded: 'Home Science, Hospitality & Tourism (2 courses)' },
    { original: 'Visual Arts', expanded: 'Audio Visual & Physical Arts (1 course)' },
    { original: 'General Arts', expanded: 'Multimedia Arts, Law & Legal Arts, Education & Training, Social Science (4 courses)' },
    { original: 'General Science', expanded: 'Health Science, Engineering Science, Life & Physical Science, Computer Science, Transportation Science (5 courses)' },
  ];

  return (
    <>
      <Helmet>
        <title>CCSP Program - Africa Bureau of Education</title>
        <meta name="description" content="Learn about the Common Career Selective Programme (CCSP)" />
      </Helmet>

      <div className="min-h-screen">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Common Career Selective Programme</h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              A structured education framework designed to expand course options, align learning with careers, and improve quality of education for all students.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6">What is CCSP?</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The Common Career Selective Programme (CCSP) is a comprehensive education reform framework that addresses critical gaps in Ghana's education system. By expanding from 7 main courses to 18 major courses, CCSP provides students with diverse career pathways tailored to their abilities and interests.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Each course includes 20-40 specific career options with detailed requirements, ensuring students graduate with clear career direction and actionable skills.
                </p>

                <Link
                  to="/courses"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
                >
                  Explore All 18 Courses <ArrowRight size={20} />
                </Link>
              </motion.div>

              {/* Right Content - Stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                  <div className="text-4xl font-bold text-blue-600 mb-2">7→18</div>
                  <p className="text-gray-700 font-semibold">Courses Expanded</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                  <div className="text-4xl font-bold text-green-600 mb-2">700+</div>
                  <p className="text-gray-700 font-semibold">Career Paths</p>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-600">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">1.1M+</div>
                  <p className="text-gray-700 font-semibold">Students Impacted</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
                  <div className="text-4xl font-bold text-purple-600 mb-2">EFA</div>
                  <p className="text-gray-700 font-semibold">Education for All</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Why CCSP Matters</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex items-start gap-4"
                >
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-700 font-medium">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Expansion */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">7 to 18: Course Expansion</h2>

            <div className="space-y-4">
              {courseExpansion.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 text-blue-600 font-bold px-4 py-2 rounded-lg min-w-fit">
                      {item.original}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700">{item.expanded}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6-Step Curriculum Process */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">6-Step Implementation Framework</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {curriculum.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-blue-800 bg-opacity-50 p-6 rounded-lg border-2 border-blue-400"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-yellow-400 text-blue-900 font-bold text-lg">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <p className="text-blue-100">{item.desc}</p>

                  {index < curriculum.length - 1 && (
                    <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                      <ArrowRight size={24} className="text-yellow-400" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Components */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">CCSP Key Components</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Course Structure',
                  items: ['Course Header', 'Course Abstract', 'Course Description', 'Core Subjects', 'Selective Subjects', 'Elective Subjects'],
                },
                {
                  title: 'Learning Approaches',
                  items: ['Active Learning', 'Project-Based Learning', 'Social & Emotional Learning', 'Hands-On Training', '80% Academic / 20% Practical', 'Digital Integration'],
                },
              ].map((component, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-600"
                >
                  <h3 className="text-2xl font-bold mb-6">{component.title}</h3>
                  <ul className="space-y-3">
                    {component.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-blue-900">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Education?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join us in implementing CCSP to provide students with career-aligned education and unlimited opportunities.
              </p>

              <div className="flex gap-4 flex-wrap justify-center">
                <Link
                  to="/implementation"
                  className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition inline-flex items-center gap-2"
                >
                  Implementation Resources <ArrowRight size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-900 transition"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}