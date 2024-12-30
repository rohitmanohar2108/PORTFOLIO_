import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    <div className={`px-6 md:px-12 lg:px-24 xl:px-32 mx-auto max-w-7xl ${className}`}>
      {children}
    </div>
  );
};