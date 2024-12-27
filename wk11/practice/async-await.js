const fetchPosts = async () => {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let data = await response.json();
        console.log( data );
    } catch (error) {
        console.log( error.message );
    }
}

fetchPosts();

const postTodo = async () => {
    const newTodo = {
        title: "foo",
        body: "bar",
        userId: 1
    };

    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: JSON.stringify( newTodo ),
            headers: {
                "Content-Type": "application/json"
            }
        });
        let data = await response.json();
        console.log( data );
    } catch (error) {
        console.log( error.message );
    }
}

postTodo();