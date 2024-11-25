import React, { createContext, useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Video } from "./pages/Video/Video";
import "./App.css";
export const ProfileWrapper = createContext("");

const App = () => {
  const [sidebar, setSidebar] = useState();
  const [value, setValue] = useState("");
  const [toggle, setToggle] = useState(true);
  // const [theme,setTheme]=useState(true)
  // console.log(theme,'theme')

  return (
    <div>
      <ProfileWrapper.Provider value={{ setValue, value, setToggle, toggle }}>
        <Navbar
          setSidebar={setSidebar}
          setButton={setValue}
          toggleData={setToggle}
        />
        <Routes>
          <Route path="/" element={<Home sidebar={sidebar} />} />
          <Route path="/video/:categoryId?/:videoId" element={<Video />} />
        </Routes>
      </ProfileWrapper.Provider>
    </div>
  );
};
export default App;
