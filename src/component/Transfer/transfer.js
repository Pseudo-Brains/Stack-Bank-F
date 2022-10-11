import React from "react";
// import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { preTransfer, reset } from "../../features/bank/bankslice";

const Transfer = () => {
  const { register, handleSubmit } = useForm();

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
      navigate("/transfer");
    }
    dispatch(reset());
  }, [isError, isLoading, message, navigate, dispatch, isSuccess]);

  const onsubmit = (data) => {
    console.log(data);
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
        <form onSubmit={handleSubmit(onsubmit)}>
          <label htmlFor="amount">
            Amount:
            <input {...register("amount")} placeholder="amount" />
          </label>
          <label htmlFor="Password">
            Acc.No:
            <input
              {...register("accountnumber", {
                onChange: (e) => {
                  let rr = e.target.value;
                  console.log(rr.length);
                  if (rr.length === 11) {
                    let dd = { [e.target.name]: parseInt(e.target.value) };
                    // console.log(dd);
                    dispatch(preTransfer(dd));
                  }
                },
              })}
              placeholder="Account Number"
              type="number"
            />
          </label>
          <label htmlFor="Password">
            Description:
            <input
              {...register("description", { required: "This is required" })}
              placeholder="Descrition"
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
