import React, { useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import "../css/header.css"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addData } from "../redux/slices/questionAnswerSlice";

const Header = () => {
    const [serarchText, setSearchText] = useState("");
    const [login, setLogin] = useState(false)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        localStorage.removeItem("quoraLogin")
        setLogin(false)
    }

    useEffect(()=> {

        fetch("http://localhost:4000/search",{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({text: serarchText.toLowerCase()})
        })
        .then((response)=> {
            return response.json();
        })
        .then((result) => {
            if (result.status === "success") {
                dispatch(addData(result))
            }
        })
        .catch((err)=> {console.log(err)});

    },[serarchText])

    useEffect(()=> {
        if(localStorage.getItem("quoraLogin")) {
            setLogin(true)
        }
    },[login])

    return (
        <div className="header">
            <div className="header-logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGZVurt8r1so9YWuK5gV3pIVuhxgzg-dvUhm4bdcUAaMZPNpu9PI9KzWPGPDB7HqUHw&usqp=CAU" alt="quora logo" />
            </div>
            <div className="header-search">
                <SearchIcon/>
                <input type="text" placeholder="Search for questions..." value={serarchText} onChange={(e)=> setSearchText(e.target.value)}/>
            </div>
            <div className="header-buttons">
                <button onClick={()=> navigate("/add-question")}>Add questions</button>
                <button onClick={()=> navigate("/add-answer")}>Answer questions</button>
                { login ? <button onClick={handleLogout}>Logout</button> :
                    <button onClick={()=> navigate("/login")}>Login</button>}
            </div>
        </div>
    )
}

export default Header;