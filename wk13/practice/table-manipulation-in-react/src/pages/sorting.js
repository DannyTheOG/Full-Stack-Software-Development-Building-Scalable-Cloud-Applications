import { useState } from "react";

import Table from "../components/table";
import people from "../people";

function Sorting() {
  const [sortConfig, setSortConfig] = useState({
    key: "id",
    direction: "ascending"
  });

  const isAscending = sortConfig.direction === "ascending";

  function handleClick( key ) {
    const hasSwitched = sortConfig.key === key;
    const direction = hasSwitched && isAscending ? "descending" : "ascending";
    console.log( hasSwitched, isAscending, {key, direction} )
    
    setSortConfig( {key, direction} );
  }

  function getButtonClass( key ) {
    return sortConfig.key === key ? "sorted" : "";
  }

  people.sort( ( a, b ) => {
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if( aValue < bValue ) return isAscending ? -1 : 1 ;
    if( aValue > bValue ) return isAscending ? 1 : -1 ;;
    return 0;
  } )



  return(
    <>
      <h3>SORTING TABLE</h3>
      <button
        onClick={ () => handleClick( "id" ) }
        className={ getButtonClass( "id" )}
      >
        ID
      </button>
      <button
        onClick={ () => handleClick( "name" ) }
        className={ getButtonClass( "name" )}
      >
        NAME
      </button>
      <button
        onClick={ () => handleClick( "email" ) }
        className={ getButtonClass( "email" )}
      >
        EMAIL
      </button>
      <Table people={people}/>
    </>
  );
}


export default Sorting;