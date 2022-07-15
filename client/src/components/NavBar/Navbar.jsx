import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import logo from "./logo.ico";
import Auth from "../../pages/Auth/Auth";
import { useSelector } from "react-redux";
import { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { login } from "../../actions/auth";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import { BiUserCircle } from "react-icons/bi";
// function Navbar({ setLoginPage, wdtToggle, handleEditChanel }) {
function Navbar({ wdtToggle, handleEditChanel }) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUserReducer);
  // const currentUser = {
  //   result: {
  //     email: "xyz@mail.com",
  //     joinedOn: "2022-07-15T09:57:23.489Z",
  //   },
  // };
  // console.log(currentUser);
  const [AuthBtn, setAuthBtn] = useState(false);
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "756719838452-cn65r0g4adi05jnqtff6csbscgv5urfv.apps.googleusercontent.com",
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  const onSuccess = (response) => {
    const Email = response?.profileObj.email;

    dispatch(login({ email: Email }));
    // setLoginPage(false);
  };
  const onFailure = (response) => {
    console.log("FAILED", response);
  };

  return (
    <>
      <div className="container_Navbar">
        <div className="burger_logo">
          <div className="burger" onClick={() => wdtToggle()}>
            <p></p>
            <p></p>
            <p></p>
          </div>
          <Link to={"/"} className="logo_Navbar">
            <img src={logo} width={50} alt="" />
            <p>YouTube</p>
          </Link>
        </div>
        <div className="search_div">
          <input
            type="text"
            className="Search_Navbar"
            placeholder="Search..."
          />
          <div>
            <FaSearch className="searchIcon_Navbar" />
          </div>
        </div>
        <div className="Auth_Conatiner_navbar">
          {currentUser ? (
            <>
              <div
                className="Chanel_logo_App"
                onClick={() => {
                  setAuthBtn(true);
                }}
              >
                <p className="fstChar_logo_App">
                  {currentUser?.result.name ? (
                    <>{currentUser?.result.name.charAt(0).toUpperCase()}</>
                  ) : (
                    <>{currentUser?.result.email.charAt(0).toUpperCase()}</>
                  )}
                </p>
              </div>
            </>
          ) : (
            <>
              {/* <p onClick={() => setLoginPage(true)} className="Auth_Btn">
                <b>Sign In</b>
              </p> */}
              <GoogleLogin
                clientId={
                  "756719838452-cn65r0g4adi05jnqtff6csbscgv5urfv.apps.googleusercontent.com"
                }
                onSuccess={onSuccess}
                onFailure={onFailure}
                render={(renderProps) => (
                  <p onClick={renderProps.onClick} className="Auth_Btn">
                    <BiUserCircle size={20}/>
                    <b>Sign In</b>
                  </p>
                )}
              />
            </>
          )}
        </div>
      </div>
      {AuthBtn && (
        <Auth
          setAuthBtn={setAuthBtn}
          User={currentUser}
          handleEditChanel={handleEditChanel}
        />
      )}
    </>
  );
}

export default Navbar;
