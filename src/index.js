import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./features/app/App";
import store from "./features/app/appStore";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
