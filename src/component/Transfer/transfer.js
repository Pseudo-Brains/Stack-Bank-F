import React from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { login, reset } from "../../features/auth/authSlice";

const Transfer = () => {
  const { register, handleSubmit } = useForm();
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const { user, isLoading, isError, message, isSuccess } = useSelector(
  //   (state) => state.auth
  // );
  // );

  const submission = (data) => {
    console.log(data);
    // console.log(data.);
    // dispatch(login(data));
  };

  return (
    <div className="box-main">
      <div className="box">
        <div className="header">
          <p>Transfer</p>
          <Link to="/">
            <h1>
              <FaHome />
            </h1>
          </Link>
        </div>
        <form onSubmit={handleSubmit(submission)}>
          <label htmlFor="Amount">
            Amount:
            <input
              {...register("amount", { required: "This is required" })}
              placeholder="Amount"
            />
          </label>
          <label htmlFor="Ac.no">
            Acc.No:
            <input
              {...register("account", { required: "This is required" })}
              placeholder="Acc.No"
              type="number"
            />
          </label>
          <label htmlFor="Description">
            Description:
            <input
              {...register("description", { required: "This is required" })}
              placeholder="Description"
            />
          </label>
          <label htmlFor="">
            <button>submit</button>
          </label>
        </form>
        <span>
          Not registered <Link to="/register">click</Link>here to register
        </span>
      </div>
    </div>
  );
};

export default Transfer;
