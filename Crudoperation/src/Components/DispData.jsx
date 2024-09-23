import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DispData() {
  const [col, setCol] = useState([]);
  const [record, setRecord] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4040/details`)
      .then((res) => {
        console.log(res.data);
        setCol(Object.keys(res.data[0]));
        setRecord(res.data);
      })
      .catch((err) => console.log("Bad Request"));
  }, []);

  return (
    <>
      <div className="container text-bg-dark p-5 text-center">
      
        <h1>User Data</h1>
        <table className="table table-dark">
          <thead>
            <tr>
              {col.map((e, i) => (
                <th key={i}>{e}</th>
              ))}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {record.map((a, j) => (
              <tr key={j}>
                <td className="text-primary">{a.id}</td>
                <td className="text-primary">{a.name}</td>
                <td className="text-primary">{a.email}</td>
                <td className="text-primary">{a.age}</td>
                <td>
                  <Link to="/update" className="btn btn-light me-2">
                    Update
                  </Link>
                  <button className="btn  btn-secondary ms-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-end">
          <Link to="/create" className="btn btn-primary" style={{marginTop:"20px",textAlign:"center"}}>
            ADD
          </Link>
        </div>
      </div>
    </>
  );
}

export default DispData;

// Install Json server

// npm install -g json-server@0.17.4

// Watch Json Server

// json-server --watch db.json --port 4040
