import React from "react";
class MyComponent extends React.Component {
    render() {
      return (
        <div>
          <h2>Hi, {this.props.name}!</h2>
          <p>This is a simple example of a render method in a React component.</p>
        </div>
      );
    }
  }
  export default MyComponent;      