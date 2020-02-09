import React, { Component } from 'react';
import './App.css';
import ToDoList from './ToDoList'
import ComponentOne from './ComponentOne'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todo">My Todos</Link>
            </li>
            <li>
              <Link to="/c1">Component One</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact>
            <div><h1>I'm Home</h1></div>
          </Route>
          <Route path="/todo">
            <div className="App">
              <ToDoList />
            </div>
          </Route>
          <Route path="/c1">
            <ComponentOne />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
