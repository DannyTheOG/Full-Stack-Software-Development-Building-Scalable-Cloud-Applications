//Replace the App.js present in the src folder with this file 
//to run the Passing string as a prop example as provided in 04_Implementing props and state in components deck

import React from 'react';
import Greeting from './components/04_Implementing props and state in components/2_Props Examples/1_Passing a string as a prop/Greeting';
const App = () => {
  
  return (
    
    <div>
    <Greeting name="Harry" />;
  </div>

  );
};

export default App;
