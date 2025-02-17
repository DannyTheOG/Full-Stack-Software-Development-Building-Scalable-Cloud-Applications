import itemsReducer from "./itemsReducer";
import { configureStore } from "@reduxjs/toolkit";

// const store = createStore(itemReducer);

const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});

export default store;
