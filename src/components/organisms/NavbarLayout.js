import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../atoms/Navbar";

const NavbarLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> 
    </>
  );
};

export default NavbarLayout;