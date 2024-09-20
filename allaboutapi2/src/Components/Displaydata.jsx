import axios from "axios";
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function DisplayData() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4040/users`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log("Bad Request"));
  }, []);

  return (
    <>
      <div className="container my-5">
        <div className="card shadow-lg">
          <div className="card-header bg-success text-white text-center">
           <u> <h2> 5 SECRET</h2></u>
          </div>
          <div className="card-body">
            <table className="table  table-bordered text-center">
              <thead className="table-success">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {user.map((e) => (
                  <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default DisplayData;
