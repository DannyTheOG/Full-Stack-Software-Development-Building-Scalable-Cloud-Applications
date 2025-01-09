import { useState } from 'react';

function Form() {
    const [inputValue, setInputValue] = useState( '' );

    function handleOnChange( event ) {
        setInputValue( event.target.value );
    }

    return (
        <div>
            <label>Enter your name: </label>
            <input
                type = "text"
                value = {inputValue}
                onChange = {handleOnChange}
            />
            <p>your name is {inputValue}</p>
        </div>
    )
}


export default Form;