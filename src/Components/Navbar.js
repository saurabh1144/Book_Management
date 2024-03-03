import React from "react";
import { Link, Outlet } from "react-router-dom";

import { IoMdAdd } from "react-icons/io";

function Navbar() {
  return (
    <div>
    <div className="navbarr">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <h2 className="navbar-brand" href="#">
            Book Inventory
          </h2>
          <div className="add">
          <Link to="/addBook"><button className="btn btn-primary mx-5"> <IoMdAdd /> Add</button></Link> 
          </div>
        </div>
      </nav>
    </div>
    <div>
      <Outlet/>
    </div>
    </div>
  );
}

export default Navbar;
