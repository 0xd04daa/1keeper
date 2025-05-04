
import React from "react";

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-zinc-900" />
      
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:20px_20px]" />
      </div>
      
      {/* Animated gradient blob */}
      <div 
        className="absolute -top-[40%] -left-[10%] h-[600px] w-[600px] rounded-full 
                  bg-gradient-to-r from-zinc-700/20 to-zinc-800/30 blur-[120px]
                  animate-pulse-slow" 
      />
      
      <div 
        className="absolute top-[60%] right-[5%] h-[400px] w-[400px] rounded-full 
                  bg-gradient-to-l from-zinc-800/30 to-zinc-700/20 blur-[100px]
                  animate-pulse-slow" 
        style={{ animationDelay: '1s' }}
      />
    </div>
  );
};

export default AnimatedBackground;
