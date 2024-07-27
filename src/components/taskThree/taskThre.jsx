import { useState } from "react";

const TaskThree = () => {
  const colors = ["#fff0f5", "#f0f8ff",'#ffffff'];
  const [color, setColor] = useState(0);
  const changeColor = () => {
    setColor((color + 1) % colors.length);
    document.body.style.backgroundColor = colors[color];
  };
  return (
    <div className="wrapper">
      <button onClick={changeColor}> Меняем цвет фона </button>
    </div>
  );
};
export default TaskThree;
