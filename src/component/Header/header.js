import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const onlogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div className="head-Box">
      <div className="logo">
        <Link to="/">starkbank</Link>
      </div>
      {user ? (
        <li>
          <button onClick={onlogout}>
            <FaSignOutAlt />
          </button>
        </li>
      ) : (
        <>
          <li>
            <Link to="/login">
              Login
              <FaSignInAlt />
            </Link>
          </li>
          <li>
            <Link to="/register">
              Register
              <FaUser />
            </Link>
          </li>
        </>
      )}
      <ul></ul>
    </div>
  );
};

export default Header;
