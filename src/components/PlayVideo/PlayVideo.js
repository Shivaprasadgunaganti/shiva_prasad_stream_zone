import React, { useEffect, useState } from "react";
import "./PlayVideo.css";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import { API_KEY, value } from "../../data";
import moment from "moment";
import { useParams } from "react-router-dom";
import confetti from "canvas-confetti";
export const PlayVideo = () => {
  const { videoId  } = useParams();
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);
  const [subscribe,isSubscribe]=useState(false)
  // console.log(subscribe)

  const fetchData = async () => {
    const response = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(response)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]));
  };
  const fetchDataChannel = async () => {
    const responseData = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(responseData)
      .then((res) => res.json())
      .then((data) => setChannelData(data.items[0]));

    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
    await fetch(comment_url)
      .then((res) => res.json())
      .then((data) => setCommentData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, [videoId]);

  useEffect(() => {
    if (apiData) fetchDataChannel();
  }, [apiData]);
  const buttonHandler=()=>{
    isSubscribe((pre)=>!pre)
    confetti({
      particleCount: 100,
      spread: 50,
      origin: { y: 0.6 }
    });
  }
  return (
    <div className="play-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title=" "
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h3>{apiData ? apiData.snippet.title : "title here"}</h3>
      <div className="play-video-info">
        <p>
          {apiData ? value(apiData.statistics.viewCount) : "1k"} views &bull;{" "}
          {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
        </p>
        <div>
          <span>
            {" "}
            <img src={like} alt="" />
            {apiData ? value(apiData.statistics.viewCount) : "155"}
          </span>
          <span>
            {" "}
            <img src={dislike} alt="" />
          </span>
          <span>
            <img src={share} alt="" />
            share
          </span>
          <span>
            <img src={save} alt="" />
            save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher ">
        <img
          src={channelData ? channelData.snippet.thumbnails.default.url : ""}
          alt=""
        />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : ""}</p>
          <span>
            {value(channelData ? channelData.statistics.subscriberCount : "")}{" "}
            Subscribers
          </span>
        </div>
        <button onClick={buttonHandler}>{subscribe ? 'Subscribed':'Subscribe'}</button>
      </div>
      <div className="vid-description">
        <p>{apiData ? apiData.snippet.description.slice(0, 250) : ""}</p>
        <hr />
        <h4>
          {value(apiData ? apiData.statistics.commentCount : "")} Comments
        </h4>
        {commentData.map((item, index) => {
          return (
            <div key={index} className="comment">
              <img
                src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
                alt=""
              />
              <div>
                <h3>
                  {item.snippet.topLevelComment.snippet.authorDisplayName}{" "}
                  <span>1 day ago</span>
                </h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comment-action">
                  <img src={like} alt="" />
                  <span>
                    {value(item.snippet.topLevelComment.snippet.likeCount)}
                  </span>
                  <img src={dislike} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
