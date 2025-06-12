import React, { useState, useEffect } from 'react';
import useMousePosition from '@/hooks/use-mouse-position';

const DotRing: React.FC = () => {
  const { x, y } = useMousePosition();
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className='z-10'>
      {/* Dot */}
      <div
        className={`dot ${isClicked ? 'clicked' : ''}`}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>

      {/* Ring */}
      <div
        className={`ring ${isClicked ? 'clicked' : ''}`}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </div>
  );
};

export default DotRing;