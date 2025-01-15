//Replace the App.js present in the src folder with this file 
//to run the Passing an object as a prop example as provided in 04_Implementing props and state in components deck

import React from 'react';
import UserInfo from './components/04_Implementing props and state in components/2_Props Examples/2_Passing an object as a prop/UserInfo';
const App = () => {
  const user = { name: 'Ron', age: 13 }
  return (
    
    <div>
    <UserInfo user={user} />
  </div>

  );
};

export default App;
