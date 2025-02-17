import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const handleIncrement = () => dispatch({ type: "increment" });
  const handleDecrement = () => dispatch({ type: "decrement" });

  return (
    <div>
      <p>{counter}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default Counter;
