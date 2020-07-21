import React, { useState } from "react";

const Login = () => {
  const initialState = {
    username: "",
    password: "",
  };

  const [input, setInput] = useState("");
  const [credentials, setCredentials] = useState(initialState);

  const onChange = (e) => {
    setInput({ [e.target]: e.target.value });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="username"
          onChange="onChange"
          placeholder="username"
          value={credentials.username}
        />
        <input
          type="text"
          name="password"
          onChange="onChange"
          placeholder="password"
          value={credentials.username}
        />
      </form>
    </div>
  );
};

export default Login;
