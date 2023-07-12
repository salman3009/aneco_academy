import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/addQuestion.css";
import Logo from "./Logo";

import { useSelector } from "react-redux";
import { toast, Toaster } from "react-hot-toast";

const AddQuestionPage = () => {
  const [question, setQuestion] = useState('');
  const navigate = useNavigate();
  const loginData = useSelector((state)=> state.login);


  const handleAddQuestion = (e) => {
    let obj = {
      questionedBy: loginData.userName,
      question: question,
      answer: []
    }

    fetch("http://localhost:4000/add-question", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    })
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      if (data.status === 'success'){
        toast.success("Question added successfully");
        setQuestion("");
      }else{
        toast.error("Question could not add")
      }
    })
    .catch((err)=> {console.log(err)});
  }

  useEffect(()=>{
    if (!localStorage.getItem("quoraLogin")) {
      navigate("/login")
    }
  })

  return (
    <div className="add-question">
       <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      <Logo />
      <div className="add-question-body">
        <div className="question-box">
          Queston:{" "}
          <input type="text" placeholder="Type your question here..." value={question} onChange={(e)=> setQuestion(e.target.value)}/>
        </div>
        <div className="question-buttons">
          <button onClick={()=> navigate("/")}>Cancel</button>
          <button style={{fontWeight:"bold"}} onClick={handleAddQuestion}>Add question</button>
        </div>
      </div>
    </div>
  );
};

export default AddQuestionPage;
