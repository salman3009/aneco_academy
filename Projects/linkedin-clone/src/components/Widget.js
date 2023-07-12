import React from "react";
import "./../styles/Widget.css";

const Widget = () => {
  return (
    <div className="widgets libd">
      <div className="widgets__header">
        <h2>LinkedIn Clone</h2>
        <i className="material-icons"> info </i>
      </div>
      <div className="widgets__article">
        <div className="widgets__article--left">
          <i className="material-icons"> fiber_manual_record </i>
        </div>
        <div className="widgets__article--right">
          <h4>Coding LinkedIn Clone</h4>
          <p>Top news - 4500 readers</p>
        </div>
      </div>

      <div className="widgets__article">
        <div className="widgets__article--left">
          <i className="material-icons"> fiber_manual_record </i>
        </div>
        <div className="widgets__article--right">
          <h4>Coding LinkedIn Clone</h4>
          <p>Top news - 4500 readers</p>
        </div>
      </div>

      <div className="widgets__article">
        <div className="widgets__article--left">
          <i className="material-icons"> fiber_manual_record </i>
        </div>
        <div className="widgets__article--right">
          <h4>Coding LinkedIn Clone</h4>
          <p>Top news - 4500 readers</p>
        </div>
      </div>
    </div>
  );
};

export default Widget;
