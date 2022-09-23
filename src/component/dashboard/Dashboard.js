import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaUser, FaHome, FaBook, FaPhone } from "react-icons/fa";
import "./dashboard.scss";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    // <section className="dashboard-container">
    <div className="dashboard">
      <div className="Dashboard-box-1">
        <p>
          <FaUser />
          Welcome {user && user.name}
        </p>
        <p>
          <FaHome />
          Dashboard
        </p>
        <p>
          <FaBook />
          Services
        </p>
        <p>
          <FaPhone />
          Customer Care
        </p>
      </div>
      <div className="dashboard-box-2">
        <div className="atm">
          <p>Card No: **** **** **** *****</p>
        </div>
      </div>
      <div className="dashboard-box-3">
        <div className="acc-number">
          Account Number: <b>{user && user.accountnumber}</b>
        </div>
        <div className="acc-balance">Balance :</div>
      </div>
    </div>
    // </section>
  );
};

export default Dashboard;
