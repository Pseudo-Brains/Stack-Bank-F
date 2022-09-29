// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// function Banking() {
//   return <div>Banking</div>;
// }
import "./banking.scss";
import { FaWallet, FaHandHoldingUsd, FaMoneyBill } from "react-icons/fa";

import React from "react";

const Banking = () => {
  return (
    <div className="main-bank-container">
      <div className="banking-box-one">
        <div className="babking-ser">Banking Services</div>
        <div className="bnk-ser-box">
          <div className="ser-box">
            <FaHandHoldingUsd />
            Transfer Services
          </div>
          <div className="ser-box">
            <FaWallet />
            Loan Services
          </div>
          <div className="ser-box">
            <h2>
              <FaMoneyBill />
            </h2>
            Airtime rechare
          </div>
        </div>
      </div>
      <div className="banking-box-two">
        <div className="babking-ser">Transaction History</div>
        <div className="bnk-ser-box"></div>
      </div>
    </div>
  );
};

export default Banking;

/* 
        
         */

//
