import React, { useReducer, useState } from "react";

const initialvalue = {
  Name: "",
  Email: "",
  Num: "",
};

function reducerfunction(prevState, nextState) {
    console.log("ReducernextState = ", nextState);
    
    return {...prevState, ...nextState}
}



function Usereducerform() {

    
  const [Form, Setform] = useReducer(reducerfunction , initialvalue);

  function Handlename(e) {
    Setform({ ...Form, Name: e.target.value });
  }
  function HandleEmail(e) {
    Setform({ ...Form, Email: e.target.value });
  }
  function HandleNumber(e) {
    Setform({ ...Form, Num: e.target.value });
  }
  function Handlesubmit() {
    console.log(Form);
  }
  return (
    <>
      <div className="container bg-dark mt-5">
        <h1 className="text-center text-white">Usereducer form </h1>
        <input
          type="text"
          placeholder="Enter The Name"
          className="form-control my-4"
          value={Form.Name}
          onInput={Handlename}
        />
        <input
          type="email"
          placeholder="Enter The Email"
          className="form-control my-4"
          value={Form.Email}
          onInput={HandleEmail}
        />
        <input
          type="tel"
          placeholder="Enter The Number"
          className="form-control my-4"
          value={Form.Num}
          onInput={HandleNumber}
        />

        <button
          type="button"
          className="btn btn-secondary m-lg-5 m-auto"
          onClick={Handlesubmit}
        >
          Submit
        </button>

        {/* <h2>{Form.Num}</h2> */}
      </div>
    </>
  );
}

export default Usereducerform;
