import React from 'react';
import boardimg from './Board.png'
import BoardToMapButton from '../../components/IconButton.js';
import Stickies from '../../components/Stickies.js'; 
import { useState } from 'react';


import { useNavigate } from 'react-router-dom';
import GenericButton from '../../components/GenericButton.js';

function Board() {

    const [stickies, setStickies] = useState([]);

    const addSticky = () => {
        const maxX = 800 - 100; 
        const maxY = 600 - 100; 
        const newSticky = {
          id: stickies.length,
          x: Math.random() * maxX,
          y: Math.random() * maxY,
        };
        setStickies(stickies => [...stickies, newSticky]); 
        console.log(stickies)
      };

    let navigate = useNavigate();

    const handleClick = () => {
        navigate('/map'); 
      };

    return (

    <div style={{
            display: 'flex',
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#c26b2d',
            position: 'relative', 
        }}>

        <div style={{ position: 'absolute', top: 0, left: 0, margin: '10px' }}>
        <BoardToMapButton onClick={handleClick} label="click to find more boards near you" color="#efbbf0" />
        </div>
        <div style={{ position: 'absolute', top: 0, right: 0, margin: '10px' }}>
        <GenericButton onClick={addSticky} label="click to add a new sticky" color="#fac8f2" />
        </div>

            {stickies.map((sticky) => (
                <Stickies key={sticky.id} 
                style={{ left: sticky.x + 'px', top: sticky.y + 'px' }}
                />
         ))}

            

            <img src={boardimg} alt="Board" style={{
                maxWidth: '80%', 
                maxHeight: '80vh', 
                objectFit: 'contain', 
            }} />
            <div style={{
                position: 'absolute', // Overlay the text
                color: 'white', // Ensures text is visible
                fontSize: '24px', 
            }}>
            </div>
        </div>
    );
}

export default Board;