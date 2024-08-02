import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
// import Cards from "./components/Cards.jsx";
import './App.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App country="india"     capital='delhi' />
    <App country="Dubai"     capital='Dubai'   />
    <App country="America"   capital='Washington, D.C. ' />
    <App country="Australia" capital=' Territory' />
    <App country="canada"    capital='Ottawa' /> */}
    <App/>
  </React.StrictMode>
);
