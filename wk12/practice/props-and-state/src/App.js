import './App.css';
import UserInfo from './props-components/user-info';
import Button from  './props-components/button';
import List from './props-components/list';
import CounterButton from './state-components/counter';
import Form from './state-components/form';
import Dropdown from './state-components/dropdown';
import Example from './state-and-props/example';


function App() {
  const user = {
    name: 'john doe',
    age: 25,
  }

  function handleClick() {
    alert(`Welcome ${user.name}`);
  }

  const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];


  return (
    <>
      <div className = "props">
        <h3>props examples</h3>

        <UserInfo user = {user} />

        <Button onClick = {handleClick} />

        <List items = {fruits} />
      </div>

      <hr />

      <div className = "state">
        <h3>state examples</h3>

        <CounterButton /> <br/>

        <Form /> <br/>

        <Dropdown />
      </div>

      <hr />

      <div className = "state and props">
        <h3>state and props examples</h3>

        <Example message = 'Welcome' />
      </div>

    </>
  );
}

export default App;
