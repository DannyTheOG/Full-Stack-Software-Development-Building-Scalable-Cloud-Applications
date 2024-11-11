/*
    Write a program in JavaScript to print the below given pattern-


    *****

    ****

    ***

    **

    *

    **

    ***

    ****

    *****
*/

for (var i = 5; i > 0; i--) {
    var s = '';
    for (var j = i; j > 0; j--) {
        s += '*';
    }
    console.log(s);
}

for (var i=1; i < 5; i++) {
    var s = '';
    for (var j=0; j<= i; j++) {
        s += '*';
    }
    console.log(s);
}
