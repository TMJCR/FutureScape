import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import '../css/BackToTop.css';

export default function BackToTop() {
  const [showBackToTop, setshowBackToTop] = useState(false);
  const checkShowBackToTop = () => {
    const scrollPosition = window.pageYOffset;
    if (!showBackToTop && scrollPosition > 500) {
      setshowBackToTop(true);
    } else if (showBackToTop && scrollPosition < 500) {
      setshowBackToTop(false);
    }
  };

  const scrollBackToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  document.addEventListener('scroll', checkShowBackToTop);
  return <FaArrowCircleUp className="scrollTop" onClick={scrollBackToTop} style={{ width: 50, opacity: showBackToTop ? 100 : 0, cursor: showBackToTop ? 'pointer' : 'default' }} />;
}
