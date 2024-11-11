/**
    history object is a property of the window object that contains the URLs visited by the user. 
    it has three main methods:- back(), forward(), go().
    it keeps a stack of pages.
*/
console.log( history );

history.back();

history.forward();

/** 
    go( steps )
    -ve values goes backwards 
    +ve values go forward 
*/
history.go( -2 ); // goes backwards 2 time.

history.go( 3 ); // goes forward 3 times


// explore
history.pushState();