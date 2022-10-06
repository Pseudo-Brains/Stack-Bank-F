import { useState } from "react";
// import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import "./pretransfer.scss";
import { reset, preTransfer } from "../../features/bank/bankslice";

const Pretransfer = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleSubmitt = (e) => {
    e.preventDefault();
    console.log(e);
    dispatch(preTransfer(text));
    setText("");
  };

  return (
    <form className="formy" onSubmit={handleSubmitt}>
      <label htmlFor="Pretransfer">
        Account Number:
        <input
          type="number"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Acc.No"
        />
      </label>
      <br />
      <button type="submit">ghff</button>
    </form>
  );
};

export default Pretransfer;
