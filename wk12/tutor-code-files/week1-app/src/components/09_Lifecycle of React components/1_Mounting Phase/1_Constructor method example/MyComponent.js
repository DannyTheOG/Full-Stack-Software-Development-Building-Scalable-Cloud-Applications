import React from "react";
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { greeting: "Hello, Welcome to the world of React!" };
      this.checkClick = this.checkClick.bind(this);
    }
    checkClick() {
        this.setState({ greeting: "Hello, We are learning React!" });
      }
      render() {
        return (
          <div>
            <p>{this.state.greeting}</p>
            <button onClick={this.checkClick}>Click Here</button>
          </div>
        );
      }
    }
export default MyComponent;      