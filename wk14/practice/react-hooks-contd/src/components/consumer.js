import { useContext } from "react";
import MyContext from "./context";

function MyConsumer() {
  const value = useContext( MyContext );

  return(
    <>
      <h1>{value.data}</h1>
      <button
        onClick={ () => ( value.setData( "get ready" ) ) }
      >
        update context
      </button>
    </>
  )
}


export default MyConsumer;