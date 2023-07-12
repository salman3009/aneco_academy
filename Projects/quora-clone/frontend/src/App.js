import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import AddQuestionPage from "./components/AddQuestionPage";
import "./css/app.css";
import AddAnswerPage from "./components/AddAnswerPage";
import Login from "./components/Login"
import Register from "./components/Register";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/add-question" element={<AddQuestionPage/>} />
          <Route path="/add-answer" element={<AddAnswerPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
