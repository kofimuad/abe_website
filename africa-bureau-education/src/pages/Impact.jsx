import React from 'react';
import { Helmet } from 'react-helmet-async';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

export default function Impact() {
  const enrollmentData = [
    { year: '2020', students: 1180957, quality: 45 },
    { year: '2021', students: 1200000, quality: 48 },
    { year: '2022', students: 1250000, quality: 52 },
    { year: '2023', students: 1300000, quality: 56 },
    { year: '2024', students: 1350000, quality: 62 },
    { year: '2025', students: 1400000, quality: 68 },
  ];

  return (
    <>
      <Helmet>
        <title>Impact & Evidence - Africa Bureau of Education</title>
        <meta name="description" content="Measuring the impact of CCSP" />
      </Helmet>

      <div className="min-h-screen">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Impact & Evidence</h1>
            <p className="text-xl text-blue-100">
              Measuring the effectiveness of education reform
            </p>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Education Quality Improvement</h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={enrollmentData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis yAxisId="left" label={{ value: 'Quality Score', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="quality" stroke="#2563eb" strokeWidth={2} name="Education Quality (%)" />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>
          </div>
        </section>

        {/* Impact Stories */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Success Stories</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: 'Ama Owusu',
                  role: 'Student, Accra Senior High School',
                  quote: 'The expanded course options helped me discover my passion for healthcare. Now I\'m on track for medical school.',
                  bg: 'bg-blue-50',
                },
                {
                  name: 'Dr. Kwame Mensah',
                  role: 'Education Administrator',
                  quote: 'CCSP has transformed how we approach curriculum design. Students are more engaged and focused on their futures.',
                  bg: 'bg-green-50',
                },
              ].map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`${story.bg} p-8 rounded-lg border-l-4 border-blue-600`}
                >
                  <p className="text-lg italic mb-4 text-gray-700">"{story.quote}"</p>
                  <div>
                    <p className="font-bold text-gray-900">{story.name}</p>
                    <p className="text-sm text-gray-600">{story.role}</p>
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