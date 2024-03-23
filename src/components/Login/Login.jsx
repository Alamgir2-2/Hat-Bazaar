import React, { useContext } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      form.reset();
    })

    .catch(error => {
      console.log(error);
    })

  };
  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form className="form" onSubmit={handleLogin}>
        <div className="form-control">
          <label htmlFor="">Email</label>
          <input type="email" name="email" id="" required />
        </div>

        <div className="form-control">
          <label htmlFor="">Password</label>
          <input type="password" name="password" id="" required />
        </div>

        <input className="btn-submit" type="submit" value="Login" />
      </form>
      <p>
        <small>
          New to Hat-Bazaar ? <Link to="/signup">Create An Account</Link>
        </small>
      </p>
    </div>
  );
};

export default Login;
