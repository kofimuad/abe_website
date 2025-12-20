import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

// Blog post icons - using Openmoji SVGs
const blogIcons = {
  'Education': 'https://cdn.jsdelivr.net/npm/openmoji@latest/color/svg/1F4DA.svg',
  'CCSP': 'https://cdn.jsdelivr.net/npm/openmoji@latest/color/svg/1F3AF.svg',
  'Implementation': 'https://cdn.jsdelivr.net/npm/openmoji@latest/color/svg/1F4DD.svg',
  'Research': 'https://cdn.jsdelivr.net/npm/openmoji@latest/color/svg/1F52C.svg',
};

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: 'The Crisis of Education Quality in Africa',
      excerpt: 'Exploring the World Bank report that revealed 56% of Ghana\'s human capital is at risk due to poor education quality.',
      category: 'Education',
      date: '2025-01-15',
      author: 'Frederick Agyemang',
      content: 'Full article content here...',
    },
    {
      id: 2,
      title: 'How CCSP Expands Career Opportunities',
      excerpt: 'From 7 courses to 18 major programs - how the Common Career Selective Programme is transforming education access.',
      category: 'CCSP',
      date: '2025-01-10',
      author: 'Benedicta Woode',
      content: 'Full article content here...',
    },
    {
      id: 3,
      title: 'Implementation Success Stories from Ghana',
      excerpt: 'Real-world impact: How Ghanaian schools are adopting CCSP and seeing results.',
      category: 'Implementation',
      date: '2025-01-05',
      author: 'Samuel Kofi Fosuhene',
      content: 'Full article content here...',
    },
    {
      id: 4,
      title: 'Aligning Education with Global Career Trends',
      excerpt: 'How CCSP prepares students for jobs that don\'t exist yet through skills-based learning.',
      category: 'Education',
      date: '2024-12-28',
      author: 'Alexander Kojo Nyarko',
      content: 'Full article content here...',
    },
  ];

  const categories = ['All', 'Education', 'CCSP', 'Implementation', 'Research'];

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Blog - Africa Bureau of Education</title>
        <meta name="description" content="Articles and insights on education reform" />
      </Helmet>

      <div className="min-h-screen">
        {/* Header */}
        <section className="bg-secondary-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Blog & Insights</h1>
            <p className="text-xl text-gray-300">
              Latest articles on education reform and CCSP implementation
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex gap-2 flex-wrap justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-semibold transition ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-200 border-2 border-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
                >
                  {/* Image - Icon SVG */}
                  <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center p-8">
                    <img
                      src={blogIcons[post.category] || blogIcons['Education']}
                      alt={post.category}
                      className="w-24 h-24 object-contain"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex gap-4 mb-3 flex-wrap">
                      <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Calendar size={14} /> {new Date(post.date).toLocaleDateString()}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-gray-900">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <User size={14} /> {post.author}
                      </span>
                      <a href="#" className="text-primary-600 font-semibold hover:text-primary-700 transition flex items-center gap-1">
                        Read More <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No posts found in this category.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}