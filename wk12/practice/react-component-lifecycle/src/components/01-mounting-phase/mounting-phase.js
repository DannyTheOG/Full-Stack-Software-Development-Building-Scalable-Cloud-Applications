import React from 'react'

class MountingPhase extends React.Component {
    constructor( props ) {
        super( props );
        this.state = { greeting: "welcome back!" };
        this.checkClick = this.checkClick.bind( this ); // you can avoid this bind by making checkClick and arrow function
    }

    checkClick() {
        this.setState( { greeting: "happy coding!" } );
    }

    render() {
        return(
            <div>
                <h2>Mounting Phase</h2>
                <h3>{this.state.greeting}</h3>
                <button onClick = { this.checkClick }>click me</button>
            </div>
        )
    }

}

export default MountingPhase;