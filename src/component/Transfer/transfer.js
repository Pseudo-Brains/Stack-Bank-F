import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { preTransfer, reset } from "../../features/bank/bankslice";
// import { login, reset } from "../../features/auth/authSlice";

const Transfer = () => {
  const { register, handleSubmit } = useForm();
  const [pre, setPre] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.bank
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [isError, isLoading, message, navigate, dispatch, isSuccess]);

  const handleChange = function (e) {
    setPre(e.target.value);
    let rhy = pre.length;
    console.log(rhy);

    if (rhy === 10) {
      dispatch(preTransfer(pre));
      //   useEffect(() => {
      //     if (isError) {
      //       toast.error(message);
      //     }
      //     if (isSuccess || user) {
      //       navigate("/dashboard");
      //     }
      //     dispatch(reset());
      //   }, [user, isError, isLoading, message, navigate, dispatch, isSuccess]);
    }
  };

  const submission = (data) => {
    console.log(data);
    console.log(data.account);

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
              {...register("accountnumber", { required: "This is required" })}
              placeholder="Acc.No"
              type="number"
              value={pre}
              onChange={handleChange}
              // onChange={(e) =>() }
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
