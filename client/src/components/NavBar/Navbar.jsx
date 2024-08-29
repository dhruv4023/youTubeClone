import React from "react";
import { Link, redirect } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { BiUserCircle } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import logo from "./logo.ico";
import Auth from "../../pages/Auth/Auth";
import { login } from "../../actions/auth";
import SearchBar from "./SearchFun/SearchBar";

function Navbar({ wdtToggle, handleEditChanel }) {
  const currentUser = useSelector((state) => state.currentUserReducer);
  const [AuthBtn, setAuthBtn] = useState(false);
  const redirectToGoogleAuth = async () => {
    console.log(`${process.env.REACT_APP_SERVER}/auth/google`)
    window.location.href = `${process.env.REACT_APP_SERVER}/auth/google`;
  };
  return (
    <>
    {`${process.env.REACT_APP_SERVER}/auth/google`}
      <div className="container_Navbar">
        <div className="burger_logo">
          <div className="burger" onClick={() => wdtToggle()}>
            <p></p>
            <p></p>
            <p></p>
          </div>
          <Link to={"/"} className="logo_Navbar">
            <img src={logo} width={40} alt="logo" />
            <p>YouTube</p>
          </Link>
        </div>
        <SearchBar />
        <RiVideoAddLine size={22} className="vid_bell_Navbar" />
        <div className="box_apps">
          <p className="box_app"></p>
          <p className="box_app"></p>
          <p className="box_app"></p>
          <p className="box_app"></p>
          <p className="box_app"></p>
          <p className="box_app"></p>
          <p className="box_app"></p>
          <p className="box_app"></p>
          <p className="box_app"></p>
        </div>
        <IoMdNotificationsOutline size={22} className="vid_bell_Navbar" />
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
            <p onClick={() => redirectToGoogleAuth()} className="Auth_Btn">
              <BiUserCircle size={22} />
              <b>Sign In</b>
            </p>
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
