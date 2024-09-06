import React, { useState } from "react";

const initialvalue ={
    Name:"",
    Email:"",
    Num:"",
};

function UsestateForm() {
//   const [Name, Setname] = useState("");
//   const [Email, Setemail] = useState("");
//   const [Num, Setnumber] = useState("");

   const [Form,Setform] = useState(initialvalue)

  function Handlename(e) {
    // Setname(e.target.value);
    Setform({...Form,Name: e.target.value,});
  }
  function HandleEmail(e) {
    // Setemail(e.target.value);
    Setform({...Form,Email:e.target.value,})
  }
  function HandleNumber(e) {
    // Setnumber(e.target.value);
    Setform({...Form,Num:e.target.value,})
  }
  function Handlesubmit() {
    // console.log(Name, Email, Num);
    console.log(Form);
    
   
  }
  return (
    <>
      <div className="container bg-danger">
        <h1 className="text-center text-white">Usestate Form</h1>
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

export default UsestateForm;
