//Replace the App.js present in the src folder with this file 
//to run the Props in React component example as provided in 04_Implementing props and state in components deck

import React from 'react';
import Welcome from './components/04_Implementing props and state in components/1_Props in React component/Welcome';
const App = () => {
  
  return (
    <div>
    <Welcome name="Harry" />
    <Welcome name="Ron" />
    <Welcome name="Hermione" />
  </div>

  );
};

export default App;
