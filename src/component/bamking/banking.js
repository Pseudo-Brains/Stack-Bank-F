import "./banking.scss";
import { FaWallet, FaHandHoldingUsd, FaMoneyBill } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banking = () => {
  return (
    <div className="main-bank-container">
      <div className="banking-box-one">
        <div className="babking-ser">Banking Services</div>
        <div className="bnk-ser-box">
          <div className="ser-box">
            <Link to="/transfer">
              <FaHandHoldingUsd />
              Transfer Services
            </Link>
          </div>
          <div className="ser-box">
            <Link to="/loan">
              <FaWallet />
              Loan Services
            </Link>
          </div>
          <div className="ser-box">
            <Link to="/airtime">
              <FaMoneyBill />
              Airtime recharge
            </Link>
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
