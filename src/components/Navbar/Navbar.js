import React, { useState } from "react";
import "./Navbar.css";
import menu_icon from "../../assets/menu.png";
import search_icon from "../../assets/search.png";
import upload from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification from "../../assets/notification.png";
import profile_icon from "../../assets/jack.png";
import { Link } from "react-router-dom";

export const Navbar = ({ setButton ,toggleData  }) => {
  const [inputData, setInputData] = useState("");
  const inputHandler = (e) => {
    setInputData(e.target.value);
  };
  const buttonHandler = () => {
    setButton(inputData);
  };
  return (
      <nav className="flex-div">
        <div className="nav-left flex-div">
          <img src={menu_icon} className="menu_icon" alt=""  onClick={()=>{toggleData((prev)=>!prev)}}/>
          <Link to="/">
            <h3 className="logo">Stream Zone</h3>
          </Link>
        </div>
        <div className="nav-middle flex-div">
          <div className="search-box flex-div">
            <input
              placeholder="search"
              type="text"
              onChange={inputHandler}
              value={inputData}
            />
            <img src={search_icon} alt="" onClick={buttonHandler} />
          </div>
        </div>
        <div className="nav-right flex-div">
          {/* <button onClick={()=>{color((prev)=>!prev)}}>click</button> */}
          <img src={upload} alt="" />
          <img src={more_icon} alt="" />
          <img src={notification} alt="" />
          <img src={profile_icon} className="user_icon" alt="" />
        </div>
      </nav>
  );
};
