//Replace the App.js present in the src folder with this file 
//to run the React component using JSX example as provided in 03_React Components & JSX deck

import React from 'react';
import Welcome from './components/02_React Components & JSX/3_React component using JSX/Welcome';
const App = () => {
  return (
    <div>
     <Welcome name="Harry Potter" />
    </div>
  );
};
export default App;
