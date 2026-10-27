import { useState } from 'react';
import shira from '../../assets/shira.png';

export default function Waldo({ changeBackground }) {
    const [placement, setPlacement] = useState({ x: 100, y: 100 });

    const newPlace = () => {
        const width = Math.floor(Math.random() * (window.innerWidth * 0.9));
        const height = Math.floor(Math.random() * (window.innerHeight * 0.58));
        console.log(width, height)
        setPlacement({ x: width, y: height });
    };

    return (
        <div 
            className="waldo" 
            onClick={() => {
                newPlace()
                changeBackground()
            }}
            style={{
                position: 'absolute',
                bottom: `${placement.y}px`,
                left: `${placement.x}px`,
                width: '100px',   
                height: '200px',  
                backgroundImage: `url(${shira})`,
                backgroundSize: 'cover',        
                backgroundPosition: 'center',
                cursor: 'pointer',
                userSelect: 'none',
            }}
        >
        </div>
    );
}