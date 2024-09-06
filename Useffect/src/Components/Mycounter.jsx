// import React, { useEffect, useState } from "react";

// function Mycounter() {
//   const [count, setcount] = useState(0);

//   useEffect(() => {
//     // Call to be Excecuted //mount kre
//     console.log("The count is : ", count);

//     // udate kre
//     console.log("Component update");

//     return () => {
//       //kam puru thay tyare mess aape
//       console.log("Cleaned up");
//     };
//   }, [count]); //dependency

//   //   optional return

//   return (
//     <>
//       <div className="container">
//         <h1 className="text-center">count is : {count} </h1>
//         <button
//           className="btn btn-success m-5"
//           onClick={() => {
//             setcount(count + 1);
//           }}
//         >
//           increment
//         </button>
//         <button
//           className="btn btn-success center"
//           onClick={() => {
//             setcount(count - 1);
//           }}
//         >
//           decrement
//         </button>
//       </div>
//     </>
//   );
// }

// export default Mycounter;
