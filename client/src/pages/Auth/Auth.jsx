import React from "react";
import { useDispatch } from "react-redux";
import "./Auth.css";
import { setCurrentUser } from "../../actions/currentUser";
import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";

function Auth({ User, handleEditChanel, setAuthBtn }) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    // googleLogout();
    dispatch(setCurrentUser(null));
    alert("Logged out successfully");
  };

  return (
    <>
      <div className="Auth_cont" onClick={() => setAuthBtn(false)}>
        <div className="Auth_cont2">
          <p className="User_Details_Auth">
            <div className="Chanel_logo_App">
              <p className="fstChar_logo_App">
                {User?.result.name ? (
                  <>{User?.result.name.charAt(0).toUpperCase()}</>
                ) : (
                  <>{User?.result.email.charAt(0).toUpperCase()}</>
                )}
              </p>
            </div>
            <div className="email_AUth">{User?.result.email}</div>
          </p>
          <div className="btns_auth">
            {User?.result.name ? (
              <Link to={`/chanel/${User?.result?._id}`} className="btn_Auth">
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
    </>
  );
}

export default Auth;
