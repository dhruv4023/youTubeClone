import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

// Redux Toolkit simplifies the store configuration
const store = configureStore({
  reducer: rootReducer,
  // You can add any middleware here, `thunk` is included by default
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

