import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Download, Users, Target } from 'lucide-react';

export default function Implementation() {
  const recommendations = [
    {
      icon: Target,
      title: 'Policy Integration',
      points: [
        'Incorporate CCSP into national education policy framework',
        'Establish curriculum alignment guidelines',
        'Link pre-tertiary education to career opportunities',
      ],
    },
    {
      icon: Users,
      title: 'Capacity Building',
      points: [
        'Train teachers on CCSP implementation',
        'Partner with industries for mentorship',
        'Provide internship and practical training',
      ],
    },
    {
      icon: Target,
      title: 'Equity & Inclusivity',
      points: [
        'Ensure access for marginalized groups',
        'Support rural students and girls',
        'Provide assistive technologies',
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Implementation Resources - Africa Bureau of Education</title>
        <meta name="description" content="Resources for implementing CCSP" />
      </Helmet>

      <div className="min-h-screen">
        {/* Header */}
        <section className="bg-secondary-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4 text-white">Implementation Resources</h1>
            <p className="text-xl text-gray-300">
              Tools and guides for CCSP adoption in your institution
            </p>
          </div>
        </section>

        {/* Seven Recommendations */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">7-Point Implementation Strategy</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recommendations.map((rec, index) => {
                const IconComponent = rec.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg border-t-4 border-primary-600"
                  >
                    <IconComponent className="w-12 h-12 text-primary-600 mb-4" />
                    <h3 className="text-xl font-bold mb-4">{rec.title}</h3>
                    <ul className="space-y-3">
                      {rec.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <span className="text-primary-600 font-bold mt-1">✓</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-20 dark:bg-inherit bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Download Resources</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'CCSP Implementation Handbook',
                  desc: 'Complete guide for schools and districts',
                  icon: '📋',
                },
                {
                  title: 'Teacher Training Materials',
                  desc: 'Professional development curriculum',
                  icon: '👨‍🏫',
                },
                {
                  title: 'Curriculum Templates',
                  desc: 'Ready-to-use course templates',
                  icon: '📚',
                },
                {
                  title: 'Assessment Tools',
                  desc: 'Evaluation and monitoring frameworks',
                  icon: '📊',
                },
              ].map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition flex flex-col justify-between"
                >
                  <div>
                    <div className="text-4xl mb-4">{resource.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                    <p className="text-gray-600 mb-4">{resource.desc}</p>
                  </div>
                  <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-semibold transition inline-flex items-center gap-2 w-fit">
                    <Download size={18} /> Download
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}