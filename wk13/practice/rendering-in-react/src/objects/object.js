// import { useState } from "react";

function Objectt() {
    const employees = {
        accountant: { firstname: "liz", surname: "brown" },
        manager: { firstname: "eve", surname: "james" },
    }

    // the object.entries() function is used to return an array of a given object's key-value pairs. each element in the returned array is itself an array, where the first element is the property key and the second element is the value.
    const entries = Object.entries( employees );
    // console.log( entries )
    const employeesList = entries.map( ( [key, value] ) => {
        return <li key = {key}>{value.firstname} {value.surname}</li>
    } )

    return(
        <>
            <h2>List</h2>
            <ul>{employeesList}</ul>
        </>
    )
}


export default Objectt;