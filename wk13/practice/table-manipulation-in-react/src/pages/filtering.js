import { useState } from "react";

import Table from "../components/table";
import people from "../people";

function Filtering() {
  const [filteredValue, setFilteredValue] = useState("");

  const filteredList = people.filter( ( person ) => {
    const searchTerm = filteredValue.toLowerCase();
    
    return ( person.name.toLowerCase().includes( searchTerm ) || 
    person.email.toLowerCase().includes( searchTerm ) );
  } );

  return(
    <>
      <h3>FILTERING TABLE</h3>
      Filter:
      <input 
        value={filteredValue}
        onChange={ ( event ) => setFilteredValue( event.target.value ) }
      />
      <Table people={filteredList}/>
    </>
  );
}


export default Filtering;