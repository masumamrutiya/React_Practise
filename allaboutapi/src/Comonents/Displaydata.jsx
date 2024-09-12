import React from "react";

// import Data from "../Data.json";

import Data from "../Data.json";

function Displaydata() {
  return (
    <>


            
      <h1 className="text-center mb-4 display-4">
        <i>
          <mark className="bg-warning text-dark p-2 rounded">
            <u>DISPLAY-DATA</u>
          </mark>
        </i>
      </h1>
      <div className="container text-bg-dark p-5 text-center">

             {/* NESTED MAP */}

        {Data.map((element) => {
          return (
            <div className="col border border-3 py-4 my-5" key={element.id}>
              <h3 className="text-center mb-4 display-4">
                <i>
                  <mark className="bg-danger text-dark p-0 rounded">
                    <u>Team Profiles</u>
                  </mark>
                </i>
              </h3>
              <h1  style={{color:"#faedcd"}}>  Name :  {element.name}</h1>
              <h3 style={{color:"#faedcd"}}> Age :{element.age}</h3>
              <h5 style={{color:"#faedcd"}}> Email : {element.email}</h5>
              <h5 style={{color:"#faedcd"}}> Intro : {element.intro}</h5>
            
              <h5 style={{color:"#faedcd"}}> Experience : {element.experience}</h5>
              <h5 style={{color:"#faedcd"}}> Hobbies : {element.hobbies}</h5>
              <h5 style={{color:"#faedcd"}}> Education : {element.education}</h5>
              <h3 style={{color:"#faedcd"}}> Location : {element.location}</h3>

              {element.course.map((ele) => {
                return <i key={element.id}>{ele.language}</i>;    //  METHOD--2
              })}

              {/* {element.course.map((ele) => {
                return <i key={element.id}>{ele.language}</i>;        //  METHOD--1
              }
              )} */}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Displaydata;
