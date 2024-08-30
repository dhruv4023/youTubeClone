import React from "react";
import { useDispatch } from "react-redux";
import "./Auth.css";
import { setCurrentUser } from "../../actions/currentUser";
import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { logout } from "../../actions/auth";

function Auth({ user, handleEditChanel, setAuthBtn }) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="Auth_cont" onClick={() => setAuthBtn(false)}>
      <div className="Auth_cont2">
        <div className="User_Details_Auth">
          <div className="Chanel_logo_App">
            <p className="fstChar_logo_App">
              {user.name ? (
                <>{user.name.charAt(0).toUpperCase()}</>
              ) : (
                <>{user.email.charAt(0).toUpperCase()}</>
              )}
            </p>
          </div>
          <div className="email_AUth">{user.email}</div>
        </div>
        <div className="btns_auth">
          {user.name ? (
            <Link to={`/chanel/${user.id}`} className="btn_Auth">
              Your Channel
            </Link>
          ) : (
            <input
              type="submit"
              className="btn_Auth"
              onClick={() => handleEditChanel(true)}
              value="Create Your Channel"
            />
          )}
          <div onClick={handleLogout} className="btn_Auth">
            <BiLogOut />
            Log Out
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
