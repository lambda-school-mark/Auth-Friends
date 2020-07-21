import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            {/* <li>
              <Link to="/friends">Friend List</Link>
            </li> */}
          </ul>
        </nav>
        <Switch>
          {/* <PrivateRoute exact path="/friends">
            <friends />
          </PrivateRoute> */}
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
