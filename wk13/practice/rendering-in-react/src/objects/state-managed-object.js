import { useState } from "react"

function StateManagedObject() {
    const [customer, setCustomer] = useState({
        username: "",
        phone: ""
    });

    function handleChange( event, key ) {
        setCustomer( {
            ...customer,
            // dynamic key syntax enables the use of variables or expressions as keys when working with objects. This is especially useful when the property name is unknown beforehand or depends on a runtime value.
            [key]: event.target.value
        } )
    }

    return (
        <>
            <h2>State Managed Object</h2>
            <div>Username</div>
            <input
                value={customer.username}
                onChange={ ( event ) => { handleChange( event, "username" ) } }
            />
            <div>Phone</div>
            <input
                value={customer.phone}
                onChange={ ( event ) => { handleChange( event, "phone" ) } }
            />
            <p>{customer.username}: {customer.phone}</p>
        </>
    )
}


export default StateManagedObject;