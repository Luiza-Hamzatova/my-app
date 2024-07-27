import React, { useState } from "react";
const Task__two = () => {
  const [fahrenheit, setFahrenheit] = useState("");
  const [celsius, setCelsius] = useState("");
  const convert = (setFahrenheit) => {
    if (fahrenheit === "") {
      setCelsius("");
    } else {
      setCelsius = (fahrenheit - 32) / 1.8;
    }
  };
  return (
    <div className="wrapper">
      <input
        type="number"
        placeholder="Fahrenheit"
        value={fahrenheit}
        onChange={(event) => setFahrenheit(event.target.value)}
      />
      <input
        type="number"
        placeholder="Celsius"
        value={celsius}
        onChange={(event) => setCelsius(event.target.value)}
      />
    </div>
  );
};
export default Task__two;
