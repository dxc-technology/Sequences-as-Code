/* istanbul ignore file */
import React from 'react';
import { render } from "react-dom";
//import { BrowserRouter as Router } from "react-router-dom";
import { HashRouter } from 'react-router-dom'
import App from './App';
import * as serviceWorker from './serviceWorker';

// STYLES
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);

//ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
