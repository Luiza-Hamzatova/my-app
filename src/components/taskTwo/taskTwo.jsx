import React, { useState } from "react";
const TaskTwo = () => {
  const [fahrenheit, setFahrenheit] = useState("");
  const [celsius, setCelsius] = useState("");
  const convert = (fahrenheit) => {
    if (fahrenheit === "") {
      setCelsius("");
    } else {
      setCelsius((fahrenheit - 32) / 1.8);
    }
  };
  return (
    <div className="wrapper">
      <input
        type="number"
        placeholder="Fahrenheit"
        value={fahrenheit}
        onChange={(event) => {
          setFahrenheit(event.target.value);
          convert(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Celsius"
        value={celsius}
        onChange={(event) => setCelsius(event.target.value)}
      />
    </div>
  );
};
export default TaskTwo;
