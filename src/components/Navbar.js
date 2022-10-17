import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "../context/AuthContext";

const Navbar = () => {
  const {userProfile, handleSignOut} = useContext(authContext);
  return (
    <div>
      <div className="navbar bg-base-100 shadow-lg flex justify-between">
        {/* Nav Brand  */}
        <div>
          <NavLink to = '/' className="btn btn-ghost normal-case text-xl">Fancy Auth</NavLink>
        </div>
        {/* User Profile  */}
        <div>
            {userProfile?.email && <h3 className="text-lg font-semibold">Welcome: {userProfile.displayName}</h3>}   
        </div>
        {/* NavLink */}
        <div>
          <ul className="menu menu-horizontal p-0">
            <li>
              <NavLink to = '/home'>Home</NavLink>
            </li>
            <li>
              {userProfile?.uid? 
              <NavLink to = '/login' onClick={handleSignOut}>Signout</NavLink>:
              <NavLink to = '/login'>Login</NavLink>}
            </li>
            <li>
              <NavLink to = '/register'>Register</NavLink>
            </li>
            {/* <li>
              <button className="btn btn-link" onClick={handleSignOut}>Sign Out</button>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
