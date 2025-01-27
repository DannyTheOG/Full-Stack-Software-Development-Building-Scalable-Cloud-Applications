import { useState } from "react";

import Table from "../components/table";
import "../styles/style.css";
import people from "../people";

function Pagination() {
  const [currentPage, setCurrentPage] = useState( 1 );
  const pageSize = 3
  const totalPages = Math.ceil( people.length / pageSize );
  const start = ( currentPage - 1 ) * pageSize;
  const end = start + pageSize;
  
  const paginatedList = people.slice( start, end );

  function handlePagination( page ) {
    setCurrentPage( page );
  }

  function handlePrevious() {
    const previous = (currentPage - 1) % totalPages;
    setCurrentPage( previous );
    console.log( previous )
  }

  function handleNext() {
    const nextPage = (currentPage % totalPages) + 1;
    setCurrentPage( nextPage );
  }


  return(
    <>
      <h3>PAGINATION</h3>
      <Table people={paginatedList} />
      <div>
        {
          currentPage > 1 &&
          <button
          onClick={ handlePrevious}
          >
            &lt;
          </button>
        }
        {
          // create an array of number from 1 to value of totalPages
          Array(totalPages).fill(1).map( (page, index ) => {
            return(
              <span 
                key={index+1}
                onClick={ () => handlePagination( (index + 1) ) }
              >
                {index + 1}
              </span>
            );
          } )
        }
        {
          currentPage < totalPages &&
          <button
          onClick={ handleNext }
          >
            &gt;
          </button>
        }
      </div>
    </>
  )
}


export default Pagination;