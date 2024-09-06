// import React, { useEffect, useState } from "react";

// function Al() {
//   const [id, setId] = useState(1);
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchdata = async () => {
//       try {
//         const pd = await fetch(`https://fakestoreapi.com/products/${id}`);

//         const product = await pd.json();
//         setData(product);
//       } catch (error) {
//         console.log("error");
//       }
//     };


//     fetchdata();
//   }, [id]);

//   return (
//     <>
//       <h1>Cards</h1>
//    {data ?  (
//       <p>Title :- {data.title} </p>
//       <p>Price :- {data.price} </p>
//     ):( 
//         <p>dfshtrhr</p>
//     )}
//       <button type="button" class="btn btn-outline-primary" onClick={()=>{setId(id - 1)}}>
//         minus
//       </button>
//       <button type="button" class="btn btn-outline-primary" onClick={()=>{setId(id + 1)}}>
//         plus
//       </button>
//     </>
//   );
// }

// export default Al;
