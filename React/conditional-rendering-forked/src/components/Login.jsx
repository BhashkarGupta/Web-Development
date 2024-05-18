import React from "react";
import LoginInput from "./LoginInput";

function Login(prams) {
  return (
    <form className="form">
      <LoginInput type="text" placeholder="Username" />
      <LoginInput type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
