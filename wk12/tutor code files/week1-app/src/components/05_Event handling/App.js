//Replace the App.js present in the src folder with this file 
//to run the Event handling and conditional rendering examples as provided in 05_Event Handling and Conditional Rendering in React deck

//import logo from './logo.svg';
//import './App.css';
import { useState } from 'react';
import CountComponent from "./components/05_Event handling/CountComponent";
import ExampleComponent from './components/05_Event handling/Example_&&';
import Example from './components/05_Event handling/Example_If';
import ExampleSwitchComponent from './components/05_Event handling/Example_switch';

function App() {
  return (
    <div className="App">
      <CountComponent />
      <ExampleComponent />
      <Example isLoggedIn = {true}/>
      <ExampleSwitchComponent status = {"Loading"}/>
    </div>
  );
}


/////// Slide 5 ///////////////
// Event Handling - Parameter Passing
// function App(){
//   const [product, setProduct] = useState("");
//   const addProduct =(product) => {
//     console.log(product);
//   }
//   return (
//     //Creating an arrow function and passing parameter
//     <>
//       <input value={product} onChange={(e) => setProduct(e.target.value)} ></input>
//       <button onClick={() => addProduct(product)}>Add Product</button>    
//     </>
//   );
// }

/////// Slide 8 ///////////////

// function ExistingUser() {
//   return <h1>Welcome back!</h1>;
// }


// Conditional Rendering Using Ternary Operator
// function NewUser() {
//   return <h1>Please sign up.</h1>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   return isLoggedIn ? <ExistingUser /> : <NewUser />;
// }

// function App(){
//   return <Greeting isLoggedIn = {true}/>;
// }

export default App;
