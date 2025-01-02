import React, { createContext, useContext, useState } from 'react';

interface LoaderContextType {
  progress: number;
  setProgress: (progress: number) => void;
  phase: string;
  setPhase: (phase: string) => void;
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

export const LoaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('initializing');

  return (
    <LoaderContext.Provider value={{ progress, setProgress, phase, setPhase }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => {
  const context = useContext(LoaderContext);
  if (!context) throw new Error('useLoader must be used within LoaderProvider');
  return context;
};