import { useState } from "react";


function Radio() {
  const [choice, setChoice] = useState( "" );

  const gender = [ "Male", "Female" ];
  const radios = gender.map( ( option, index ) => {
    return (
      <div key={index}>
        <input 
          type="radio"
          value={option}
          checked={choice === option}
          onChange={ ( event ) => setChoice( event.target.value ) }
        />
        {option}
      </div>
    )
  } )

  return(
    <>
      <h2>Radio Button</h2>
      Choose your gender:
      {radios}
    </>
  )
}


export default Radio;