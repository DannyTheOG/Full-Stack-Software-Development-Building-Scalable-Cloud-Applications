import { useState } from 'react';


function AndOperatorExample() {
    const [showHide, setShowHide] = useState( true );


    return(
        <>
            <button onClick = {() => setShowHide( !showHide )}>
                Click to Show/Hide
            </button>

            {/* 
                JSX components are always true;

                if {showHide} is true, the expression resolves to
                    true && true
                else it resolves to false && true

                this creates an if-logic
            */}
            { showHide && <h1>Show/Hide Text</h1> }
        </>
    )
}


export default AndOperatorExample;