import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "selectColor":
      return { color: action.payload };
    default:
      throw new Error();
  }
}

function FavoriteColor({ colors }) {
  const [state, dispatch] = useReducer(reducer, { color: "" });

  const handleColorChange = (event) => {
    dispatch({ type: "selectColor", payload: event.target.value });
  };

  return (
    <div>
      <h1>What's your favorite color?</h1>
      <select value={state.color} onChange={handleColorChange}>
        <option value="">Select a color...</option>
        {colors.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
      {state.color && <p>You selected {state.color}!</p>}
    </div>
  );
}

export default FavoriteColor;
