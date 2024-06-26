import React, { useState, useEffect } from 'react';

export default function ScrollTopArrow() {
  const [showScroll, setShowScroll] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 960px)').matches : ''
  );

  useEffect(() => {
    window
    .matchMedia('(max-width: 960px)')
    .addEventListener('change', e => setIsMobile( e.matches ));
  }, []);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400)
      setShowScroll(true);
    else if (showScroll && window.pageYOffset <= 400)
      setShowScroll(false);
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  typeof window !== 'undefined' ? window.addEventListener('scroll', checkScrollTop) : '';

  return (
    <i className='fas fa-arrow-circle-up scrollTop fa-4x' onClick={scrollTop}
      style={{display: showScroll && !isMobile ? 'flex' : 'none'}} />
  );
}