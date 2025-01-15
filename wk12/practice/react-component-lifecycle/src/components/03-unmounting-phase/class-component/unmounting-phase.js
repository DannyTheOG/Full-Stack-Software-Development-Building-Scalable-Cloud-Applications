import React from "react";
import SampleComponent from "./sample-component";

class UnmountingPhase1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { deleteSampleComponent: true };
    }

    render() {
        return (
            <>
                <h2>Unmounting Phase - Class Component</h2>
                {this.state.deleteSampleComponent && <SampleComponent />}
            </>
        );
    }
}

export default UnmountingPhase1;
