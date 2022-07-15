import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import logo from "./logo.ico";
import Auth from "../../pages/Auth/Auth";
import { useSelector } from "react-redux";
import { useState } from "react";
import { gapi } from "gapi-script";
function Navbar({ setLoginPage, wdtToggle, handleEditChanel }) {
  const currentUser = useSelector((state) => state.currentUserReducer);
  // const currentUser = {
  //   result: {
  //     email: "xyz@mail.com",
  //     joinedOn: "2022-07-15T09:57:23.489Z",
  //   },
  // };
  // console.log(currentUser);
  const [AuthBtn, setAuthBtn] = useState(false);


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
              <p onClick={() => setLoginPage(true)} className="Auth_Btn">
                Sign In
              </p>

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
