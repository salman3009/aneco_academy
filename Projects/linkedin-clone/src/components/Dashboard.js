import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./../styles/Dashboard.css";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Widget from "./Widget";
import posts from "../mock_backend/Posts";
import Card from "./Card";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.value);
  const [post, setPost] = useState("");
  const [displayPosts, setDisplayPosts] = useState(posts);

  const display = (postData) => {
    setDisplayPosts(postData);
  };

  const handlePost = (e) => {
    e.preventDefault();
    posts.unshift({
      id: displayPosts.length + 1,
      initial: user.name.slice(0, 1).toUpperCase(),
      name: user.name,
      description: "User",
      post: post,
      likes: new Set(),
      comments: [],
    });
    setDisplayPosts([...posts]);
    setPost("");
  };

  useEffect(() => {
    if (user.isLoggedIn === false) navigate("/");
    else console.log(user);
  }, []);

  return (
    <div className="dashboard">
      <Navbar />
      <div className="body__main">
        <Sidebar />
        <div className="feed">
          <div className="feed__input--container libd">
            <div className="feed__input--wrapper">
              <div className="account__avatar">
                <div className="account__avatar--img"></div>
              </div>
              <form className="feed__input" onSubmit={handlePost}>
                <input
                  type="text"
                  value={post}
                  placeholder="Start a post"
                  onChange={(e) => {
                    setPost(e.target.value);
                  }}
                />
                <button type="submit">Send</button>
              </form>
            </div>

            <div className="feed__input--options">
              <div className="input__option">
                <i style={{ color: "#70b5f9" }} className="material-icons">
                  {" "}
                  insert_photo{" "}
                </i>
                <h4>Photo</h4>
              </div>
              <div className="input__option">
                <i style={{ color: "#7fc15e" }} className="material-icons">
                  {" "}
                  subscriptions{" "}
                </i>
                <h4>Video</h4>
              </div>
              <div className="input__option">
                <i style={{ color: "#e7a33e" }} className="material-icons">
                  {" "}
                  event_note{" "}
                </i>
                <h4>Event</h4>
              </div>
              <div className="input__option">
                <i style={{ color: "#fc9295" }} className="material-icons">
                  {" "}
                  calendar_view_day{" "}
                </i>
                <h4>Write Article</h4>
              </div>
            </div>
          </div>

          {displayPosts.map((e) => (
            // <div className="post libd" key={e.id}>
            //   <div className="post__header">
            //     <div className="account__avatar">
            //       <div className="account__details">{e.initial}</div>
            //     </div>
            //     <div className="post__info">
            //       <h2 className="random__name">{e.name}</h2>
            //       <p>{e.description}</p>
            //     </div>
            //   </div>

            //   <div className="post__body">
            //     <div className="post__message">
            //       <p>{e.post}</p>
            //     </div>
            //     <div className="post__creative">
            //       {/* <img src="https://picsum.photos/560?random=3" alt="postImage" /> */}
            //     </div>
            //     <div className="post__summary"></div>
            //   </div>

            //   <div className="post__engagement--container">
            //     <div className="post__engagement--metrics">
            //       <img
            //         className=""
            //         src="https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
            //         alt="like"
            //       />
            //       <span className="linkedin__engagement">{e.likes.size}</span>
            //     </div>
            //     <div className="post__engagement--ampiflications">
            //       <span className="post__engagement--comment">
            //         <span className="linkedin__engagement">
            //           {e.comments.length}{" "}
            //         </span>
            //         comments
            //       </span>
            //       <span className="post__engagement--shares">
            //         <span className="linkedin__engagement">#</span> shares
            //       </span>
            //     </div>
            //   </div>
            //   <div className="post__engagement--comments">
            //     {e.comments.map((commentUser) => (
            //       <div>
            //         <h4>{commentUser.name}</h4>
            //         <p>{commentUser.comment}</p>
            //       </div>
            //     ))}
            //   </div>
            //   <div className="post__engagement--comments">
            //     {toggleComment ? (
            //       <form
            //         className="comment__input"
            //         onSubmit={(event) => {
            //           event.preventDefault();
            //           handleComment(e);
            //         }}
            //       >
            //         <input
            //           className="post__engagement_input"
            //           type="text"
            //           value={comment}
            //           placeholder="Write A Comment"
            //           onChange={(e) => {
            //             setComment(e.target.value);
            //           }}
            //         />
            //         <button type="submit">Send</button>
            //       </form>
            //     ) : (
            //       ""
            //     )}
            //   </div>

            //   <div
            //     className="feed__input--options"
            //     onClick={() => {
            //       toggleLike(e);
            //     }}
            //   >
            //     <div className="input__option">
            //       <i style={{ color: "gray" }} className="material-icons">
            //         {" "}
            //         thumb_up{" "}
            //       </i>
            //       <h4>Like</h4>
            //     </div>
            //     <div
            //       className="input__option"
            //       onClick={() => {
            //         setToggleComment(!toggleComment);
            //       }}
            //     >
            //       <i style={{ color: "gray" }} className="material-icons">
            //         {" "}
            //         comment{" "}
            //       </i>
            //       <h4>Comment</h4>
            //     </div>
            //     <div className="input__option">
            //       <i style={{ color: "gray" }} className="material-icons">
            //         {" "}
            //         share{" "}
            //       </i>
            //       <h4>Share</h4>
            //     </div>
            //     <div className="input__option">
            //       <i style={{ color: "gray" }} className="material-icons">
            //         {" "}
            //         send{" "}
            //       </i>
            //       <h4>Send</h4>
            //     </div>
            //   </div>
            // </div>
            <div key={e.id}>
              <Card e={e} display={display} />
            </div>
          ))}
        </div>
        <Widget />
      </div>
    </div>
  );
};

export default Dashboard;
