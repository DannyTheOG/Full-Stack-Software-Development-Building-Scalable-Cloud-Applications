import React from 'react'


class SampleComponent extends React.Component {
    // this constructor is provided by default
    // constructor( props ) {
    //     super( props );
    // }

    componentWillUnmount() {
        alert( "deleting component" );
    }

    render() {
        return(
            <h3>Sample Unmounted Component</h3>
        )
    }
}


export default SampleComponent;