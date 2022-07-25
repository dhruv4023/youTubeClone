import React from "react";

import { BsMicFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import SearchList from "./SearchList";
import "./searchBar.css";

import { FaSearch } from "react-icons/fa";
import { useState } from "react";

function SearchBtns({ searchMobileToggle }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchList, setSearchList] = useState(false);

  // const value = searchQuery;
  // console.log(searchQuery);
  const TitleArray = useSelector((state) => state.videoReducer)
    ?.data?.filter(
      (q) => q?.videoTitle.toUpperCase().includes(searchQuery.toUpperCase())
      // console.log(q)
    )
    .map((m) => m.videoTitle);
  return (
    <>
      <div className="search_div2">
        <input
          type="text"
          className="Search_Navbar"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onClick={(e) => setSearchList(true)}
        />
        <Link to={`/search/${searchQuery}`}>
          <FaSearch
            onClick={(e) => setSearchList(false)}
            className="searchIcon_Navbar"
          />
        </Link>
        <BsMicFill size={20} className="mic_Navbar" />
        {searchQuery && searchList && (
          <SearchList
            className="search"
            titleList={TitleArray}
            setSearchQuery={setSearchQuery}
          />
        )}
      </div>
    </>
  );
}

export default SearchBtns;
