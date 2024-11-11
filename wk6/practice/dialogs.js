// alert() is a blocking method
alert( "This is for your information" );
console.log( "after alert dialog" );


// confirm() is also a blocking method
let result = confirm( "Do you want to exit the website?" );
console.log( result );


// prompt
let answer = prompt( "Enter your favorite city." );
console.log( answer );