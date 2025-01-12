import { useState } from 'react';

function CheckboxInput() {
    const [isCheckedAI, setIsCheckedAI] = useState( false );
    const [isCheckedDS, setIsCheckedDS] = useState( false );
    const [isCheckedCS, setIsCheckedCS] = useState( false );

    const changeHandlerAI = ( event ) => {
        setIsCheckedAI( event.target.checked );
        console.log( "isCheckedAI", event.target.checked );
    };

    const changeHandlerDS = ( event ) => {
        setIsCheckedDS( event.target.checked );
        console.log( "isCheckedDS", event.target.checked );
    }

    const changeHandlerCS = ( event ) => {
        setIsCheckedCS( event.target.checked );
        console.log( "isCheckedCS", event.target.checked );
    }


    return(
        <div>
            Select Courses:
            <div>
                <input 
                    type = "checkbox"
                    value = "Artificial Intelligence"
                    checked = {isCheckedAI}
                    onChange = { changeHandlerAI }
                />
                Artificial Intelligence
            </div>
            <div>
                <input 
                    type = "checkbox"
                    value = "Data Science"
                    checked = {isCheckedDS}
                    onChange = { changeHandlerDS } 
                />
                Data Science
            </div>
            <div>
                <input 
                    type = "checkbox"
                    value = "Cyber Security"
                    checked = {isCheckedCS}
                    onChange = { changeHandlerCS }
                />
                Cyber Security
            </div>
        </div>
    );
}


export default CheckboxInput;