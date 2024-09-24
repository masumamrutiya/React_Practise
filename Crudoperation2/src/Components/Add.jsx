import axios from "axios";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

function Add() {
  const [Formdata, Setformdata] = useState({ name: "", email: "", age: "" });
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();
  function handlesubmit(e) {
    e.preventDefault();

    axios
      .post(`http://localhost:4040/use`, Formdata)
      .then((res) => {
        console.log(res.data);
        setRedirect(true);
        Setformdata({ name: "", email: "", age: "" });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (redirect) {
    navigate("/");
  }
  return (
    <>
      <div
        className="container p-5 animate__animated animate__fadeIn w-50"
        style={{
          background: "linear-gradient(135deg, #34495e, #2c3e50)",
          borderRadius: "10px",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
        }}
      >

        <h1
          className="text-center animate__animated animate__fadeInDown"
          style={{
            color: "#ecf0f1", 
            fontSize: "2.5rem",
            letterSpacing: "1px",
          }}
        >
          Add User Details
        </h1>

        <form onSubmit={handlesubmit}>
       

          <div className="col animate__animated animate__fadeInUp animate__delay-1s">
            <label htmlFor="name" style={{ color: "#ecf0f1" }}>
              User Name
            </label>
            <input
              type="text"
              className="form-control my-3 shadow"
              placeholder="Enter User Name"
              style={{
                borderRadius: "5px",
                transition: "box-shadow 0.3s ease, transform 0.3s ease",
                backgroundColor: "#ffffff",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
              onChange={(e) =>
                Setformdata({ ...Formdata, name: e.target.value })
              }
            />
          </div>

        
          <div className="col animate__animated animate__fadeInUp animate__delay-2s">
            <label htmlFor="email" style={{ color: "#ecf0f1" }}>
              User Email
            </label>
            <input
              type="email"
              className="form-control my-3 shadow"
              placeholder="Enter User Email"
              style={{
                borderRadius: "5px",
                transition: "box-shadow 0.3s ease, transform 0.3s ease",
                backgroundColor: "#ffffff",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
              onChange={(e) =>
                Setformdata({ ...Formdata, email: e.target.value })
              }
            />
          </div>

          
          <div className="col animate__animated animate__fadeInUp animate__delay-3s">
            <label htmlFor="age" style={{ color: "#ecf0f1" }}>
              Age
            </label>
            <input
              type="text"
              className="form-control my-3 shadow"
              placeholder="Enter Age"
              style={{
                borderRadius: "5px",
                transition: "box-shadow 0.3s ease, transform 0.3s ease",
                backgroundColor: "#ffffff",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
              onChange={(e) =>
                Setformdata({ ...Formdata, age: e.target.value })
              }
            />
          </div>

          <div className="col text-center animate__animated animate__fadeInUp animate__delay-4s">
            <button
              className="btn btn-success my-3 shadow-lg"
              style={{
                padding: "10px 20px",
                fontSize: "1.2rem",
                transition: "transform 0.3s ease, background-color 0.3s ease",
                backgroundColor: "#27ae60", 
                borderColor: "#27ae60",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
                e.currentTarget.style.backgroundColor = "#2ecc71"; 
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.backgroundColor = "#27ae60";
              }}
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Add;
