import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link className="link" to="/login">
          Login
        </Link>
        <Link className="link" to="/friends">
          Friends List
        </Link>
      </nav>
      <div className="App">
        <switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute path="/friends" component={FriendsList} />
        </switch>
      </div>
    </Router>
  );
}

export default App;
