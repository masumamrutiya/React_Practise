// import { useState } from "react";
import Cards from "./components/Cards";
import rohit from "./assets/india1.jpg";
import kohli from "./assets/india2.jpg";
import rishabh from "./assets/rishabh.jpg";
import surya from "./assets/surya.jpg";
import rahul from "./assets/rahul.jpg";
import hardik from "./assets/hardik.jpg";
import jadeja from "./assets/jadeja.jpg";
import axar from "./assets/axar.jpg";
import kuldeep from "./assets/kuldeep.jpg";
import bumrah from "./assets/bumrah.jpg";
import as from "./assets/arshdeep.jpg";
import chahal from "./assets/chahal.jpg";

function App() {
  return (
    <>
            {/* Tittle */}
       <h1 className="text-center bg-dark mt-4 fst-italic" style={{color:"whitesmoke",height:"58px"}}><mark>INDIA CRICKET TEAM</mark></h1>
       {/* cards */}
      <div className="container">
        <div className="row d-flex">
          <div className="col-4">
            <Cards
              img={rohit}
              name="Rohit Sharma"
              born="  BORN : 30 April 1987, Nagpur "
              a="Right-hand batsman"
            />
          </div>
          <div className="col-4">
            <Cards
              img={kohli}
              name="Virat Kohli"
              born=" BORN : 5 November 1988 , Delhi"
              a="Right-hand batsman"
            />
          </div>
          <div className="col-4">
            <Cards
              img={rishabh}
              name="Rishabh pant"
              born="BORN : 4 October 1997 , Roorkee"
              a="Left-hand batsman"
            />
          </div>
        </div>

        <div className="row d-flex">
          <div className="col-4">
            <Cards
              img={surya}
              name="Suryakumar Yadav "
              born="BORN : 14 September 1990 , Mumbai"
              a="Right-hand batsman"
            />
          </div>
          <div className="col-4">
            <Cards
              img={rahul}
              name="K L Rahul "
              born="BORN : 18 April 1992 , Bengaluru"
              a="Right-hand batsman"
            />
          </div>
          <div className="col-4">
            <Cards
              img={hardik}
              name="Hardik pandya"
              born="BORN : 11 October 1993  Choryasi"
              a="ALL Rounder"
            />
          </div>
        </div>
        <div className="row d-flex">
          <div className="col-4">
            <Cards
              img={jadeja}
              name="Ravindra jadeja"
              born="BORN : 6 December 1988 Navagam"
              a="ALL Rounder"
            />
          </div>
          <div className="col-4">
            <Cards
              img={axar}
              name="Axar patel"
              born="BORN : 20 January 1994  Anand"
              a="ALL rounder"
            />
          </div>
          <div className="col-4">
            <Cards
              img={kuldeep}
              name="kuldeep yadav"
              born=" BORN : 14 December 1994  Kanpur"
              a="left-hand spin"
            />
          </div>
        </div>

        <div className="row d-flex">
          <div className="col-4">
            <Cards
              img={bumrah}
              name="jasprit bumrah"
              born="BORN : 6 December 1993  Ahmedabad"
              a="Right arm fast"
            />
          </div>
          <div className="col-4">
            <Cards
              img={as}
              name="Arshdeep singh"
              born="BORN : 5 February 1999  Guna"
              a="right arm fast"
            />
          </div>
          <div className="col-4">
            <Cards
              img={chahal}
              name="Yujvendra chahal"
              born="BORN : 23 July 1990 , Jind"
              a="Right-hand spin"
            />
          </div>
        </div>
      </div>

      {/* <h1>hello {country}</h1>
           <h4>{country}  capital is {capital}</h4> */}
    </>
  );
}

export default App;
