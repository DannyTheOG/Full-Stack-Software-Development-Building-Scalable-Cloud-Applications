class Queue {
    constructor() {
        this.front = -1;
        this.rear = -1;
        this.queue = [];
    }

    size() {
        return this.queue.length;
    }

    isEmpty() {
        if( this.rear === -1 ) return true;
        else return false;
    }

    enqueue( item ) {
        if( this.isEmpty() ) this.rear += 1;
        this.queue.push( item );
        this.front += 1;
        console.log( `enqueued: ${item}`);
    }

    dequeue() {
        if ( !this.isEmpty() ) {
            const item = this.queue.shift();
            this.front -= 1;
            console.log( `dequeued: ${item}` );
            return item;
        } else {
            this.rear -= 1;
            console.log( "queue is empty" );
        }
    }

    getFront() {
        if( !this.isEmpty() ) {
            const item = this.queue[ this.front ];
            console.log( `front of queue: ${item}`);
            return item;
        } else console.log( "queue is empty" );
    }

    getRear() {
        if( !this.isEmpty() ) {
            const item = this.queue[ this.rear ];
            console.log( `end of queue: ${item}`);
            return item;
        } else console.log( "queue is empty" );
    }
}


const queue = new Queue();
console.log( queue );

queue.enqueue( 1 );
console.log( queue );

queue.enqueue( 2 );
queue.enqueue( 3 );
queue.enqueue( 4 );
console.log( queue )

queue.dequeue();
console.log( queue );

queue.getFront();
queue.getRear();
console.log( queue )
