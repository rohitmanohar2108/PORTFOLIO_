import React, { useEffect, useState } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50  blur-3xl"
      style={{
        width: '900px',
        height: '900px',
        background: 'radial-gradient(circle at center, rgba(59,130,246,0.2) 0%, rgba(37,99,235,0.1) 40%, transparent 70%)',
        left: `${position.x - 450}px`,
        top: `${position.y - 450}px`,
        transform: 'translate(0, 0)',
        willChange: 'left, top',
      }}
    />
  );
};