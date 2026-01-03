import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import teamData from '../data/team.json';

export default function About() {
  // Function to get correct image path
  const getImagePath = (imageName) => {
    if (!imageName) return null;
    // Use dynamic import for images
    try {
      return new URL(`../assets/${imageName}`, import.meta.url).href;
    } catch {
      return null;
    }
  };

  // Fallback to avatar if image doesn't exist
  const getTeamImage = (member) => {
    const imagePath = getImagePath(member.image);
    return imagePath || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=22c55e&color=fff&size=256`;
  };

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
              Transforming African education through innovative, career-focused curricula that equip students with relevant skills and real-world opportunities.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gray-50 dark:bg-inherit">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  By transforming educational curricula, pedagogies, and assessment in Africa, we create responsive education systems that meet individual student needs and labor market demands, enabling every learner to reach their full potential and drive sustainable development.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  To design and implement education reform across Africa through research, policy development, capacity building, and stakeholder collaboration, ensuring all students access quality, career-aligned education for meaningful employment and lifelong learning.
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
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                >
                  {/* Image Section - with fallback */}
                  <div className="h-64 bg-gradient-to-br from-primary-400 to-primary-600 overflow-hidden relative">
                    <img
                      src={getTeamImage(member)}
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-110 transition duration-300"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=22c55e&color=fff&size=256`;
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 dark:text-white">{member.name}</h3>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
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
                { year: '2014', title: 'Foundation', desc: 'ABE established to address education reform' },
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
                    <h3 className="text-xl font-bold mb-1 dark:text-white">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
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