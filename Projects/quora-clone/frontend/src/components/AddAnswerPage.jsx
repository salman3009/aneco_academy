import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/addAnswer.css"
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";

const AddAnswerPage = () => {
    const [answer, setAnswer] = useState("");
    const [selectedQuestion, setSelectedQuestion] = useState({id:"",question:""});

    const allData = useSelector((state)=> state.questionAnswer)
    const navigate = useNavigate();
    const loginData = useSelector((state)=> state.login);

    const handleAddAnswer = (e) => {
        let obj = {
            id: selectedQuestion.id,
            answer: answer,
            answeredBy: loginData.userName
        }

        console.log(obj);
        fetch("http://localhost:4000/add-answer",{
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(obj)
        })
        .then((response)=> {
            return response.json();
        })
        .then((result)=> {
            if (result.status === 'success'){
                toast.success("Answer successfully");
                setAnswer("");
                setSelectedQuestion({id:"", question:""});
            }else{
                toast.error("Answer could not add")
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
        <div className="add-answer">
            <div>
                <Toaster position="top-right" reverseOrder={false} />
            </div>
            <Logo/>
            <div className="add-answer-body">
                <div className="question-answer">
                    <div className="question-answer-left">
                        <h1>Select Question</h1>
                        {allData.map((obj)=> <p key={obj._id}><Link  onClick={()=> setSelectedQuestion({
                            id: obj._id,
                            question: obj.question
                        })}>{obj.question}</Link></p>)}

                    </div>
                    <div className="question-answer-right">
                        <h4>Question: {selectedQuestion.question}.</h4>
                        <h1>Answer: </h1>
                        <textarea name="answer" id="" cols="30" rows="10" placeholder="Type your answer here....." value={answer} onChange={(e)=> setAnswer(e.target.value)}></textarea>
                    </div>
                </div>
                <div className="add-answer-buttons">
                    <button onClick={()=> navigate("/")}>Cancel</button>
                    <button style={{fontWeight:"bold"}}onClick={handleAddAnswer}>Add answer</button>
                </div>
            </div>
        </div>
    )
}

export default AddAnswerPage;