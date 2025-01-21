import { useState } from "react";

function ArrayOfObject() {
    const [people, setPeople] = useState( [
        {id: 10, username: "joe"},
        {id: 11, username: "kev"}
    ] );

    const [username, setUsername] = useState("");

    const peopleList = people.map( person => {
        return <li key = {person.id}>{person.username}</li> 
    } );

    function handleAdd() {
        const idList = people.map( ( person ) => person.id );
        const maxId = Math.max( ...idList );
        const newPerson = {
            id: ( maxId + 1 ),
            username: username
        };
        const newPeople = [...people, newPerson];
        setPeople( newPeople );
        setUsername("");
    }

    function handleRemove() {
        const filteredPeople = people.filter( ( person ) => person.username !== username );
        setPeople( filteredPeople );
        setUsername("");
    }
    
    return(
        <>
            <h2>Array of Objects</h2>
            <input  
                value={username}
                onChange={ ( event ) => setUsername( event.target.value ) }
            />
            <button onClick = {handleAdd}>add</button>
            <button onClick = {handleRemove}>remove</button>
            <ul>{peopleList}</ul>
        </>
    );
}


export default ArrayOfObject;