import React, {  useContext, useEffect, useState } from 'react';
import './Home.css';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Feed } from '../../components/Feed/Feed';
import { ProfileWrapper } from '../../App';

export const Home = () => {
  const [category, setCategory] = useState(0);
  const [sidebar, setSidebar] = useState(true);
  const input=useContext(ProfileWrapper)
  const res=input.value
 const resToggle=input.toggle

 useEffect(()=>{
  setSidebar(resToggle)
 },[resToggle])
  // console.log(sidebar,'input')
  return (
    <div>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} /> 
      <div className={`container ${sidebar ? '' : 'large-container'}`}> 
         <Feed category={category} value1={res}/>
       </div>
    </div>
  );
};
