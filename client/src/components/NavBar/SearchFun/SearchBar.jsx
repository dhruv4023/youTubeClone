import React from "react";

import { FaSearch } from "react-icons/fa";
import { BsMicFill } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./searchBar.css";
import SearchList from "./SearchList";

function SearchBar() {
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
  const TitleArray = useSelector((state) => state.videoReducer)
    ?.data?.filter(
      (q) => q?.videoTitle.toUpperCase().includes(searchQuery.toUpperCase())
      // console.log(q)
    )
    .map((m) => m.videoTitle);

  // console.log(searchQuery);
  // console.log(TitleArray);

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
          <Link to={`/search/${searchQuery}`}>
            <FaSearch className="searchIcon_Navbar" />
          </Link>
          <BsMicFill size={20} className="mic_Navbar" />
          {searchQuery && (
            <SearchList
              className="search"
              titleList={TitleArray}
              setSearchQuery={setSearchQuery}
            />
          )}
        </div>
      </div>
      <div className="searchBar_Navbar_Mobile Mobile" style={searchMobile}>
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
        {searchQuery && (
          <SearchList
          className="Mobile"
          titleList={TitleArray} setSearchQuery={setSearchQuery} />
        )}
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