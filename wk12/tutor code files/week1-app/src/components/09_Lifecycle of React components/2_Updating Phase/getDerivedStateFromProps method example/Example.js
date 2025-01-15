import React from "react";
class Example extends React.Component {
    static getDerivedStateFromProps(props, state) {
      if (props.value !== state.prevValue) {
        return {
          prevValue: props.value,
          updatedValue: props.value * 2
        };
      }
      return null;
    }
    state = { prevValue: null, updatedValue: null };

    render() {
      return (
        <div>
          <p>prevValue: {this.state.prevValue}</p>
          <p>updatedValue: {this.state.updatedValue}</p>
        </div>
      );
    }
  }
export default Example;    