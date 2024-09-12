import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function ProfilePage() {
  const profilemap = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col row">
            {profilemap.map((pro) => (
              <NavLink
                key={pro}
                to={`/profile/${pro}`}
                className={(e) => (e.isActive ? "masum" : "")}
              >
                Profile : {pro}
              </NavLink>
            ))}
          </div>
          <div className="col">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
