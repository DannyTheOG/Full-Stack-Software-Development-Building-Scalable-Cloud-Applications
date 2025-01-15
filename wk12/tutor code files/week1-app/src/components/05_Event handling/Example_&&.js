import React, { useState } from 'react';

/////// Slide 12 ////////////////
// Conditional Rendering Using && Operator
const ExampleComponent = () => {
    const [ showHide, setShowHide] = useState(true);

    const  toggleHandler = () => {
      setShowHide(!showHide);
    }
  
     return (
     <div>
        <button onClick={toggleHandler}>Show/Hide</button>
        {showHide && <h1>SHOW/HIDE Text</h1>}
     </div>); 
};

export default ExampleComponent;
