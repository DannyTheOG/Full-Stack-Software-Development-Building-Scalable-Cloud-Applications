//Problem Statement 3
// Queue - Ticketing System

class TicketingSystem {
    constructor() {
        this.ticketQueue = [];
    }

    isEmpty() {
        if( this.ticketQueue.length === 0 ) return true;
        else return false;
    }

    enqueue( ticket ) {
        this.ticketQueue.push( ticket );
        console.log( `added: ${ticket}` );
    }

    dequeue() {
        if ( !this.isEmpty() ) {
            const ticket = this.ticketQueue.shift();
            console.log( `sold ${ticket}`);
            return;
        } else console.log( "TicketQueue is empty" );
    }
}


//-----------------------------------------------------------------------------

//Problem Statement 4
class EventQueue {
    constructor( capacity ) {
        this.waitingTime = 0;
        this.capacity = capacity;
        this.deniedEntry = 0;
        this.queue = [];
    }

    size() {
        return this.queue.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    enqueue( groupSize ) {
        this.queue.push( groupSize );
    }

    dequeue() {
        if( !this.isEmpty() ) return this.queue.shift();
        else return null;
    }

    processEventQueue() {
        while ( this.size() > 0 ) {
            const groupSize = this.dequeue();

            if( ( groupSize ) > this.capacity ) {
                this.deniedEntry += groupSize;

                console.log( `Entry denied to group of ${groupSize}` )

            } else {  
                this.capacity -= groupSize;

                console.log( `Entry provided to group of ${groupSize}, waiting time: ${this.waitingTime} minutes` );

                this.waitingTime += groupSize;
            }

        }
    }

    displayResult() {
        console.log( `Total ${this.deniedEntry} persons denied entry` );
        console.log( `Seats Available: ${this.capacity}`)
    }
}

// const line = [4,8,9,7,3,1,5,8,2,10,4,6,10,1,8,9,5,3,5] // case 1
// const line = [5,2,10,10,10,7,10,10,10,10,8,9,3] // case 2
const line = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]


const queue = new EventQueue( 100 );
for ( const groupSize of line ) {
    if (groupSize > 10) {
        console.log(`Group size ${groupSize} exceeds the limit of 10. Skipping.`);
        continue;
    }
    queue.enqueue(groupSize);
}
queue.processEventQueue();
queue.displayResult();





