import { useRef } from "react";

function UseRef() {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.focus(); // this focuses on the textbox
        console.log( "input value: ", inputRef.current.value )
    };

    return (
        <>
            <h1>UseRef Hook</h1>
            <input ref={inputRef} />
            <button onClick={handleClick}>focus</button>
        </>
    );
}

export default UseRef;
