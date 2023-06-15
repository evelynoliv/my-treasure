import React, { useEffect, useState } from 'react';
import './Map.css';

function Map() {
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

        // Clean up the event listener when the component unmounts
        return () => {
          document.removeEventListener('keydown', handleKeyPress);
        };
      }, [position]);


      return (
        <div className="map-container"> 
          <div
            className="point" 
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`,
            }}
          />
        </div>
      );
}

export default Map;
