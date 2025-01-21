import { useState } from 'react';

function Sett() {
    const [ name, setName ] = useState("");
    const [ names, setNames ] = useState( [
        "Joe",
        "Wayne",
        "Walker",
        "Jason"
    ] );

    function handleAdd() {
        // a new set must be passed each time  rendering is needed
        const newNamesSet = new Set( names );
        newNamesSet.add( name );
        setNames( newNamesSet );
    }

    const namesList = [...names];   
    const headings = namesList.map( ( name ) => {
        return <li key = {name}>{name}</li>
    } )

    return(
        <>
            <h2>Set</h2>
            <input 
                type = "text"
                value = {name}
                onChange = { (event ) => setName( event.target.value ) }
            />
            <button onClick = {handleAdd}>add</button>
            <ul>{headings}</ul>
        </>
    );
}


export default Sett;