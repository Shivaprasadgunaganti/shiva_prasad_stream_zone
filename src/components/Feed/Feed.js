import React, { useEffect, useState } from "react";
import "./Feed.css";
import { Link } from "react-router-dom";
import { API_KEY, value } from "../../data";
// import { CircleLoader } from "react-awesome-loaders";
import axios from "axios";
import moment from "moment/moment";
export const Feed = ({ category, value1 }) => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&region=IN&videoCategoryId=${category}&key=${API_KEY}`
      );
      setData(response.data.items);
    }
  catch(error){
    alert(error.message,'error')
  }
  };
  const fetchData1 = async () => {
    try{
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${value1}&maxResults=50&key=${API_KEY}`
      );
      setData(response.data.items);
 
    }
    catch(error){
      alert(error.message,'error')
    }
  };
  useEffect(() => {
    if (value1) fetchData1();
    else fetchData();
  }, [category, value1]);
  return (
    <div className="feed">
      {
        
data.map((item, index) => {
  const videoId=item.id.videoId || item.id;
  const linkPath= value1 ? `/video/${videoId}`:`/video/${item.snippet.categoryId}/${videoId}`
  return (
    <Link
      to={linkPath}
      className="card"
      key={index}
    >
      <img src={item.snippet.thumbnails.medium.url} alt="" />
      <h2>{item.snippet.title}</h2>
      <h3>{item.snippet.channelTitle}</h3>
      <p>
        {
          item.statistics?.viewCount ? `${value(item.statistics.viewCount)} views` : ""}      	| {""}  
       
        {moment(item.snippet.publishedAt).fromNow()}
        
      </p>
    </Link>
  );
})
      }
       {/* <CircleLoader
        meshColor={"#6366F1"}
        lightColor={"#E0E7FF"}
        duration={1.5}
        desktopSize={"90px"}
        mobileSize={"64px"}
      /> */}
    </div>
  );
};

