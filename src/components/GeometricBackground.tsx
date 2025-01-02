import React from "react";

const GeometricBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-[#5b7f76] animate"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              left: "50%",
              top: "50%",
              transform: `translate(50%, -50%) rotate(360deg)`,
              opacity: 0.1 + i * 0.1,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-[#64ffda] rounded-full"
            style={{
              width: "2px",
              height: "2px",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5,
              animation: `pulse ${1 + Math.random() * 2}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default GeometricBackground;
