/*
    location object is a property of the window object that contains information about the current URL. 
    it has properties like 'port', 'hostname' that helps identify the location of a particular URL.
*/
console.log( location );

// location can be used to set browser URL programmatically
location = "https://medium.com";

// or
location.href = "https://medium.com";

// it has three main methods, assign(), reload() and replace().
location.assign( "https://medium.com" );

// replace() removes the current page from the history stack and replaces it with the set value.