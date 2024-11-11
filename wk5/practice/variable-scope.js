 var global_x = 1; // global variable
 console.log( "outside of function global_x = " + global_x );

 function printValue() {
    var local_x = 2;
    
    console.log( "inside of function global_x = " + global_x );
    console.log( "inside of function local_x = " + local_x );
 }

 printValue();
 
 console.log( "outside of function local_x = " + local_x );