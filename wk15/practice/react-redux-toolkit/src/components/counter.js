import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../reducers/counter-reducer";

function Counter() {
    const counter = useSelector((state) => state.counter.value);

    const dispatch = useDispatch();
    const handleIncrement = () => dispatch(increment());
    const handleDecrement = () => dispatch(decrement());

    return (
        <>       
            <h1>React Redux Toolkit</h1>
            <p>{counter}</p>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>   
        </>
    );
}

export default Counter;
