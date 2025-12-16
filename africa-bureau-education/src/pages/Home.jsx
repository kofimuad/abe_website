import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import CourseExplorer from '../components/CourseExplorer';
import { Award, TrendingUp, Users, BookOpen } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: BookOpen,
      title: '18 Major Courses',
      description: 'Expanded from 7 to 18 courses aligned with real-world careers',
    },
    {
      icon: TrendingUp,
      title: 'Career-Focused Learning',
      description: 'Each course includes 20-40 specific career pathways and requirements',
    },
    {
      icon: Users,
      title: 'Individual Growth',
      description: 'Tailored education based on student abilities and career aspirations',
    },
    {
      icon: Award,
      title: 'Quality Education',
      description: 'Addressing the gap where students learn at half capacity',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Africa Bureau of Education - Transform Education in Africa</title>
        <meta
          name="description"
          content="The Common Career Selective Programme (CCSP) aligns education with real-world careers."
        />
        <meta name="keywords" content="education reform, careers, Africa, CCSP" />
      </Helmet>

      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why CCSP Matters</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
                >
                  <IconComponent className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">The Challenge</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">56%</div>
              <p>Of Ghana's human capital will go to waste due to poor education quality</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">12 years</div>
              <p>Students attend school but learn content equivalent to 6 years elsewhere</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">116/157</div>
              <p>Ghana's ranking on World Bank Human Capital Index</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <CourseExplorer />

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Join the Education Revolution</h2>
          <p className="text-xl mb-8 text-blue-100">
            Support education reform that prepares students for successful careers.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Link
              to="/research"
              className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition"
            >
              Read Our Research
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-900 transition"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}