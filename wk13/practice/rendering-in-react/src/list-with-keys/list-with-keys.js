function ListWithKeys() {
    const names = [
        { id: 1, first: "Joe" },
        { id: 2, first: "Wayne" },
        { id: 3, first: "Walker" },
        { id: 4, first: "Jason" }
    ];

    // keys must be unique for every element in a list
    // indexes can be used but they are not advisable for dynamic list element
    const headings = names.map( ( name ) => {
        return <h3 key = {name.id}>
                    {name.first}
                </h3>
    } )
    return(
        <>
            <h2>List with keys</h2>
            {headings}
        </>
    );
}


export default ListWithKeys;