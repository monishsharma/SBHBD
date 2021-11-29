import React from 'react';
import ReactDOM from 'react-dom';
import Routes from "./routes";
import { Router } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import history from "./history";

ReactDOM.render(
  <Router history={history}>
    <Routes />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
