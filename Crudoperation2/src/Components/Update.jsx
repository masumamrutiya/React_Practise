import axios from "axios";
import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

function Update() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [data, setData] = useState({ id: "", name: "", email: "", age: "" });

  useEffect(() => {
    axios
      .get(`http://localhost:4040/use/${id}`)
      .then((res) => {
        console.log("Update----",res.data);
        setData({
          id: res.data.id,
          name: res.data.name || "",
          email: res.data.email || "",
          age: res.data.age || "",
        });
      })
      .catch((err) => {
        console.log("bad request");
      });
  }, [id]);

  function handlesubmit(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:4040/use/${id}`, data)
      .then((res) => {
        console.log("----->>>>>>",res.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
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
              User ID
            </label>
            <input
              type="text"
              className="form-control my-3 shadow"
              placeholder="Enter User ID"
              disabled
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
              value={data.id}
            />
          </div>

       
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
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
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
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
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
              value={data.age}
              onChange={(e) => setData({ ...data, age: e.target.value })}
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
              Updated
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Update;
