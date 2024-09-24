import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

function Displaydata() {
  const [Tabledata, Settabledata] = useState([]);
  const [record, setRecord] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4040/use`)
      .then((res) => {
        console.log(res.data);
        Settabledata(Object.keys(res.data[0]));
        setRecord(res.data);
      })
      .catch((err) => {
        console.log("404 NOT FOUND");
      });
  }, []);

  function handledelet(id) {
    axios
      .delete(`http://localhost:4040/use/${id}`) // Fixed endpoint
      .then(() => {
        setRecord(record.filter((item) => item.id !== id));
      })
      .catch((err) => {
        console.log(err, "----404-----");
      });
  }

  return (
    <>
      <div className="container mt-5 w-50 text-center">
        {/* Title with FadeInDown Animation */}
        <div className="text-center mb-4 animate__animated animate__fadeInDown">
          <h1
            className="display-4 text-white"
            style={{
              backgroundColor: "#1abc9c", // Title background color
              padding: "20px",
              borderRadius: "15px",
              position: "relative",
              fontWeight: "800",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)", // Improved box shadow
            }}
          >
            User Data
          </h1>
        </div>

        {/* Card with FadeInUp Animation */}
        <div className="card shadow-lg mb-5 animate__animated animate__fadeInUp">
          <div className="card-body">
            {/* Table with custom background color */}
            <table className="table table-responsive table-hover">
              <thead className="table-light">
                <tr>
                  {Tabledata.map((a, b) => (
                    <th key={a}>{a}</th>
                  ))}
                  <th>Action</th>
                </tr>
              </thead>
              <tbody style={{ backgroundColor: "#e9ecef" }}> {/* Set soft gray background color for tbody */}
                {record.map((c, d) => (
                  <tr key={d} className="animate__animated animate__fadeInUp">
                    <td>{c.id}</td>
                    <td>{c.name}</td>
                    <td>{c.email}</td>
                    <td>{c.age}</td>
                    <td>
                      <Link
                        to={`/update/${c.id}`}
                        className="btn btn-info btn-sm text-white"
                      >
                        Update
                      </Link>
                      <button
                        onClick={() => handledelet(c.id)}
                        className="btn btn-danger btn-sm ms-2"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center mt-4">
          <Link
            to="/create"
            className="btn btn-success btn-lg animate__animated animate__bounce animate__delay-1s hover-scale"
            style={{
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              backgroundColor: "#1abc9c", 
              borderColor: "#1abc9c", 
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",             }}
          >
            ADD
          </Link>
        </div>
      </div>

      
    </>
  );
}

export default Displaydata;
