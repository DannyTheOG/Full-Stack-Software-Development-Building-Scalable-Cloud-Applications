//Replace the App.js present in the src folder with this file 
//to run the Passing an array as a prop example as provided in 04_Implementing props and state in components deck

import React from 'react';
import List from './components/04_Implementing props and state in components/2_Props Examples/4_Passing an array as a prop/List';
const App = () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];
  return (
    
    <div>
    <List items = {items}/>
  </div>

  );
};

export default App;
