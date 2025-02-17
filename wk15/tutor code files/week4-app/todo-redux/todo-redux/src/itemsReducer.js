import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addItem(state, action) {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      });
    },
    toggleCompleted(state, action) {
      const item = state.find((i) => i.id === action.payload.id);
      item.completed = !item.completed;
    },
    deleteItem(state, action) {
      const index = state.findIndex((i) => i.id === action.payload.id);
      state.splice(index, 1);
    },
  },
});

export const { addItem, toggleCompleted, deleteItem } = itemSlice.actions;

export default itemSlice.reducer;
