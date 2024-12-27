try {
    greet();
    console.log( "after greet" );
} catch (error) {
    console.log( "error msg: ", error.message );
} finally{
    console.log( "inside the finally block" );
}

console.log( "after error handling")