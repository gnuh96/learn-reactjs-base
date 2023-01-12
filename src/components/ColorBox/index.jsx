import React, { useState } from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {

};

function ColorBox(props) {
    const [color, setColor] = useState('red');

    return (
        <div style={{ color }}>
            <div >{color}</div>

            <button onClick={() => setColor('black')}>Change to black</button>
            <button onClick={() => setColor('red')}>Change to red</button>
        </div>
    );
}

export default ColorBox;