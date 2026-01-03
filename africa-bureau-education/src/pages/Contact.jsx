import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  subject: z.string().min(5, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch('https://formspree.io/f/meeolzza', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          _replyto: data.email,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Africa Bureau of Education</title>
        <meta name="description" content="Get in touch with the Africa Bureau of Education" />
      </Helmet>

      <div className="min-h-screen">
        {/* Header */}
        <section className="bg-secondary-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4 text-white">Get in Touch</h1>
            <p className="text-xl text-gray-300">
              We'd love to hear from you. Let's talk about education reform.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="md:col-span-1"
              >
                <h2 className="text-2xl font-bold mb-8 dark:text-white">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="text-primary-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="font-semibold dark:text-white">Email</p>
                      <a href="mailto:info@africabureauofeducation.org" className="text-primary-600 hover:underline dark:text-primary-400">
                        info@africabureauofeducation.org
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="text-primary-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="font-semibold dark:text-white">Phone</p>
                      <a href="tel:+233201465422" className="text-primary-600 hover:underline dark:text-primary-400">
                        +233-(0)-20-146-5422
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="text-primary-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="font-semibold dark:text-white">Office</p>
                      <p className="text-gray-600 dark:text-gray-300">Accra, Ghana</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-4xl">💬</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 dark:text-white">Office Hours</h3>
                      <p className="text-gray-600 dark:text-gray-300">Monday - Friday: 9:00 AM - 5:00 PM GMT</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="md:col-span-2"
              >
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold mb-6 dark:text-white">Send us a Message</h2>

                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-400 rounded-lg flex items-center gap-3">
                      <CheckCircle className="text-green-600 dark:text-green-300" size={20} />
                      <div>
                        <p className="text-green-800 dark:text-green-200 font-semibold">✓ Message Sent!</p>
                        <p className="text-green-700 dark:text-green-300 text-sm">We'll respond to your email shortly.</p>
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 border border-red-400 rounded-lg flex items-center gap-3">
                      <AlertCircle className="text-red-600 dark:text-red-300" size={20} />
                      <div>
                        <p className="text-red-800 dark:text-red-200 font-semibold">Failed to Send</p>
                        <p className="text-red-700 dark:text-red-300 text-sm">Please try again or email us directly at info@africabureauofeducation.org</p>
                      </div>
                    </div>
                  )}

                  <div className="mb-6">
                    <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Full Name</label>
                    <input
                      type="text"
                      {...register('name')}
                      className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:border-primary-600 focus:outline-none transition"
                      placeholder="Your Name"
                      disabled={isLoading}
                    />
                    {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Email Address</label>
                    <input
                      type="email"
                      {...register('email')}
                      className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:border-primary-600 focus:outline-none transition"
                      placeholder="your@email.com"
                      disabled={isLoading}
                    />
                    {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Subject</label>
                    <input
                      type="text"
                      {...register('subject')}
                      className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:border-primary-600 focus:outline-none transition"
                      placeholder="What is this about?"
                      disabled={isLoading}
                    />
                    {errors.subject && <p className="text-red-600 text-sm mt-1">{errors.subject.message}</p>}
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Message</label>
                    <textarea
                      {...register('message')}
                      rows="5"
                      className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:border-primary-600 focus:outline-none transition resize-none"
                      placeholder="Your message..."
                      disabled={isLoading}
                    ></textarea>
                    {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-bold transition inline-flex items-center gap-2 w-full justify-center"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} /> Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
                    📧 Your message will be sent to <strong>info@africabureauofeducation.org</strong>
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}