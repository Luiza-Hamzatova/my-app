import { useState } from "react";

const Task__one = () => {
  const [counter, setCounter] = useState(0);
  const [isDisibledOneBtn, setIsDisibledOneBtn] = useState(false);
  const [isDisibledTwoBtn, setIsDisibledTwoBtn] = useState(true);
  const increaseNumber = () => {
    setCounter(counter + 1);
    if (counter + 1 === 10) {
      setIsDisibledOneBtn(true);
    }
    if (counter + 1 > 0) {
      setIsDisibledTwoBtn(false);
    }
  };
  const decrementNumber = () => {
    setCounter(counter - 1);
    if (counter - 1 < 10) {
      setIsDisibledOneBtn(false);
    }
    if (counter - 1 === 0) {
      setIsDisibledTwoBtn(true);
    }
  };

  return (
    <div className="wrapper">
      <h1 className=" tittle">{counter}</h1>
      <div className="buttons">
        <button
          onClick={increaseNumber}
          className={`btn ${isDisibledOneBtn ? "btn_disibled" : ""}`}
        >
          +1
        </button>
        <button
          onClick={decrementNumber}
          className={`btn ${isDisibledTwoBtn ? "btn_disibled" : ""}`}
        >
          -1
        </button>
      </div>
    </div>
  );
};
export default Task__one;
