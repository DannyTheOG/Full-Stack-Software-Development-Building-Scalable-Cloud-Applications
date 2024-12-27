const xhr = new XMLHttpRequest();

xhr.open( "GET", "https://jsonplaceholder.typicode.com/posts" );

xhr.send();

xhr.onload = function() {
  console.log( "response: ", xhr.responseText );
}

// alternative way to listen to the load event
// xhr.addEventListener( "load", function() {
//   console.log( "response: ", xhr.responseText );
// } );


// check fetch.js for the fetch API example.