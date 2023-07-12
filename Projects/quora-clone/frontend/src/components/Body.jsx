import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import "../css/body.css"
import { addData } from "../redux/slices/questionAnswerSlice";
import AnswerCard from "./AnswerCard";

const Body = () => {
    const allData = useSelector((state)=> state.questionAnswer);
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch()

   useEffect(()=> {
    // fetch("http://localhost:5000/")
    setLoading(true)
    fetch("http://localhost:4000/")
    .then((response)=> {
        return response.json();
    })
    .then((data)=> {
        dispatch(addData(data));
        setLoading(false)
    })
    .catch((err)=> {console.log(err)})

   },[dispatch])

    return (
        <div className="body">
            {console.log(allData)}

           
            
            <div className="body-answer-question">
               
                {  loading? <img src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif" alt="" /> : allData.map((obj)=> {
                    if (obj.answer.length > 0) {
                        return <AnswerCard key={obj._id} id={obj._id} name={obj.questionedBy} question={obj.question} answer={obj.answer}/>
                    }

                    return null;
                })}
               
            </div>
            <div className="body-question-list">
                <h1>Question list</h1>
                {allData.map((obj)=> <p key={obj._id}><HashLink to={`/#${obj._id}`}>{obj.question}</HashLink></p>)}
            </div>
                
        </div>
    )
}

export default Body;