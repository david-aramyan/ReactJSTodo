import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h2>Todo App</h2>
          <Route path="/" exact component={TodosList} />
          <Route path="/create" component={CreateTodo} />
          <Route path="/edit" component={EditTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
