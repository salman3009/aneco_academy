import React from "react";
import "../css/body.css";
import { Avatar } from "@mui/material";

const AnswerCard = ({ id, name, question, answer }) => {
  return (
    <div className="answer-card" id={id}>
      <div className="answer-card-profile">
        <Avatar style={{ fontSize: "16px", width: "30px", height: "30px" }}>
          {name.charAt(0)}
        </Avatar>
        <h2>{name}</h2>
      </div>
      <h4 style={{ padding: "0px 10px" }}>Q. {question}</h4>
      <hr style={{ marginBottom: "5px" }} />

      {answer.map((obj, index) => (
        <div key={index}>
          <p
            style={{
              letterSpacing: "0.7px",
              fontFamily: "sans-serif",
              width: "600px",
              paddingLeft: "30px",
            }}
          >
            {obj.ans}
          </p>
          <p
            style={{
              textAlign: "right",
              fontSize: "14px",
              fontFamily: "cursive",
              padding: "10px",
            }}
          >
            Answered By:- {obj.answeredBy}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AnswerCard;
