import React, { useState } from "react";

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

function UserSignup() {
    const [signupdata, setSignupdata] = useState({ email: "", password: "" });
  const signupUser = () => {
    createUserWithEmailAndPassword(
      auth,
      signupdata.email,
      signupdata.password
    ).then(() => {
      alert("user signup");
    });
  };

  return (
    <>
      <h1 className="text-center"> UserSignup</h1>

      <div className="container text-bg-dark p-4">
        <div className="col">
          <label htmlFor="">User Email</label>
          <input
            type="email"
            required
            id=""
            placeholder="enter email here"
            className="form-control my-4"
            value={signupdata.email}
            onChange={(e) => {
              setSignupdata({ ...signupdata, email: e.target.value });
            }}
          />
        </div>
        <div className="col">
          <label htmlFor="">Password</label>
          <input
            type="text"
            required
            id=""
            placeholder="enter password here"
            className="form-control my-4"
            value={signupdata.password}
            onChange={(e) => {
              setSignupdata({ ...signupdata, password: e.target.value });
            }}
          />
        </div>
        <div className="col">
          <button className="btn btn-success" onClick={signupUser}>
            {" "}
            signup
          </button>
        </div>
      </div>
    </>
  );
}

export default UserSignup;
