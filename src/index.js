import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
import App from "./containers/App";
import { Provider } from "react-redux";
import logger from "redux-logger";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { searchRobotReducer, requestRobotsReducer } from "./reducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({searchRobotReducer, requestRobotsReducer})
const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
