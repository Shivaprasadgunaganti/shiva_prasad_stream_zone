import React, { useState } from "react";
import "./Navbar.css";
import menu_icon from "../../assets/menu.png";
import search_icon from "../../assets/search.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faVideo } from "@fortawesome/free-solid-svg-icons";

export const Navbar = ({ setButton, toggleData }) => {
  const [inputData, setInputData] = useState("");
  const inputHandler = (e) => {
    setInputData(e.target.value);
  };
  const buttonHandler = () => {
    setButton(inputData);
    setInputData(" ");
  };
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <Link to={"/"}>
          <img
            // src={menu_icon}
            src="https://cdn.icon-icons.com/icons2/2890/PNG/512/apps_web_development_chrome_logo_website_browser_google_icon_182706.png"
            className="menu_icon"
            alt=""
            onClick={() => {
              toggleData((prev) => !prev);
            }}
          />
        </Link>
        <Link to="/">
          <h3 className="logo"> </h3>
        </Link>
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input
            placeholder="Search"
            type="text"
            onChange={inputHandler}
            value={inputData}
          />

          <img
            src={search_icon}
            alt=""
            onClick={buttonHandler}
            className="img"
          />
        </div>
      </div>
      <div className="nav-right flex-div">
        <FontAwesomeIcon icon={faVideo} className="video-icon img" />
        <FontAwesomeIcon icon={faBell} className="bell-icon img" />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs2qXiuQU0TXmgDxe1J71lncA4heUeBCOB8A&s"
          className="user_icon"
          title="profile"
          alt=""
        />
      </div>
    </nav>
  );
};
