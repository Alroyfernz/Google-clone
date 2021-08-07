import React, { useState } from "react";
import "./Search.css";
import { BsSearch, BsFillMicFill } from "react-icons/bs";
import { useHistory } from "react-router";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Search({ Hide } = false) {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <BsSearch />
        <input
          placeholder={!Hide ? "Search Google or type a URL" : ""}
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <BsFillMicFill />
      </div>
      {!Hide ? (
        <div className="search__button">
          <button varirant="outlined" type="submit" onClick={handleClick}>
            Google search
          </button>
          <button varirant="outlined">I'm Feeling Lucky</button>
        </div>
      ) : (
        <div className="search__buttonHide">
          <button varirant="outlined" type="submit" onClick={handleClick}>
            Google search
          </button>
          <button varirant="outlined">I'm Feeling Lucky</button>
        </div>
      )}
    </form>
  );
}

export default Search;
