import React from "react";

import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
import useGoogleSearch from "../useGoogleSearch";
import { BiNews } from "react-icons/bi";
import { CgPlayButtonR } from "react-icons/cg";
import { BsSearch, BsCardImage } from "react-icons/bs";
import "./SearchPage.css";
import Search from "../Search";

function SearchPage() {
  const style = { color: "gray", marginRight: "10px", paddingLeft: "10px" };
  const state = useStateValue();
  const { term } = state[0];
  const { data } = useGoogleSearch(term);
  return (
    <div className="searchpage">
      <div className="SearchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            alt="goole"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
          />
        </Link>
        <div className="SearchPage__headerBody">
          <Search Hide />
        </div>
      </div>
      <div className="searchPage__options">
        <div className="searchPage__option">
          <BsSearch style={style} />
          <Link to="/all">All</Link>
        </div>
        <div className="searchPage__option">
          <CgPlayButtonR style={style} />
          <Link to="/all">Videos</Link>
        </div>
        <div className="searchPage__option">
          <BiNews style={style} />
          <Link to="/all">News</Link>
        </div>
        <div className="searchPage__option">
          <BsCardImage style={style} />
          <Link to="/all">Photos</Link>
        </div>
      </div>
      {term && (
        <div className="searchPage__result">
          <p className="result__count">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime}
            seconds) for {term}
          </p>
          {data?.items.map((item) => (
            <div className="searchPage__results">
              <a href={item.link}>{item.displayLink} </a>
              <a className="searchPage__resultTitle" href={item.link}>
                <h2 className="Title">{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
