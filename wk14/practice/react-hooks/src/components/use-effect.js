import { useState, useEffect } from 'react'

function UseEffect() {
  const [color, setColor] = useState( "#0000FF" );
  
  /**
    if the dependency array is empty, useEffect hook is only triggered once. 
    else useEffect is triggered based on the change of data in the dependency array  
  */
  useEffect( () => {
    alert( "color changed" );
  }, [color] )

  const handleChange = ( event ) => {
    setColor( event.target.value );
  }

  return(
    <>
      <h1>UseEffect Hook</h1>
      <h3>My favorite color is {color}</h3>
      Select color: 
      <input
        type='color'
        value={color}
        onChange={handleChange}
      />
    </>
  )
}


export default UseEffect;