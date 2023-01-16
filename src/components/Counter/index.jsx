import React, { useEffect, useRef, useState } from 'react';

Counter.propTypes = {

};

function Counter(props) {
    const [count, setCount] = useState(0);
    const prevCount = useRef(count);

    useEffect(() => {
        prevCount.current = count;
    })

    const handleIncreaseClick = () => setCount(x => x + 1);
    const handleDecreaseClick = () => setCount(x => x - 1);
    return (
        <div>
            <p>Previous: {prevCount.current}</p>
            <p>Current: {count}</p>

            <button onClick={handleIncreaseClick}>Increase</button>
            <button onClick={handleDecreaseClick}>Decrease</button>
        </div>
    );
}

export default Counter;