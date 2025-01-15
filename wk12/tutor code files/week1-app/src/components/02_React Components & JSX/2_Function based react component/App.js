//Replace the App.js present in the src folder with this file 
//to run the Function based component example as provided in 03_React Components & JSX deck

import React from 'react';
import MyComponent from './components/02_React Components & JSX/2_Function based react component/MyComponent';
const App = () => {
  return (
    <div>
     <MyComponent title="Hello World" message="This is my first functional component" />
    </div>
  );
};
export default App;
