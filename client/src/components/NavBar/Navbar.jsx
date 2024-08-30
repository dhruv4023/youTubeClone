import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { BiUserCircle } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import logo from "./logo.ico";
import Auth from "../../pages/Auth/Auth";
import SearchBar from "./SearchFun/SearchBar";
import { setCurrentUser } from "../../actions/currentUser";
import axios from "axios";
import { setLogin, setLogout } from "../../state";

function Navbar({ wdtToggle, handleEditChanel }) {
  const currentUser = useSelector((state) => state.user);
  const [AuthBtn, setAuthBtn] = useState(false);
  const redirectToGoogleAuth = async () => {
    window.location.href = `${process.env.REACT_APP_SERVER}/auth/google`;
  };

  useEffect(() => {
    fetchSessionData();
  }, []);
  const dispatch = useDispatch();
  const fetchSessionData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER}/api/session-data`,
        { withCredentials: true }
      );

      if (response.status === 200) {
        dispatch(setLogin({ user: response.data, token: response.data.token }));
      }else{
        dispatch(setLogout());
      }
    } catch (error) {
      // console.error("Error fetching session data:", error);
      setCurrentUser(null);
    }
  };
  // console.log(currentUser.user)
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
                  {currentUser.name ? (
                    <>{currentUser.name.charAt(0).toUpperCase()}</>
                  ) : (
                    <>{currentUser.email.charAt(0).toUpperCase()}</>
                  )}
                </p>
              </div>
            </>
          ) : (
            <div onClick={() => redirectToGoogleAuth()} className="Auth_Btn">
              <BiUserCircle size={22} />
              <b>Sign In</b>
            </div>
          )}
        </div>
      </div>
      {AuthBtn && currentUser && (
        <Auth
          setAuthBtn={setAuthBtn}
          user={currentUser}
          handleEditChanel={handleEditChanel}
        />
      )}
    </>
  );
}

export default Navbar;
