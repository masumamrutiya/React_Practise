import React from "react";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../firebase";

function Hello() {
  const db = getDatabase(app);
   const sendData=()=>{
    set(ref(db, " user/Masum"), {
        id: 1,
        name: "masum",
        email: "masum@gmail.com",
      }).then(() => console.log("Data added successfully"));
   }
  return <>
  
  <div className="container">
      <h1>
        fire base real time database
      </h1>
      <button className="btn btn-success" onClick={sendData}>senddata</button>
      </div>
  
  
  </>;
}

export default Hello;
