import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import "./searchPage.css";
import ShowVideoGrid from "../ShowVideoGrid/ShowVideoGrid";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
function Search() {
  const { searchQuery } = useParams();

  const vids = useSelector((state) => state.videoReducer)
    ?.data?.filter((e) => e.videoTitle.includes(searchQuery))
    ?.reverse();
  console.log(searchQuery);

  return (
    <>
      {searchQuery ? (
        <>
          <div className="container_pages">
            <LeftSidebar />
            <div className="container_pages2">
              <h2 className="header_searchPage">
                Search Reasults for {searchQuery}...
              </h2>
              <ShowVideoGrid vids={vids} />
            </div>
          </div>
        </>
      ) : (
        <>
          <h2 className="header_searchPage">Plz Enter Something to search</h2>
        </>
      )}
    </>
  );
}

export default Search;
