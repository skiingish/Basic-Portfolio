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
  if (typeof window !== 'undefined') {
    <h1>Have you enabled JS?</h1>;
  }

  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getTransform = (index: number) => {
    const sectionHeight = window.innerHeight;
    const offset = Math.max(0, scrollY - index * sectionHeight);
    const progress = offset / sectionHeight;
    return `translateY(${progress * 100}vh)`;
  };

  const getOpacity = (index: number) => {
    const sectionHeight = window.innerHeight;
    const offset = Math.max(0, scrollY - index * sectionHeight);
    const progress = offset / sectionHeight;
    return Math.max(0, 1 - progress * 0.2);
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
