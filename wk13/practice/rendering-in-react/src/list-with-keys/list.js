function List() {
    const names = [
        "Joe",
        "Wayne",
        "Walker",
        "Jason"
    ];

    // keys must be unique for every element in a list
    // indexes can be used but they are not advisable for dynamic list element
    const headings = names.map( ( name ) => {
        return <h3>{name}</h3>
    } )
    return(
        <>
            <h2>List without keys</h2>
            {headings}
        </>
    );
}


export default List;