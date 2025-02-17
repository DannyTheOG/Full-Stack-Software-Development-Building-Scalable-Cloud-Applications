import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem, toggleCompleted } from "./itemsReducer";

function App() {
  const todos = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const handleAddNewItem = () => {
    dispatch(addItem({ id: Date.now(), text: "New item" }));
  };

  const handleChange = (id) => {
    dispatch(toggleCompleted({ id }));
  };

  const handleDelete = (id) => {
    dispatch(deleteItem({ id }));
  };

  return (
    <div className="App">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleChange(todo.id)}
            />
            {todo.text}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddNewItem}>Add new item</button>
    </div>
  );
}

export default App;
