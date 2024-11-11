/*
    Write a program to create an object of a book having different properties 
    like ‘name’ , ’authors’ , ’publication year’ and ‘publisher’.

    Add a property called ‘change name’ as a function to change the name of the current book object.
    Add a property called ‘addAuthors’ as a function to the book object to add more authors to this current book object.
*/

var book = {
    name: "The Great Gatsby",
    authors: ["F. Scott Fitzgerald"],
    publication_year: 1925,
    publisher: "Charles Scribner's Sons"
}

book["change name"] = function( newName ) {
    this.name = newName;
}

book.addAuthors = function( author ) {
    this.authors.push( author );
}

console.log( book );
book["change name"]( "Python" );

console.log( book );

book.addAuthors( "Harshit" );
console.log( book );