import React from 'react';
import useClock from '../../hooks/useClock';
import './Clock.scss';


function Clock() {
    const { timeString } = useClock();
    return (
        <p className='clock'>{timeString}</p>
    );
}

export default Clock;