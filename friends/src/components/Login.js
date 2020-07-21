import React, { useState } from "react";
import axios from "axios";
const Login = (props) => {
  const initialState = {
    username: "bro",
    password: "what",
  };

  const [isLoading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState(initialState);
  const onChange = (e) => {
    setCredentials({ [e.target.name]: e.target.value });
  };
  const login = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/friends");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={onChange}
          value={credentials.username}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={onChange}
          value={credentials.password}
        />
        <button className="button">
          {isLoading ? (
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftenor.com%2Fes%2Fver%2Floading-bar-waiting-load-cyan-blue-gif-13956215&psig=AOvVaw2B0amFl2mOp4JJ2gqmz6Uz&ust=1595450824300000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCc1NCb3-oCFQAAAAAdAAAAABAl"></img>
          ) : (
            <span>Button</span>
          )}
        </button>
      </form>
    </div>
  );
};
export default Login;
