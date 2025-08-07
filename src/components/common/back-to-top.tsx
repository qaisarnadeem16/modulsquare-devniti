'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react'; // Or use any icon

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 px-1 py-3 cursor-pointer rounded-br-lg border-2 border-primary text-red shadow-lg transition-all"
          aria-label="Scroll to top"
        >
          <ArrowUp size={28} className='text-primary' />
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
