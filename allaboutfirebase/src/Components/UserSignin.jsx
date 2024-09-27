import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { app } from "../firebase";

const auth = getAuth(app);

function UserSignin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signinUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("success signin");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {/* <h1>UserSignin</h1> */}

      <h1 className="text-center"> UserSignin</h1>

      <div className="container text-bg-success p-4">
        <div className="col">
          <label htmlFor="">Enter your Email</label>
          <input
            type="email"
            required
            id=""
            placeholder="Enter your Email"
            className="form-control my-4"
            
             value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col">
          <label htmlFor=""> Enter your Password</label>
          <input
            type="text"
            required
            id=""
            placeholder="Enter your Password"
            className="form-control my-4"
           
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="col">
          <button className="btn btn-success" onClick={signinUser}>
            {" "}
            signup
          </button>
        </div>
      </div>
    </>
  );
}

export default UserSignin;
