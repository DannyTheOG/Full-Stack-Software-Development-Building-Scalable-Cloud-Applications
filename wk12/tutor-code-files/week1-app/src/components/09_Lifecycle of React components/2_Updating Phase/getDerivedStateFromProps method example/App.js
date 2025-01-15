//Replace the App.js present in the src folder with this file 
//to run the getDerivedStateFromProps() example as provided in 09_Lifecycle of React components

import React from 'react';
import Example from './components/09_Lifecycle of React components/2_Updating Phase/getDerivedStateFromProps method example/Example';
const App = () => {
  
  return (
   <>
   <Example value="1"/>
   <Example value="2"/>
   </>
  );
};

export default App;
