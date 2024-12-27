// GET request to fetch data from a server
fetch( "https://jsonplaceholder.typicode.com/posts" )
    .then( response => response.json())
    .then( data => console.log( "response: ", data ) )
    .catch( error => console.log( "error: ", error.message ) );



// POST request to send data to a server
const newTodo = {
    title: "foo",
    body: "bar",
    userId: 1
};
fetch( "https://jsonplaceholder.typicode.com/posts",
    {
        method: "POST",
        body: JSON.stringify( newTodo ),
        headers: {
            "Content-Type": "application/json"
        }
    }
 )
    .then( response => response.json() )
    .then( data => console.log( "response: ", data ) )
    .catch( error => console.log( "error: ", error.message ) );