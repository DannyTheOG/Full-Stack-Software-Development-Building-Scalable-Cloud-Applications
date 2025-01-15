//Replace the App.js present in the src folder with this file 
//to run the Form examples as provided in 06_Forms in React deck

import LoginForm from "./components-forms/06_Forms in React/ExampleFormFunctionComponent";
import SelectInput from "./components-forms/06_Forms in React/ExampleSelect";
import CheckInputs from "./components-forms/06_Forms in React/ExampleCheckBox";

function App(){
  return(
    <>
      <LoginForm />
      <SelectInput />
      <CheckInputs />
    </>
  )
}

export default App;