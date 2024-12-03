import React from 'react';

interface GradientHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientHeading({
  children,
  className = '',
}: GradientHeadingProps) {
  return (
    <h1
      className={`text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent ${className}`}
    >
      {children}
    </h1>
  );
}
