
import React, { useState } from "react";

function Colorchange() {
    const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState("bg-dark");

  function Increment() {
    setCount(count + 1);
    changeBackgroundColor(count + 1);
  }

  function Decrement() {
    setCount(count - 1);
    changeBackgroundColor(count - 1);
  }

  function changeBackgroundColor(newCount) {
    if (newCount > 0) {
      setBgColor("bg-success");
    } else if (newCount < 0) {
      setBgColor("bg-danger");
    } else {
      setBgColor("bg-dark");
    }
  }
  return (
    <>
    <div className={`text-center mx-5 ${bgColor}`}>
        <h1 className="text-white">Counter</h1>
        <button type="button" className="btn btn-primary" onClick={Increment}>
          Increment
        </button>
        <button type="button" className="btn btn-dark m-3">
          {count}
        </button>
        <button type="button" className="btn btn-success" onClick={Decrement}>
          Decrement
        </button>
      </div>
    </>
  )
}

export default Colorchange