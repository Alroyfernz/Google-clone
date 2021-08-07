import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { FaBars } from "react-icons/fa";
import { GrApps } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";
import Search from "../Search";

function Home() {
  const styled = {
    marginRight: "25px",
  };
  return (
    <div className="home">
      <div className="home__header">
        <div className="header__left">
          <Link to="/about"> About </Link> <Link to="/store"> Store </Link>{" "}
        </div>
        <div className="menu">
          <FaBars />
        </div>
        <div className="header__right">
          <Link to="/gmail"> Gmail </Link> <Link to="/images"> Images </Link>{" "}
          <GrApps style={styled} />
          <FaUserCircle />
        </div>{" "}
      </div>
      <div className="home__body">
        <img
          alt="goole"
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
        />
        <Search />
      </div>
    </div>
  );
}

export default Home;
