import { FaPlay } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa';
import { useState } from 'react';

export function StopWatch() {
  const [count, setCount] = useState(0);
  const [activeInterval, setActiveInterval] = useState<NodeJS.Timeout>();

  function handlePlayPause(): void {
    if (activeInterval) {
      clearInterval(activeInterval);
      setActiveInterval(undefined);
    } else {
      const newInterval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
      setActiveInterval(newInterval);
    }
  }

  function handleReset() {
    if (activeInterval) return;
    setCount(0);
  }

  return (
    <div>
      <div className="circle" onClick={handleReset}>
        <p style={{ color: 'black', fontSize: '40px' }}>{count}</p>
      </div>
      {activeInterval ? (
        <FaPause className="play-pause" onClick={handlePlayPause} />
      ) : (
        <FaPlay className="play-pause" onClick={handlePlayPause} />
      )}
    </div>
  );
}
