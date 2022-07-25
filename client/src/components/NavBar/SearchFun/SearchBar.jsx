import React from "react";

import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import SearchBtns from "./SearchBtns";
import "./searchBar.css";
function SearchBar() {
  const [searchMobile, setSearchMobile] = useState({
    mobile: { display: "none" },
    // web: { display: "flex" },
  });
  const searchMobileToggle = () => {
    console.log(searchMobile.mobile);
    if (searchMobile.mobile.display === "none") {
      setSearchMobile({
        mobile: { display: "block" },
      });
    } else {
      setSearchMobile({
        mobile: { display: "none" },
      });
    }
  };

  // console.log(searchQuery);
  // console.log(TitleArray);

  return (
    <>
      <div className="webView">
        <div className="search_div">
            <SearchBtns /> 
        </div>
      </div>
      {/* <div
        className="searchBar_Navbar_Mobile Mobile"
        style={searchMobile.mobile}
      >
        <SearchBtns />
        <div className="X_SEacrbar_mobile Mobile" onClick={searchMobileToggle}>
          X
        </div>
      </div> */}
      {/*
        <div className="search_div">
          <input
            type="text"
            className="Mobile Search_Navbar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onClick={(e)=>setSearchList(true)}
            placeholder="Search"
          />
          <Link to={`/search/${searchQuery}`}>
            <FaSearch onClick={(e)=>setSearchList(false)}  className="searchIcon_Navbar Mobile" />
          </Link>
          <BsMicFill size={20} className="mic_Navbar Mobile" />

        </div>
        {searchList&& searchQuery && (
          <SearchList
          className="Mobile"
          titleList={TitleArray} setSearchQuery={setSearchQuery} />
        )}
      */}
      <FaSearch
        className="vid_bell_Navbar Mobile"
        size={20}
        onClick={searchMobileToggle}
      />
    </>
  );
}

export default SearchBar;
