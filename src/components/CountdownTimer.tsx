
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

interface CountdownUnit {
  value: number;
  label: string;
}

const CountdownTimer = () => {
  const targetDate = new Date("2025-06-01T00:00:00");
  const [timeLeft, setTimeLeft] = useState<CountdownUnit[]>([
    { value: 0, label: "days" },
    { value: 0, label: "hours" },
    { value: 0, label: "minutes" },
    { value: 0, label: "seconds" },
  ]);
  
  const [prevTimeLeft, setPrevTimeLeft] = useState<CountdownUnit[]>(timeLeft);
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
        { value: days, label: "days" },
        { value: hours, label: "hours" },
        { value: minutes, label: "minutes" },
        { value: seconds, label: "seconds" },
      ];
    };
    
    // Check which values have changed
    const checkValueChanges = (newValues: CountdownUnit[], oldValues: CountdownUnit[]) => {
      const changes: Record<string, boolean> = {};
      
      newValues.forEach((unit, index) => {
        if (unit.value !== oldValues[index].value) {
          changes[unit.label] = true;
        } else {
          changes[unit.label] = false;
        }
      });
      
      return changes;
    };
    
    const countdownInterval = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setPrevTimeLeft(timeLeft);
      
      // Set flipping state for animation
      const changes = checkValueChanges(newTimeLeft, timeLeft);
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
                <div className="flip-card-front">
                  <span className="countdown-number">
                    {unit.value.toString().padStart(2, '0')}
                  </span>
                </div>
                <div className="flip-card-back">
                  <span className="countdown-number">
                    {unit.value.toString().padStart(2, '0')}
                  </span>
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
