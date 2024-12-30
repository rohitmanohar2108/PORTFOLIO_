import React from 'react';

interface SideElementProps {
  side: 'left' | 'right';
  children: React.ReactNode;
}

export const SideElement = ({ side, children }: SideElementProps) => {
  return (
    <div className={`fixed bottom-0 ${side === 'left' ? 'left-10' : 'right-10'} hidden lg:block`}>
      <div className="flex flex-col items-center space-y-5 after:block after:w-[1px] after:h-[400px] after:bg-slate-400/25 after:my-4">
        {children}
      </div>
    </div>
  );
};