import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../actions/auth";
import "./loginSignupPage.css";

function LoginSignupPage({ setLoginPage }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Enter Email!");
    } else if (/\S+@\S+\.\S+/.test(email)) {
      // Dispatch login action
      dispatch(login({ email }));
      setLoginPage(false);
    } else {
      alert("Enter a valid Email!");
    }
  };

  return (
    <div className="container_lsp">
      <button
        type="button"
        className="ibtn_x_lsp"
        onClick={() => setLoginPage(false)}
      >
        &times;
      </button>
      <div className="logsign_lsp">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className="ibox_lsp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="ibtn_lsp"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginSignupPage;
