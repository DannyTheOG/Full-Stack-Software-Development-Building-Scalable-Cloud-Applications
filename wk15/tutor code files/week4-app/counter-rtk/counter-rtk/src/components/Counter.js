import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../counterReducer";

function Counter() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());

  return (
    <>
      <p>{value}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </>
  );
}

export default Counter;
