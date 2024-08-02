import React from "react";



function Cards(props) {
  return (
    <>

             {/* cards*/}

    <div className="container justify-content-evenly">
      <div className="row d-flex justify-content-between">
      <div className="card mt-5" style={{width:"20rem",height:"100%"   }}>
        <img src={props.img} className="card-img-top" alt="..." style={{height:"350px" , objectFit:"cover"}}/>
        <div className="card-body">
          <h3 className="card-title">{props.name}</h3>
          <h5>{props.a}</h5>

          <p className="card-text">
           {props.born}
          </p>
      
        </div>
      </div>
      </div>
      </div>
      
    
    </>
  );
}

export default Cards;


