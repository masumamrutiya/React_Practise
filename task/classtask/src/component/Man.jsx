import React from "react";
import "../component/App.css"

function Man({ brand, z, price ,image,offer ,l,link}) {

// const imgurl = "/src/Assest/" + image +".jpg"
const imgurl="/src/Assest/" + image + ".jpg"


  return (
    <>
      <div class="card rounded-3" style={{ width: "20rem",boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;" }}>
        <img src={imgurl} class="card-img-top" alt="..."  style={{ height: "20rem" ,objectFit:"contain"}}/>
        <div class="card-body">
          <h5 class="card-title text-center">{brand}</h5>

          <p class="card-text text-center">{z}</p>
          <h2 className="text-center"> {price}</h2>
          <h6 className="text-center"> <mark><del>{l}</del>{offer}</mark></h6>
          <a href={link} className="btn btn-primary text-center"style={{ textAlign:"center"}}>
            Buy Now
          </a>
        </div>
      </div>
    </>
  );
}

export default Man;
