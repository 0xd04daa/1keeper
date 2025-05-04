
import { useEffect, useState } from "react";

interface CountdownUnit {
  value: number;
  label: string;
  prevValue?: number;
}

const CountdownTimer = () => {
  const targetDate = new Date("2025-06-01T00:00:00");
  const [timeLeft, setTimeLeft] = useState<CountdownUnit[]>([
    { value: 0, label: "days" },
    { value: 0, label: "hours" },
    { value: 0, label: "minutes" },
    { value: 0, label: "seconds" },
  ]);
  
  const [flipping, setFlipping] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        return [
          { value: 0, label: "days" },
          { value: 0, label: "hours" },
          { value: 0, label: "minutes" },
          { value: 0, label: "seconds" },
        ];
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      return [
        { value: days, prevValue: timeLeft[0].value, label: "days" },
        { value: hours, prevValue: timeLeft[1].value, label: "hours" },
        { value: minutes, prevValue: timeLeft[2].value, label: "minutes" },
        { value: seconds, prevValue: timeLeft[3].value, label: "seconds" },
      ];
    };
    
    // Check which values have changed
    const checkValueChanges = (newValues: CountdownUnit[]) => {
      const changes: Record<string, boolean> = {};
      
      newValues.forEach((unit) => {
        if (unit.prevValue !== undefined && unit.value !== unit.prevValue) {
          changes[unit.label] = true;
        } else {
          changes[unit.label] = false;
        }
      });
      
      return changes;
    };
    
    const countdownInterval = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      
      // Set flipping state for animation
      const changes = checkValueChanges(newTimeLeft);
      setFlipping(changes);
      
      // Update time left after a slight delay to allow animation to start
      setTimeLeft(newTimeLeft);
      
      // Reset flipping state after animation completes
      setTimeout(() => {
        setFlipping({});
      }, 500);
    }, 1000);
    
    return () => clearInterval(countdownInterval);
  }, [timeLeft, targetDate]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-3 md:gap-5">
        {timeLeft.map((unit, index) => (
          <div key={unit.label} className="flex flex-col items-center">
            <div className="countdown-box perspective-container">
              <div className={`flip-card-inner ${flipping[unit.label] ? 'flipping' : ''}`}>
                {/* Card front (visible before flip) */}
                <div className="flip-card-front">
                  {/* Top half of the number */}
                  <div className="flip-card-top rounded-t-lg">
                    <span className="countdown-number">
                      {unit.value.toString().padStart(2, '0')}
                    </span>
                  </div>
                  
                  {/* Bottom half of the number */}
                  <div className="flip-card-bottom rounded-b-lg">
                    <span className="countdown-number">
                      {unit.value.toString().padStart(2, '0')}
                    </span>
                  </div>
                </div>
                
                {/* Card back (visible after flip) */}
                <div className="flip-card-back">
                  {/* Top half of the number */}
                  <div className="flip-card-top rounded-t-lg">
                    <span className="countdown-number">
                      {unit.prevValue !== undefined && flipping[unit.label] 
                        ? unit.prevValue.toString().padStart(2, '0') 
                        : unit.value.toString().padStart(2, '0')}
                    </span>
                  </div>
                  
                  {/* Bottom half of the number */}
                  <div className="flip-card-bottom rounded-b-lg">
                    <span className="countdown-number">
                      {unit.value.toString().padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <span className="countdown-label">{unit.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
