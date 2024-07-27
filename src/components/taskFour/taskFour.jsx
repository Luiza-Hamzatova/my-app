import { useState } from "react";

const TaskFour = () => {
  const [firstNum, setFerstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [result, setResult] = useState(null);
  const sum = () => {
    setResult(parseFloat(firstNum) + parseFloat(secondNum));
  };
  return (
    <div className="wrapper">
      <input
        type="number"
        value={firstNum}
        onChange={(e) => setFerstNum(e.target.value)}
      />
      <input
        type="number"
        value={secondNum}
        onChange={(e) => setSecondNum(e.target.value)}
      />
      <br />
      <button onClick={sum}>Сумма</button>
      <p>{result}</p>
    </div>
  );
};
export default TaskFour;
