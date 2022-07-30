import React from "react";

import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import SearchBtns from "./SearchBtns";
import "./searchBar.css";

function SearchBar() {
  const [searchMobile, setSearchMobile] = useState({ display: "none" });
  const searchMobileToggle = () => {
    if (searchMobile.display === "none") {
      setSearchMobile({
        display: "flex",
      });
    } else {
      setSearchMobile({
        display: "none",
      });
    }
  };

  // console.log(searchQuery);
  // console.log(TitleArray);

  return (
    <>
      <div className="search_div">
        <div className="webView">
          <SearchBtns />
        </div>
      </div>
      <div className="Mobile">
        <div className="searchBar_Navbar_Mobile" style={searchMobile}>
          <SearchBtns />
          <div
            className="X_SEacrbar_mobile Mobile"
            onClick={searchMobileToggle}
          >
            X
          </div>
        </div>
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
