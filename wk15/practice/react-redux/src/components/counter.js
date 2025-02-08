import { connect } from "react-redux";

function Counter( props ) {
  
  return(
    <>
      <h1>React Redux</h1>
      <p>{props.counter}</p>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
    </>
  )
}

function mapStateToProps( state ) {
  return{
    counter: state.counter,
  };
}

function mapDispatchToProps( dispatch ) {
  return{
    increment: () => dispatch( { type: "increment" } ),
    decrement: () => dispatch( { type: "decrement" } )
  }
}


export default connect( mapStateToProps, mapDispatchToProps )( Counter );