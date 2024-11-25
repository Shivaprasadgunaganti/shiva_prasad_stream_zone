import React, { useContext, useEffect, useState } from "react";
import "./Recommanded.css";
import { API_KEY, value } from "../../data";
import { Link } from "react-router-dom";
import { ProfileWrapper } from "../../App";
export const Recommanded = ({ categoryId, searchKeyword }) => {
  const input = useContext(ProfileWrapper);
  const res = input.value;
  const [apiData, setApiData] = useState([]);
  // console.log(apiData, "apidata");
  const fetchData = async () => {
    const relatedVideos = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostpopular&regionCode=US&maxResults=50&videoCategoryId=${categoryId}&key=${API_KEY}`;
    await fetch(relatedVideos)
      .then((res) => res.json())
      .then((data) => setApiData(data.items));
  };
  const fetchData1 = async () => {
    const response = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${res}&maxResults=20&key=${API_KEY}`;
    await fetch(response)
      .then((res) => res.json())
      .then((data) => setApiData(data.items));
  };
  useEffect(() => {
    if (categoryId) fetchData();
    else if (res) fetchData1();
  }, []);
  return (
    <div className="recommander">
      {apiData.map((item, index) => {
        const videoId = item.id.videoId || item.id;
        return (
          <Link
            to={`/video/${
              item.snippet.categoryId ? item.snippet.categoryId : "default"
            }/${videoId}`}
            key={index}
            className="side-video-list"
          >
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="vid-info">
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{value(item.statistics?.viewCount)} views</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
