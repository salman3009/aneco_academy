import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./../styles/TicketStatus.css";

const TicketStatus = () => {
  const travelData = useSelector((state) => state.travel.value);
  const navigate = useNavigate();
  const bookNew = () => {
    navigate("/");
  };

  return (
    <div className="cardBox">
      <div id="showScroll" className="containerCard">
        <div className="receipt">
          <h1 className="logo">RedBus</h1>
          <div className="address">RedBus Inc. Bangalore</div>
          <div className="transactionDetails">
            <div className="detail">FR#{travelData.from}</div>
            <div className="detail">TO#{travelData.to}</div>
            <div className="detail">DATE#{travelData.date}</div>
            <div className="detail">SEATS#{travelData.seats}</div>
          </div>
          <div className="transactionDetails">
            Receipt: RedBus Travel Coordinator
          </div>
          <div className="centerItem bold">
            <div className="item">PAYMENT VISA Card #: *********1875</div>
          </div>
          <div className="transactionDetails">
            <div className="detail">SEATS</div>
            <div className="detail">{travelData.seats}</div>
            <div className="detail">INR {travelData.price} /-</div>
          </div>
          <div className="survey bold">
            <p>PAYMENT DETAILS #</p>
            <p className="surveyID">AMOUNT PAID: SEAT BOOKED</p>
          </div>
          <div className="paymentDetails bold">
            <div className="detail">TOTAL</div>
            <div className="detail">INR {travelData.price} /-</div>
          </div>
          <div className="paymentDetails">
            <div className="detail">AMOUNT PAID</div>
            <div className="detail">{travelData.price} /-</div>
          </div>
          <div className="paymentDetails">
            <div className="detail">************4023</div>
            <div className="detail">CH</div>s
          </div>
          <div className="creditDetails">
            <p>VISA CREDIT &nbsp;&nbsp;&nbsp;&nbsp; ****************</p>
            <p>approved# 09773B</p>
            <p>ref# 013589</p>
            <p>tran type: SALE</p>
            <p>AID: 30000000090755</p>
            <p>TC: B7A2A4044AEE380A4</p>
            <p>terminal: 69010003</p>
            <p>no signature required</p>
            <p>CVM: 1e0300</p>
            <p>TMR(95): 0080081111</p>
            <p>TS(9B): E900</p>
          </div>

          <div className="paymentDetails">
            <div className="detail">Payment Due</div>
            <div className="detail">INR 0.00 /-</div>
          </div>
        </div>
        <button
          onClick={bookNew}
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
          Make Another Reservation? Click Here!
        </button>
      </div>
    </div>
  );
};

export default TicketStatus;
