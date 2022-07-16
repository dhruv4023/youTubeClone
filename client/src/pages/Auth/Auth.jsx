import React from "react";
import { useDispatch } from "react-redux";
import "./Auth.css";
import { setCurrentUser } from "../../actions/currentUser";
import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { GoogleLogout } from "react-google-login";
function Auth({ User, handleEditChanel, setAuthBtn }) {
  // const user = null;
  const dispatch = useDispatch();
  // const User = {
  //   result: {
  //     age: "2022-06-01T00:00:00.000Z",
  //     email: "ab@mail.com",
  //     joinedOn: "2022-06-28T13:13:11.541Z",
  //     name: "ddd",
  //     password: "$2a$12$CUXM3siw1T/v5gqU6PPAX.lOmI.gVlcf4Q87Uy.CGgIxKh2iiq1Ee",
  //     tags: [],
  //     _id: "62bafe6752cea35a6c30685f",
  //   },
  // };
  // const handleLogout = () => {
  //   dispatch({ type: "LOGOUT" });
  // };
  const onLogoutSuccess = () => {
    dispatch(setCurrentUser(null));
    alert("Log out Succesfully");
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
                Your Chanel
              </Link>
            ) : (
              <input
                type="submit"
                className="btn_Auth"
                onClick={() => handleEditChanel(true)}
                value="Create Your Chanel"
              />
            )}
            <div>
              <GoogleLogout
                clientId={
                  "756719838452-cn65r0g4adi05jnqtff6csbscgv5urfv.apps.googleusercontent.com"
                }
                render={(renderProps) => (
                  <div onClick={renderProps.onClick} className="btn_Auth">
                    <BiLogOut />
                    Log Out
                  </div>
                  //  <button onClick={renderProps.onClick} style={customStyle}>This is my custom Google button</button>
                )}
                onLogoutSuccess={onLogoutSuccess}
              />
              {/* <input
                type="submit"
                onClick={() => handleLogout()}
                value="Log out"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;
