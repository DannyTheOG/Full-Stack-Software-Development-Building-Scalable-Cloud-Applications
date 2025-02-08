import React, { useReducer } from 'react'

const colors = [ "red", "blue", "green", "orange", "yellow", "purple", "brown", ]

function reducer( state, action ) {
  switch( action.type ) {
    case "selectColor":
      return {color: action.payload};
    
    default:
      throw new Error();
  }
}

function UseeReducer() {
  const [state, dispatch] = useReducer( reducer, {color: ""} );

  function handleColorChange( event )  {
    dispatch( {type: "selectColor", payload: event.target.value} );
  } 

  return(
    <>
      <h1>UseReducer Hook</h1>
      <h3>what's your favorite color</h3>
      <select value={state.color} onChange={handleColorChange}>
        <option value="">select a color..</option>
        {
          colors.map( ( color ) => {
            return <option key={color} value={color}>{color}</option>
          } )
        }
      </select>
      {state.color && <p>you selected {state.color}</p>}
    </>
  )
}


export default UseeReducer;