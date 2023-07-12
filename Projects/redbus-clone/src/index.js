import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import travelReducer from "./features/Travel";

export const store = configureStore({
  reducer: {
    travel: travelReducer,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
