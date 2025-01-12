import { useState } from 'react';

function SelectInput() {
    const [semester, setSemester] = useState("");

    const semesters = [ "first", "second", "third" ];
    const list = semesters.map( ( semester, index ) => {
        return <option key = {index} value = {semester}>{semester}</option>
    })

    function handleSelectedOption( event ) {
        const selectedOption = event.target.value

        console.log( event.target.value )
        setSemester( selectedOption );
    }

    return(
        <div>
            Select semester: 
            <select
                value = {semester}
                onChange = {handleSelectedOption}
            >
                {list}
            </select>
        </div>
    );
}


export default SelectInput;