import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTravelData } from "../features/Travel";
import "./../styles/SeatSelection.css";

const SeatSelection = () => {
  const travelData = useSelector((state) => state.travel.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const set = new Set();

  const seatSelector = (e) => {
    const seatNo = +e.target.textContent.slice(-2);
    if (e.target.style.backgroundColor === "") {
      set.add(seatNo);
      e.target.style.backgroundColor = "red";
    } else if (e.target.style.backgroundColor === "red") {
      set.delete(seatNo);
      e.target.style.backgroundColor = "gray";
    } else {
      set.add(seatNo);
      e.target.style.backgroundColor = "red";
    }
    // console.log(set.size);
  };

  const bookSeat = () => {
    if (set.size > 0) {
      dispatch(
        setTravelData({
          ...travelData,
          price: travelData.price * set.size,
          seats: set.size,
        })
      );
      navigate("/ticketstatus");
    }
  };

  return (
    <div className="seatSelector">
      <h1>
        Seat Selection:{" "}
        <span className="sortBySpan">Select Atleast 1 Seat</span>
      </h1>
      <button
        onClick={bookSeat}
        style={{
          color: "white",
          margin: "5px",
          padding: "5px",
          border: "2px transparent solid",
          borderRadius: "5px",
          width: "100%",
          background: "rgb(255,0,87)",
          background:
            "linear-gradient(90deg, rgba(255,0,87,1) 46%, rgba(255,0,129,1) 100%)",
        }}
      >
        Book Seats
      </button>
      <div className="grid-layout" onClick={seatSelector}>
        <div className="grid-item grid-item-1">SEAT 01 </div>
        <div className="grid-item grid-item-2">SEAT 02</div>
        <div className="grid-item span-3 grid-item-3">SEAT 03</div>
        <div className="grid-item grid-item-4">SEAT 04</div>
        <div className="grid-item span-2 grid-item-5">SEAT 05</div>
        <div className="grid-item grid-item-6">SEAT 06</div>
        <div className="grid-item grid-item-7">SEAT 07</div>
        <div className="grid-item grid-item-8">SEAT 08</div>
        <div className="grid-item grid-item-9">SEAT 09</div>
        <div className="grid-item span-2 grid-item-10">SEAT 10</div>
        <div className="grid-item grid-item-11">SEAT 11</div>
        <div className="grid-item grid-item-12">SEAT 12</div>
        <div className="grid-item span-2 grid-item-13">SEAT 13</div>
        <div className="grid-item grid-item-14">SEAT 14</div>
        <div className="grid-item grid-item-15">SEAT 15</div>
        <div className="grid-item grid-item-16">SEAT 16</div>
        <div className="grid-item span-3 grid-item-17">SEAT 17</div>
        <div className="grid-item grid-item-18">SEAT 18</div>
        <div className="grid-item grid-item-19">SEAT 19</div>
        <div className="grid-item grid-item-20">SEAT 20</div>
        <div className="grid-item span-2 grid-item-21">SEAT 21</div>
        <div className="grid-item grid-item-22">SEAT 22</div>
        <div className="grid-item grid-item-23">SEAT 23</div>
        <div className="grid-item grid-item-24">SEAT 24</div>
        <div className="grid-item grid-item-25">SEAT 25</div>
        <div className="grid-item span-3 grid-item-26">SEAT 26</div>
        <div className="grid-item grid-item-27">SEAT 27</div>
        <div className="grid-item grid-item-28">SEAT 28</div>
        <div className="grid-item grid-item-29">SEAT 29</div>
        <div className="grid-item grid-item-30">SEAT 30</div>
        <div className="grid-item grid-item-31">SEAT 31</div>
        <div className="grid-item grid-item-32">SEAT 32</div>
        <div className="grid-item grid-item-33">SEAT 33</div>
        <div className="grid-item grid-item-34">SEAT 34</div>
        <div className="grid-item grid-item-35">SEAT 35</div>
        <div className="grid-item grid-item-36">SEAT 36</div>
        <div className="grid-item grid-item-37">SEAT 37</div>
        <div className="grid-item grid-item-38">SEAT 38</div>
        <div className="grid-item grid-item-39">SEAT 39</div>
      </div>
    </div>
  );
};

export default SeatSelection;
