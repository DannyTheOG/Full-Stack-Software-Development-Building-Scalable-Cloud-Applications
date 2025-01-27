import { useState } from "react";
import countries from "./countryPhoneCodes"

function Dropdown() {
  const [selectedOption, setSelectedOption] = useState( "" );
  console.log( selectedOption );

  function handleSelectedOption( event ) {
    setSelectedOption( event.target.value )
  }

  return(
    <>
      <h2>Dropdown</h2>
      <select 
        value={selectedOption} 
        onChange={handleSelectedOption}
      >
        {
          countries.map( ( country ) => (
            <option 
              key={country.iso}
              value={country.iso}
            >
              {country.name}
            </option>
          ) )
        }
      </select>
    </>
  )
}


export default Dropdown;