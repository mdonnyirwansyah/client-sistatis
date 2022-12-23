import React from "react";
import { Auth } from "../components";

function Login() {
  return (
    <Auth title="Login">
      <form action="../../index3.html" method="post">
        <input type="email" className="form-control mb-3" placeholder="Email" />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
        />
        <button href="#" className="btn btn-block btn-primary">
          Login
        </button>
      </form>
    </Auth>
  );
}

export default Login;
