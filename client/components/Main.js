import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/store";
  

const root = createRoot(document.getElementById("app"));

root.render(
    <Provider store={store}>
        <Router>

            <App />

        </Router>
    </Provider>


);
