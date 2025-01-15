import React from 'react';

class UpdatingPhase extends React.Component {
    static getDerivedStateFromProps( props, state ) {
        if( props.value !== state.previousValue ) {
            return {
                previousValue: props.value,
                updatedValue: props.value * 2
            };
        }
    }

    state = { 
        previousValue: null,
        updatedValue: null
    };

    render() {
        return (
            <>
                <h2>Updating Phase</h2>
                <h3>previous prop value: {this.state.previousValue}</h3>
                <h3>updated prop value: {this.state.updatedValue}</h3>
            </>
        )
    }
}


export default UpdatingPhase;