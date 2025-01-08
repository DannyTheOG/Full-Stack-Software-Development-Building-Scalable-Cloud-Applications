import React, { Component } from 'react';

class MyComponent extends Component {
    constructor(props) {
        super( props );
        this.state = {
            message: 'happy coding'
        }
    }

   render() {
        return (
            <div>
                <h1>Class-based component</h1>
                <h1> {this.state.message} </h1>
            </div>
        )
   }
}

export default MyComponent;