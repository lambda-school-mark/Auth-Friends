import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <Router>
      <Link to="/login">Login</Link>
      <Link to="/friends">Friends List</Link>
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
