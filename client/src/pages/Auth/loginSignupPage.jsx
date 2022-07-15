import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { signup, login } from "../../actions/auth";

import "./loginSignupPage.css";

function LoginSignupPage({ login_v, setLogin, setLoginPage }) {
  const dispatch = useDispatch();

  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [age, setAge] = useState("");
  // const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Enter Email !");
    } else if (email) {
      // console.log("login")
      dispatch(login({ email }));
      setLoginPage(false);
    }
  };

  return (
    <div className="container_lsp">
      <div>
        <input
          type="submit"
          name="date"
          value="x"
          className="ibtn_x_lsp"
          onClick={() => setLoginPage(false)}
        />
      </div>
      <div className="logsign_lsp">
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          className="ibox_lsp"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="submit"
          name="submit"
          value="Login"
          className="ibtn_lsp"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}

export default LoginSignupPage;
