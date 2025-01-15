import React from "react";

class Counter extends React.Component {
  state = {
    clickCount: 0,
  };
  checkClick = () => {
    this.setState({ clickCount: this.state.clickCount + 1 });
  };
  render() {
    return (
      <div>
        <p>Count: {this.state.clickCount}</p>
        <button onClick={this.checkClick}>Click Here</button>
      </div>
    );
  }
}

 
    
export default Counter;      