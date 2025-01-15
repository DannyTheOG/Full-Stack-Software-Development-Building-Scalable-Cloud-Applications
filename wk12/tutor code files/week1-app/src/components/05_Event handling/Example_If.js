import React from "react";

//////// Slide 8 //////////////
// Conditional Rendering using If-Else
function Example(props) {
  if (props.isLoggedIn === true) {
    return <p>Welcome back!</p>;
  } else {
    return <p>Please log in.</p>;
  }
}
export default Example;
