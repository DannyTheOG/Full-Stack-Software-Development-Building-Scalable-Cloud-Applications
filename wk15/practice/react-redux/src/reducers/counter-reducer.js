const initialState = {
  counter: 0
};


function CounterReducer( state = initialState, action ) {
  if( action.type === "increment" ) {
    return {
      ...state,
      counter: state.counter + 1
    }
  };
  if( action.type === "decrement" ) {
    return {
      ...state,
      counter: state.counter - 1
    }
  };

  return state;
}


export default CounterReducer;