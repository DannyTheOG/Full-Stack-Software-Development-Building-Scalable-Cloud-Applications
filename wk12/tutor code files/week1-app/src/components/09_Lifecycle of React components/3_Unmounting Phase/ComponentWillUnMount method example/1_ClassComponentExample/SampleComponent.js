import React, { useState, useEffect } from 'react';
class SampleComponent extends React.Component {
    constructor(props){
        super(props)
    }
    componentWillUnmount(){
        alert("deleting")
    }
    render() {
        return (
        <div>
            <h1>Sample Component</h1>
          </div>
        );
      }
}
export default SampleComponent;      