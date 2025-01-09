import { useState } from 'react';

function Example( props ) {
    const [count, setCount] = useState( 0 );

    const handleClick = () => {
        setCount( count + 1 );
    }
    

    return(
        <div>
            <p> props value: {props.message}</p>
            <p> state value: {count}</p>
            <button
                onClick={handleClick}
            >
                increment state value
            </button>
        </div>
    )
}


export default Example;