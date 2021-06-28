import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './homepage/Homepage.js';
import ErrorPage from './homepage/ErrorPage.js';

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/" component={Homepage} />

        <Route default component={ErrorPage} />

      </Switch>
    </Router>
    );
}

export default App;
