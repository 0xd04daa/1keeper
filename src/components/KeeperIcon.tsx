
import React from "react";

const KeeperIcon = ({ className = "", size = 12 }: { className?: string; size?: number }) => {
  return (
    <svg 
      width={size} 
      height={size * 1.25} 
      viewBox="0 0 12 15" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M10.3235 10.413V0H3.59769V2.35577C4.53527 2.98244 5.85081 3.23432 7.19375 3.35149V9.40106C7.19375 10.7511 6.10052 11.8455 4.75197 11.8455C4.11358 11.8455 3.59601 12.3636 3.59601 13.0027V14.9787H11.7544V11.8455C10.9642 11.8455 10.3235 11.2042 10.3235 10.413Z" 
        fill="currentColor"
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M2.44178 11.8456C1.09323 11.8456 0 10.7511 0 9.40112V3.35155C1.34294 3.23431 2.65848 2.98244 3.59606 2.35583V12.9863C3.58702 12.355 3.07457 11.8456 2.44178 11.8456Z" 
        fill="#032DFF"
      />
    </svg>
  );
};

export default KeeperIcon;
