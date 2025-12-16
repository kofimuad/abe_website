import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Download, BookOpen, Users } from 'lucide-react';

export default function Research() {
  return (
    <>
      <Helmet>
        <title>Research & Publications - Africa Bureau of Education</title>
        <meta name="description" content="Our research on education reform in Africa" />
      </Helmet>

      <div className="min-h-screen">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Research & Publications</h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              Evidence-based research driving education reform in Africa
            </p>
          </div>
        </section>

        {/* Main Research Paper */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-xl overflow-hidden"
            >
              <div className="grid md:grid-cols-3 gap-8 p-8">
                {/* Paper Preview */}
                <div className="md:col-span-1 flex justify-center">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 rounded-lg h-fit">
                    <BookOpen size={48} className="mb-4" />
                    <p className="text-sm font-bold">RESEARCH PAPER</p>
                    <p className="text-xs text-blue-100 mt-2">F1000Research 2025</p>
                  </div>
                </div>

                {/* Paper Details */}
                <div className="md:col-span-2">
                  <h2 className="text-3xl font-bold mb-4">
                    Education Reform using Common Career Selective Programme (CCSP) to Promote Education-for-All (EFA)
                  </h2>

                  <div className="mb-6 space-y-3">
                    <div>
                      <p className="text-sm text-gray-600">Authors</p>
                      <p className="font-semibold">
                        Frederick Agyemang, Benedicta Woode, Samuel Kofi Fosuhene, and 4 others
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">Published</p>
                      <p className="font-semibold">July 9, 2025 | F1000Research</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">Status</p>
                      <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        Peer Reviewed
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    This comprehensive study analyzes education gaps in Ghana's system and proposes the Common Career Selective Programme (CCSP) as a solution to align education with lifelong learning and employability. The research presents a modification of 7 main courses into 18 major courses with detailed career pathways.
                  </p>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
                  >
                    <Download size={20} /> Download PDF
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Findings */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Key Findings</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  stat: '56%',
                  desc: 'Of Ghana\'s human capital will go to waste due to poor education quality',
                },
                {
                  stat: '12 years',
                  desc: 'Students attend school but learn content equivalent to 6 years elsewhere',
                },
                {
                  stat: '116/157',
                  desc: 'Ghana\'s ranking on World Bank Human Capital Index',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-lg text-center"
                >
                  <div className="text-4xl font-bold text-blue-600 mb-3">{item.stat}</div>
                  <p className="text-gray-700">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8">Research Methodology</h2>

            <div className="space-y-6">
              {[
                { step: 1, title: 'Data Collection', desc: 'Analyzed Ghana Education Service 2021 Second-Cycle School Register and Ghana Senior High Schools Annual Digest 2019/2020' },
                { step: 2, title: 'Content Analysis', desc: 'Systematic review of education policies and curriculum frameworks' },
                { step: 3, title: 'Course Modification', desc: 'Expanded 7 main courses to 18 major courses with career mappings' },
                { step: 4, title: 'Stakeholder Consultation', desc: 'Engaged education leaders, policymakers, and industry experts' },
                { step: 5, title: 'Peer Review', desc: 'Submitted to F1000Research for independent academic validation' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
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