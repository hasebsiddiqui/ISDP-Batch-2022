import { React, useState } from "react";

const Counter = ({ counter, setCounter }) => {
  //   var counter = 0;
  //   const counter = props.counter;
  //   const setCounter = props.setCounter;

  const handleIncrement = () => {
    console.log("inincrement:", counter);
    // counter++;
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    console.log("indecrement:", counter);
    setCounter(counter - 1);
    // counter--;
  };
  return (
    <div style={{ padding: "60px", fontSize: "4rem" }}>
      <button onClick={handleIncrement}>++</button>
      {counter}
      <button onClick={handleDecrement}>--</button>
    </div>
  );
};

export default Counter;
