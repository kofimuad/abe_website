import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import teamData from '../data/team.json';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us - Africa Bureau of Education</title>
        <meta name="description" content="Learn about our mission and team." />
      </Helmet>

      <div className="min-h-screen">
        {/* Header */}
        <section className="bg-secondary-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4 text-white">About Us</h1>
            <p className="text-xl text-gray-300">
              Transforming education in Africa through innovative, career-focused curricula
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gray-50 dark:bg-inherit">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To design and implement education reform that ensures all students have access to quality, career-aligned education that prepares them for meaningful employment and lifelong learning opportunities.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  An Africa where education systems are responsive to individual student needs and labor market demands, creating a skilled workforce that drives sustainable development and improves quality of life.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamData.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="h-64 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-4xl">
                    {member.initials}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary-600 font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-gray-50 dark:bg-inherit">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Our Journey</h2>
            <div className="space-y-6">
              {[
                { year: '2019', title: 'Foundation', desc: 'ABE established to address education reform' },
                { year: '2020-2021', title: 'Research', desc: 'Conducted comprehensive study on Ghana education system' },
                { year: '2022', title: 'CCSP Development', desc: 'Designed Common Career Selective Programme' },
                { year: '2023-2024', title: 'Publication', desc: 'Published peer-reviewed research findings' },
                { year: '2025', title: 'Implementation', desc: 'Working with stakeholders to implement CCSP' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6 items-start"
                >
                  <div className="w-32 font-bold text-primary-600 text-lg">{item.year}</div>
                  <div className="flex-1 pb-6 border-l-2 border-primary-600 pl-6">
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}