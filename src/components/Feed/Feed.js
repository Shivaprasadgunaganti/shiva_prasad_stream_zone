import React, { useEffect, useState } from "react";
import "./Feed.css";
import { Link } from "react-router-dom";
import { API_KEY, value } from "../../data";
import axios from "axios";
import moment from "moment/moment";
import { Recommanded } from "../Recommander/Recommanded";
export const Feed = ({ category, value1 }) => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&region=IN&videoCategoryId=${category}&key=${API_KEY}`
    );
    setData(response.data.items);
  };
  const fetchData1 = async () => {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${value1}&maxResults=25&key=${API_KEY}`
    );
    setData(response.data.items);
  };
  useEffect(() => {
    if (value1) fetchData1();
    else fetchData();
  }, [category, value1]);
  return (
    <div className="feed">
      {data.map((item, index) => {
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
                item.statistics?.viewCount ? `${value(item.statistics.viewCount)} views` : ""}
              {moment(item.snippet.publishedAt).fromNow()}
              
            </p>
          </Link>
        );
      })}
      <Recommanded searchKeyword={value1}/>
    </div>
  );
};




























// import React, { useEffect, useState } from "react";
// import "./Feed.css";
// import { Link } from "react-router-dom";
// import { API_KEY, value } from "../../data";
// import axios from "axios";
// import moment from "moment/moment";
// export const Feed = ({ category, value1 }) => {
//   const [data, setData] = useState([]);
//   const [data1, setData1] = useState([]);
//   console.log(data1, "data1");
//   const fetchData = async () => {
//     const response = await axios.get(
//       `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&region=IN&videoCategoryId=${category}&key=${API_KEY}`
//     );
//     setData(response.data.items);
//   };
//   const fetchData1 = async () => {
//     const response = await axios.get(
//       `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${value1}&maxResults=25&key=${API_KEY}`
//     );
//     setData1(response.data.items);
//   };
//   useEffect(() => {
//     if (value1) fetchData1();
//     else fetchData();
//   }, [category, value1]);
//   return (
//     <div className="feed">
//       {data.map((item, index) => {
//         return (
//           <Link
//             to={`video/${item.snippet.categoryId}/${item.id}`}
//             className="card"
//           >
//             <img src={item.snippet.thumbnails.medium.url} alt="" />
//             <h2>{item.snippet.title}</h2>
//             <h3>{item.snippet.channelTitle}</h3>
//             <p>
//               {value(item.statistics.viewCount)} views &bull;{" "}
//               {moment(item.snippet.publishedAt).fromNow()}
//             </p>
//           </Link>
//         );
//       })}
//     </div>
//   );
// };
