import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTravelData } from "../features/Travel";
import "./../styles/Header.css";

const Header = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (from !== "" && !to !== "" && dateFrom !== "") {
      dispatch(
        setTravelData({
          from,
          to,
          date: dateFrom,
          price: 0,
          seats: 0,
        })
      );
      navigate(`/search/${from}/${to}`);
    }
  };

  const valueSwitch = () => {
    const fr = from;
    const t = to;
    setFrom(t);
    setTo(fr);
  }


  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-danger navbar-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="https://i.postimg.cc/zXFNsGkg/redbus-white.png"
              alt="redBus"
              width="60px"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#menu-nav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/*   Navbar links    */}
          <div className="collapse navbar-collapse" id="menu-nav">
            {/*   Left-aligned nav (default)    */}
            <div>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link text-white text-uppercase" href="#">
                    Bus Tickets
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white text-uppercase" href="#">
                    Hotels
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white text-uppercase" href="#">
                    Bus Hire
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white text-uppercase" href="#">
                    Pilgrimages
                  </a>
                </li>
              </ul>
            </div>

            {/*   Right-aligned nav    */}
            <div
              className="collapse navbar-collapse justify-content-end"
              id="menu-nav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Help
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-white"
                    href="#"
                    data-toggle="dropdown"
                  >
                    Manage Booking
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Link 1
                    </a>
                    <a className="dropdown-item" href="#">
                      Link 2
                    </a>
                    <a className="dropdown-item" href="#">
                      Link 3
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-white"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <i className="fas fa-user-circle"></i>
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Sign In/Sign Up
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/*   Main Home Banner and Input Search Container    */}
      <div className="position-relative">
        <div>
          <div className="home-banner"></div>
        </div>

        <div className="input-search-container">
          <form
            className="d-flex justify-content-center"
            onSubmit={handleSubmit}
          >
            <div className="d-inline-block position-relative">
              <span className="inputIcon">
                <i className="far fa-building"></i>
              </span>
              <label
                className="inputLabel-default"
                htmlFor="input-label-from"
              ></label>
              <input
                id="input-label-from"
                className="inputForm"
                type="text"
                value={from}
                placeholder="FROM"
                onChange={(e) => {
                  setFrom(e.target.value);
                }}
                list="input-from-list"
              />
              <datalist id="input-from-list">
                {/*   <option value="Gurgaon"></option>    */}
              </datalist>
            </div>

            <button className="btn btn-danger rounded-0 pl-3 pr-3 pb-2" onClick={valueSwitch}>&#8596;</button>

            <div className="d-inline-block position-relative">
              <span className="inputIcon">
                <i className="far fa-building"></i>
              </span>
              <label
                className="inputLabel-default"
                htmlFor="input-label-to"
              ></label>
              <input
                id="input-label-to"
                className="inputForm"
                type="text"
                placeholder="TO"
                value={to}
                onChange={(e) => {
                  setTo(e.target.value);
                }}
                list="input-to-list"
              />
              <datalist id="input-to-list">
                {/*   <option value="Delhi"></option>    */}
              </datalist>
            </div>


            <div className="d-inline-block position-relative">
              <span className="inputIcon">
                <i className="fas fa-calendar-alt"></i>
              </span>
              <label
                className="inputLabel-default"
                htmlFor="input-label-onward-date"
              ></label>
              
              <input
                id="input-label-onward-date"
                className="inputForm"
                type="date"
                onChange={(e) => {
                  setDateFrom(e.target.value);
                }}
              />
            </div>

            <div className="d-inline-block position-relative">
              <input
                className="btn btn-danger rounded-0 pl-3 pr-3 pb-2"
                type="submit"
                value="Search Buses"
              />
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
