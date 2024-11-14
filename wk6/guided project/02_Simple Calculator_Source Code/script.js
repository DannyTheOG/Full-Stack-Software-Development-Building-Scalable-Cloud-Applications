/* WRITE YOUR JAVASCRIPT CODE HERE */

let result = 0;
let operand1 = "";
let operand2 = "";
let operator = null;
let flip = false;

// get the current display on the screen
let currentDisplay = document.getElementById( "display" );

// display a single character on the screen
function displayCharacter( character ) {
    currentDisplay.textContent += character;
}

// display operators on the screen
let operators = document.getElementsByClassName( "operator" );

(function ( array ) {
    for (const character of array) {
        character.addEventListener( "click", function() {
            operator = character.textContent;

            displayCharacter( operator )

            flip = true;
        });
    }
})(operators)

let numbers =  document.getElementsByClassName( "number" );

(function ( array ) {
    for (const character of array) {
        character.addEventListener( "click", function() {
            let op = character.textContent;
            if ( !flip ) {
                operand1 += op;
                console.log( operand1 )
            } else {
                operand2 += op;
            }

            displayCharacter( op )
        });
    }
})(numbers)

// clear display
let clear = document.getElementById( "C" );
clear.addEventListener( "click", function() {
    currentDisplay.textContent = "";

    operand1 = "", operand2 = "";
    operator = null;
    flip = false;
});


// equal
let equal = document.getElementById( "equal" );
equal.addEventListener( "click", function() {
    operand1 = parseFloat( operand1 );
    operand2 = parseFloat( operand2 );

    if ( operand2 == 0 ) {
        currentDisplay.textContent = "Invalid Operation";
    } else {
        switch (operator) {
            case "+":
                result = operand1 + operand2
                break;
            case "-":
                result = operand1 - operand2
                break;
            case "*":
                result = operand1 * operand2
                break;
            case "/":
                result = operand1 / operand2
                break;
            default:
                result = "Invalid Operation"
                break;
        }

        operand1, operand2 = "";
        operator = null;
        flip = false;

        currentDisplay.textContent = result;
    }
} )


