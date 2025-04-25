import React from "react";
import "./Sidebar.css";
import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
export const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-links">
        <div
          className={`side-link ${
            category === 0 ? "active" : ""
          }subscriptions `}
          onClick={() => setCategory(0)}
        >
          <img src={home} alt="" />
          <div className="col-md-12 text-center">
            <p className="animate-charcter">Home</p>
          </div>
        </div>

        <div
          className={`side-link ${
            category === 20 ? "active" : ""
          } subscriptions `}
          onClick={() => setCategory(20)}
        >
          <img src={game_icon} alt="" />
          <div className="col-md-12 text-center">
            <p className="animate-charcter">Games</p>
          </div>
        </div>

        <div
          className={`side-link ${
            category === 2 ? "active" : ""
          } subscriptions`}
          onClick={() => setCategory(2)}
        >
          <img src={automobiles} alt="" />
          <div className="col-md-12 text-center">
            <p className="animate-charcter">AutoMobiles</p>
          </div>
        </div>
        <div
          className={`side-link ${
            category === 17 ? "active" : ""
          } subscriptions`}
          onClick={() => setCategory(17)}
        >
          <img src={sports} alt="" />
          <div className="col-md-12 text-center">
            <p className="animate-charcter">Sports</p>
          </div>
        </div>
        <div
          className={`side-link ${
            category === 24 ? "active" : ""
          } subscriptions`}
          onClick={() => setCategory(24)}
        >
          <img src={entertainment} alt="" />
          <div className="col-md-12 text-center">
            <p className="animate-charcter">Fun</p>
          </div>
        </div>

        <div
          className={`side-link ${
            category === 28 ? "active" : ""
          } subscriptions`}
          onClick={() => setCategory(28)}
        >
          <img src={tech} alt="" />
          <div className="col-md-12 text-center">
            <p className="animate-charcter">Tech</p>
          </div>
        </div>
        <div
          className={`side-link ${
            category === 10 ? "active" : ""
          } subscriptions`}
          onClick={() => setCategory(10)}
        >
          <img src={music} alt="" />
          <div className="col-md-12 text-center">
            <p className="animate-charcter">Music</p>
          </div>
        </div>
        <div
          className={`side-link ${
            category === 22 ? "active" : ""
          } subscriptions`}
          onClick={() => setCategory(22)}
        >
          <img src={blogs} alt="" />
          <div className="col-md-12 text-center">
            <p className="animate-charcter">Blogs</p>
          </div>
        </div>
        <div
          className={`side-link ${
            category === 25 ? "active" : ""
          } subscriptions`}
          onClick={() => setCategory(25)}
        >
          <img src={news} alt="" />
          <div className="col-md-12 text-center">
            <p className="animate-charcter">News</p>
          </div>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        {/* <h2>Subscribed</h2> */}
        <div className="waviy">
          <span style={{ "--i": 1 }}>S</span>
          <span style={{ "--i": 2 }}>u</span>
          <span style={{ "--i": 3 }}>b</span>
          <span style={{ "--i": 4 }}>s</span>
          <span style={{ "--i": 5 }}>c</span>
          <span style={{ "--i": 6 }}>r</span>
          <span style={{ "--i": 7 }}>i</span>
          <span style={{ "--i": 8 }}>p</span>
          <span style={{ "--i": 9 }}>t</span>
          <span style={{ "--i": 10 }}>i</span>
          <span style={{ "--i": 11 }}>o</span>
          <span style={{ "--i": 12 }}>n</span>
          <span style={{ "--i": 13 }}>s</span>
        </div>

        <div className="side-link">
          <img
            src="https://yt3.googleusercontent.com/IhZOA133_uJacbeV67UEIqKmMyDjVczny72NNvk-6FIFOoHPTQE41PFuPSe_4parLDslVr50ag=s160-c-k-c0x00ffffff-no-rj"
            alt=""
          />

          <p>Raw talks with Vk</p>
        </div>
        <div className="side-link">
          <img
            src="https://yt3.googleusercontent.com/ytc/AIdro_l33grX8QP2RB1eB2yKmmLJigk7rCZ_nEApCQz60zDvtXU=s160-c-k-c0x00ffffff-no-rj"
            alt=""
          />
          <p>Filmy Moji</p>
        </div>
        <div className="side-link">
          <img
            src="https://yt3.googleusercontent.com/ytc/AIdro_mcSBbWEONbXB8lgdlbvj2rrzmLzbCLAg_v1ECMj1VJQDM=s160-c-k-c0x00ffffff-no-rj"
            alt=""
          />
          <p>Creative Thinks</p>
        </div>
        <div className="side-link">
          <img
            src="https://yt3.googleusercontent.com/o4MZVi2qdNgx0K7vpEl7DT2PefjROdisZTD7is6TMimF1_DTM49O1ld3iQzTpE5MCj86c-vzav8=s160-c-k-c0x00ffffff-no-rj"
            alt=""
          />
          <p>Telusko</p>
        </div>
      </div>
    </div>
  );
};
