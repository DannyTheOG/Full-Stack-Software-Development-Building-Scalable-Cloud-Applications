//Replace the App.js present in the src folder with this file 
//to run the Passing a function as a prop example as provided in 04_Implementing props and state in components deck

import React from 'react';
import Button from './components/04_Implementing props and state in components/2_Props Examples/3_Passing a function as a prop/Button';
const App = () => {
  function handleClick() {
    alert('Button clicked!');
  }
  return (
    
    <div>
    <Button onClick = {handleClick}/>
  </div>

  );
};

export default App;
