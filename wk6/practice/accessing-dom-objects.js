/*
    using the 'document.documentElement.child', we can understand the exact hierarchy for the document
    then use the syntax 'document.documentElement.childNodes[0]...', since the child nodes are all arranged as an array.
*/
console.log( document.documentElement.childNodes)

// change webpage background color from the developer tools console
document.documentElement.style.backgroundColor = "green";

// change webpage title from the developer tools console
document.title = "New Title";