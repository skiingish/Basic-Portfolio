'use client';

import { useEffect, useRef, useState } from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Projects from './Projects';

const sections = [
  { id: 1, content: <Banner />, color: 'bg-[#0D0F11]' },
  { id: 2, content: <Projects />, color: 'bg-[#21262B]' },
  { id: 3, content: <Contact />, color: 'bg-[#0D0F11]' },
];

export default function StackedSections() {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize window height
    setWindowHeight(window.innerHeight);

    const handleScroll = () => {
      if (containerRef.current) {
        setScrollY(window.scrollY);
      }
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getTransform = (index: number) => {
    const offset = Math.max(0, scrollY - index * windowHeight);
    const progress = offset / windowHeight;
    return `translateY(-${progress * 130}vh)`;
  };

  const getOpacity = (index: number) => {
    const offset = Math.max(0, scrollY - index * windowHeight);
    const progress = offset / windowHeight;
    const value = Math.max(0, 1 - progress * 0.2);
    if (Number.isNaN(value)) {
      return 1;
    }

    return value;
  };

  return (
    <div ref={containerRef} className='relative h-[300vh]'>
      {sections.map((section, index) => (
        <div
          key={section.id}
          className={`fixed top-0 left-0 w-full h-screen ${section.color} flex items-center justify-center transition-transform duration-300 ease-out`}
          style={{
            zIndex: sections.length - index,
            transform: getTransform(index),
            opacity: getOpacity(index),
          }}
        >
          {section.content}
        </div>
      ))}
    </div>
  );
}
