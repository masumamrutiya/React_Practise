import React, { useEffect, useState } from "react";

function Mycounter() {
  const [count, setcount] = useState(0);


  useEffect(()=>{
    // Call to be Excecuted 
    console.log("The count is : ", count);


    // udate kre 
    console.log("Component update");


    
return(()=>{
    console.log("Cleaned up");
})
  },[count])

//   optional return




  return (
    <>
      <div className="container">
        <h1>count is : {count} </h1>
        <button
          className="btn btn-success"
          onClick={() => {
            setcount(count+1);
          }}
        >
          increment
        </button>
        <button
          className="btn btn-success"
          onClick={() => {
           setcount(count-1)
          }}
        >
          decrement
        </button>
      </div>
    </>
  );
}

export default Mycounter;
