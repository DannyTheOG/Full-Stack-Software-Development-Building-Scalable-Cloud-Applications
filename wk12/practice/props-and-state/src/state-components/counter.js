import { useState } from 'react';

function CounterButton() {
    const [count, setCount] = useState( 0 );

    function handleClick() {
        setCount( count + 1 );
    }

    return (
        <div>
            <p>you have clicked this button {count} times</p>
            <button onClick = {handleClick}>click to count</button>
        </div>
    );
}


export default CounterButton;