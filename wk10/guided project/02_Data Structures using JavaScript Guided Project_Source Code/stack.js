//Problem Statement 1
// Stack - BookStore Inventory 

class BookStoreInventory {
    constructor() {
        this.inventoryStack = [];
    }

    isEmpty() {
        if( this.inventoryStack.length === 0 ) return true;
        else return false;
    }

    addBook( book ) {
        this.inventoryStack.push( book );
        console.log( `added ${book}`)
    }

    sellBook() {
       if( !this.isEmpty() ) {
           const book = this.inventoryStack.pop();
           console.log( `sold ${book}`);
       } else console.log( "BookStore is empty" );
    }

    checkStock() {
        if( !this.isEmpty() ) return this.inventoryStack[0]
    }
}


//-----------------------------------------------------------------------------

//Problem Statement 2

function evalPostFix( expression ) {
    let stack = [];

    for ( let i = 0; i < expression.length; i++ ) {
        const char = expression[i];
        
        if ( !isNaN( char )) {
            stack.push( parseInt( char ) );
        } else {
            const operand2 = stack.pop();
            const operand1 = stack.pop();

            switch ( char ) {
                case "+":
                    stack.push( operand1 + operand2 );
                    break;
                case "-":
                    stack.push( operand1 - operand2 );
                    break;
                case "*":
                    stack.push( operand1 * operand2 );
                    break;
                case "/":
                    stack.push( operand1 / operand2 );
                    break;
                default:
                    console.error( "invalid operator" );
                    return NaN;
            }
        }
    }

    return stack.pop();
}

console.log( evalPostFix( "622*+8-" ) )

console.log( evalPostFix( "421*-7-" ) )