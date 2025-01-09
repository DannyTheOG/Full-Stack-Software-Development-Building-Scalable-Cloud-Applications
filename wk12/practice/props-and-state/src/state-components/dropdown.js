import { useState } from 'react';
import countryPhoneCodes from './countryPhoneCodes'

let countries = [...countryPhoneCodes];

function Dropdown() {
    const [selectOption, setSelectOption] = useState( "" );

    function handleSelectOption( event ) {
        setSelectOption( event.target.value );
    }

    const countriesList = countries.map( ( country ) => {        
        return ( 
            <option 
                key = {country.iso}
                value = {country.code}
            >
                {country.name}
            </option> 
        );
    });

    return(
        <div>
            <label>Select your country: </label>
            <select
                value = {selectOption}
                onChange = {handleSelectOption}
            >
                {countriesList}
            </select>
            <p>your country code is: +({selectOption})</p>
        </div>
    );
}


export default Dropdown;