import React, { useState, useEffect } from 'react';

function JumpToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`jump-to-top-button ${isVisible ? 'visible' : 'hidden'}`}
      onClick={handleClick}
    >
      Jump to Top
    </button>
  );
}

export default JumpToTopButton;
