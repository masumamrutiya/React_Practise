import React, { useState } from "react";

function Counterp() {
  const [count, setCount] = useState(0);
  function Increment() {
    setCount(count + 1);
    console.log("count is ");
  }
  function Decrement() {
    setCount(count - 1);
    console.log("count is ");
  }
  return (
    <>

      <div className="text-center mx-5">
        <h1 className="bg-dark text-white">Counter</h1>
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
  );
}

export default Counterp;
