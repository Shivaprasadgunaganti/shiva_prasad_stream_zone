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
              placeholder="Search"
              type="text"
              onChange={inputHandler}
              value={inputData}
            
            />
           

            <img src={search_icon} alt="" onClick={buttonHandler} />
          </div>
        </div>
        <div className="nav-right flex-div">
          {/* <button onClick={()=>{color((prev)=>!prev)}}>click</button> */}
          <img src={upload} alt=""  title="upload"/>
          <img src={more_icon} title="icons" alt=""/>
          <img src={notification} title="notifications" alt=""/>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs2qXiuQU0TXmgDxe1J71lncA4heUeBCOB8A&s' className="user_icon" title="profile" alt=""/>
        </div>
      </nav>
  );
};




// import React, { useState } from "react";
// import "./Navbar.css";
// import menu_icon from "../../assets/menu.png";
// import search_icon from "../../assets/search.png";
// import upload from "../../assets/upload.png";
// import more_icon from "../../assets/more.png";
// import notification from "../../assets/notification.png";
// import profile_icon from "../../assets/jack.png";
// import { Link } from "react-router-dom";

// export const Navbar = ({ setButton, toggleData }) => {
//   const [inputData, setInputData] = useState(""); 
//   const [hoverText, setHoverText] = useState("Stream Zone"); 

//   const inputHandler = (e) => {
//     setInputData(e.target.value);
//   };

//   const buttonHandler = () => {
//     setButton(inputData);
//   };

//   return (
//     <nav className="flex-div">
//       <div className="nav-left flex-div">
//         <img
//           src={menu_icon}
//           className="menu_icon"
//           alt=""
//           onClick={() => {
//             toggleData((prev) => !prev);
//           }}
//         />
//         <Link to="/">
//           <h3
//             onMouseEnter={() => setHoverText("back")} 
//             onMouseLeave={() => setHoverText("Stream Zone")} 
//           >
//             {hoverText} 
//           </h3>
//         </Link>
//       </div>
//       <div className="nav-middle flex-div">
//         <div className="search-box flex-div">
//           <input
//             placeholder="Search"
//             type="text"
//             onChange={inputHandler}
//             value={inputData}
//           />
//           <img src={search_icon} alt="" onClick={buttonHandler} />
//         </div>
//       </div>
//       <div className="nav-right flex-div">
//         <img src={upload} alt="" title="upload" />
//         <img src={more_icon} title="icons" alt="" />
//         <img src={notification} title="notifications" alt="" />
//         <img src={profile_icon} className="user_icon" title="profile" alt="" />
//       </div>
//     </nav>
//   );
// };
