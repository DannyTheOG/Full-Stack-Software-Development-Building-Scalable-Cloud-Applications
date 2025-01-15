import { useState, useEffect  } from "react";

function UnmountingPhase2() {
    const [ isMounted, setIsMounted] = useState( false );

    useEffect( () => {
        return () => {
            setIsMounted( true );
        }
    }, [] )

    if( !isMounted ) {
        return null;
    }

    return(
        <h2>Unmounting Phase - Functional Component</h2>
    );
}


export default UnmountingPhase2;