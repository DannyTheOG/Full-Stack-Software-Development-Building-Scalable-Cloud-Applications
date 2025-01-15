import React, { useState, useEffect } from 'react';
import SampleComponent from './SampleComponent';
class MyComponent extends React.Component {
    constructor(props){
        super(props)
        this.state={deleteSampleComponent:true}
    }
    
    render() {
        return (
        <div>
            <h1>My Component</h1>
            {this.state.deleteSampleComponent==true && <SampleComponent/>}
          </div>
        );
      }
}
export default MyComponent;      