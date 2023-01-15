import React, { useState } from 'react';
import './Color.scss';

Color.propTypes = {
};

function Color() {
    const [color, setColor] = useState('red');

    return (
        <div style={{ color }}>
            <div >{color}</div>

            <button onClick={() => setColor('black')}>Change to black</button>
            <button onClick={() => setColor('red')}>Change to red</button>
        </div>
    );
}

export default Color;