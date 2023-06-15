import React, { useState, useEffect } from 'react';
import './Map.css';

const Map = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleKeyPress = (event) => {
      const { x, y } = position;

      switch (event.key) {
        case 'ArrowLeft':
          setPosition({ x: x - 10, y });
          break;
        case 'ArrowUp':
          setPosition({ x, y: y - 10 });
          break;
        case 'ArrowRight':
          setPosition({ x: x + 10, y });
          break;
        case 'ArrowDown':
          setPosition({ x, y: y + 10 });
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [position]);

  return (
    <div className="map-container">
      <div
        className="map-point"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </div>
  );
};

export default Map;
