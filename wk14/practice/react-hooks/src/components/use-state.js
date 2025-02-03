import { useState } from "react";

function UseState() {
    const [color, setColor] = useState( "blue" );

    const handleClick = () => {
        setColor( "red" );
    };

    return (
        <>
            <h1>UseState Hook</h1>
            <h3>My favorite color is {color}</h3>
            <button onClick={handleClick}>change color</button>
        </>
    );
}

export default UseState;
