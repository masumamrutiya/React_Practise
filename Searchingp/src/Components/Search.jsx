import React, { useEffect, useState } from "react";

function Search() {
  const [user, setuser] = useState([]);

  const [term, setTerm] = useState("");
  useEffect(() => {
    async function fetchdata() {
      const fetchApi = await fetch(
        `https://dummyapi.online/api/movies`
      );
      console.log(fetchApi);
      const data = await fetchApi.json();
      console.log(data);
      setuser(data);
    }
    fetchdata();
  }, []);

//   const renderUser = user.map((e) => (
//           <div key={e.id}>
//             <p>
//               <strong>{e.name}</strong>
//             </p>
//           </div>
//         ));

  const searchingUser = user
    .filter(({ movie }) => {
      return movie.indexOf(term) >= 0;
    })
    .map((e) => (
      <div key={e.id}>
        <p>
          <strong>{e.movie}</strong>
        </p>
      </div>
    ));

  return (
    <>
      {/* <h1>Search...</h1> */}
      <div className="container text-bg-dark text-center p-5">
        <h1>Users</h1>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        {searchingUser}
        {/* {renderUser} */}
      </div>
    </>
  );
}

export default Search;
