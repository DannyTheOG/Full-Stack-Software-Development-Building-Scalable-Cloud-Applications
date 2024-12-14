class Stack {
    constructor() {
        this.top = -1;
        this.stack = [];
    }

    size() {
        return this.stack.length;
    }

    isEmpty() {
        if( this.top === -1 ) return true;
        else return false;
    }

    push( item ) {
        this.stack.push( item );
        this.top += 1;
        console.log( `added: ${item}`);
    }

    pop() {
       if( !this.isEmpty() ) {
           const item = this.stack.pop();
           this.top -= 1;
           console.log( `removed: ${item}` );
           return item
       } else console.log( "stack is empty" );
    }

    peek() {
        if( !this.isEmpty() ) {
            const item = this.stack[ this.top ];
            console.log( `top: ${item}`);
            return item;
        } else console.log( "stack is empty" );
    }
}

const stack = new Stack();
console.log( stack );

stack.push( 1 );
console.log( stack );

stack.push( 2 );
stack.push( 3 );
stack.push( 4 );
console.log( stack );

stack.pop();
console.log( stack );


stack.peek();
console.log( stack );

