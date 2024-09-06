import React, { useEffect, useState } from "react";

function Fetchcard() {
  const [userId, setUserId] = useState(1);
  const [userData, setUserData] = useState(null);

  // used to useffect

  useEffect(() => {
    const fetchdata = async () => {
      console.log("useEffect is running");

     try {
        const response = await fetch(`https://fakestoreapi.com/products/${userId}`);
        const data = await response.json();
        setUserData(data);
     } catch (error) {  
          console.log("Error..................");
          
     }
    };
    fetchdata()
  }, [userId]);




  return (
    <>
      {/* Cards Data */}

            {/* ternary operator condition start */}
      {userData ?(

      <div className="container bg-dark py-5">
        <h1 className="text-center text-white">Cards Data</h1>
        <div className="border border-3 border-primary-subtle my-4 py-3">
            <img src={userData.image} alt="" srcset="" style={{height:"370px",width:"280px" ,margin:"auto"}}/>
          <h2 className="text-white">Tittle : {userData.title} </h2><hr className="text-white"/>
          <h3 className="text-white">Description : {userData.description .slice(0,35)} </h3><hr className="text-white"/>
          <h4 className="text-white">price : {userData.price}</h4><hr className="text-white"/>
        </div>

              {/* buttons */}
        <button
          type="button"
          className="btn btn-warning me-3 mt-5"
         onClick={() => setUserId(userId - 1)}
        >
          Decrement
        </button>
        <button
          type="button"
          className="btn btn-info ms-4 mt-5"
          onClick={() => setUserId(userId+1)}
        >
          Increment
        </button>
        </div>
    ):
    (
        <p>loading...   </p>
    )}

    
            {/* ternary operator condition end */}

       
    
     
    </>
  );
}

export default Fetchcard;
