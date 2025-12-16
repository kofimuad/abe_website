export const generateMetaTags = (title, description, keywords) => {
  return {
    title,
    description,
    keywords,
    og: {
      title,
      description,
      type: 'website',
      url: typeof window !== 'undefined' ? window.location.href : '',
      image: 'https://your-domain.com/og-image.png',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      image: 'https://your-domain.com/og-image.png',
    },
  };
};

export const structuredData = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Africa Bureau of Education',
    description: 'Education Reform through Common Career Selective Programme',
    url: 'https://your-domain.com',
    logo: 'https://your-domain.com/logo.png',
    sameAs: [
      'https://facebook.com/abe',
      'https://twitter.com/abe',
      'https://linkedin.com/company/abe',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'info@abe.org',
      telephone: '+233-xxx-xxx-xxxx',
    },
  },
};