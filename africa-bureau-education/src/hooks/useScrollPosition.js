import { useState, useEffect } from 'react';

export default function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updateScrollPosition = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', updateScrollPosition);
    return () => window.removeEventListener('scroll', updateScrollPosition);
  }, []);

  return scrollPosition;
}