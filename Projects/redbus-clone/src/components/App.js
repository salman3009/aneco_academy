import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../styles/App.css";
import Header from "./Header";
import Home from "./Home";
import SearchBus from "./SearchBus";
import SeatSelection from "./SeatSelection";
import TicketStatus from "./TicketStatus";
const App = () => {
  return (
    <div id="main" className="header">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:from/:to" element={<SearchBus />} />
          <Route path="/seatselection" element={<SeatSelection />} />
          <Route path="/ticketstatus" element={<TicketStatus />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
