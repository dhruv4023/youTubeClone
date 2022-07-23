import React from "react";

import { FaSearch } from "react-icons/fa";
import { BsMicFill } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./searchBar.css";
import SearchList from "./SearchList";

function SearchBar() {
  const TitleArray = useSelector((state) => state.videoReducer)?.data?.filter(
    (q) => q?.videoTitle
  );

  console.log(TitleArray);

  const [searchMobile, setSearchMobile] = useState({ display: "none" });
  const searchMobileToggle = () => {
    if (searchMobile.display === "none") {
      setSearchMobile({
        display: "block",
      });
    } else {
      setSearchMobile({
        display: "none",
      });
    }
  };

  const [searchQuery, setSearchQuery] = useState("");

  // const value = searchQuery;
  // console.log(searchQuery);

  return (
    <>
      <div className="search_div">
        <div className="search_div2">
          <input
            type="text"
            className="Search_Navbar"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="searchBar_Navbar_Mobile" style={searchMobile}>
            <div className="search_div">
              <input
                type="text"
                className="Mobile Search_Navbar"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
              />
              <Link to={`/search/${searchQuery}`}>
                <FaSearch className="searchIcon_Navbar Mobile" />
              </Link>
              <BsMicFill size={20} className="mic_Navbar Mobile" />
              <div className="X_SEacrbar_mobile" onClick={searchMobileToggle}>
                X
              </div>
            </div>
          </div>
          <Link to={`/search/${searchQuery}`}>
            <FaSearch className="searchIcon_Navbar" />
          </Link>
          <BsMicFill size={20} className="mic_Navbar" />
        </div>
        {/* <SearchList /> */}
      </div>
      <FaSearch
        className="vid_bell_Navbar Mobile"
        size={20}
        onClick={searchMobileToggle}
      />
    </>
  );
}

export default SearchBar;
