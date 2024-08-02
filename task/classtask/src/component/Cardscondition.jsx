import React from "react";
// import Man from "./Man";
// import Woman from "./Woman";
import Menscard from "./Menscard";
import Womancard from "./Womancard";

function Cardscondition() {
  const user = prompt("Enter Your Gender");

  const users = user.toLocaleLowerCase();
  if (users === "men") {
    return <Menscard />;
  } else {
    return <Womancard/> ;
  }

  //   return (
  //     <>
  //     </>
  //   )
}

export default Cardscondition;
