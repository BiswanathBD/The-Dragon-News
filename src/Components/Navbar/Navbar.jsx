import React from "react";
import { Link, NavLink } from "react-router";
import "./navbar.css";
import user from '../../assets/user.png'

const Navbar = () => {
  return (
    <nav className="grid grid-cols-3  items-center text-lg text-[#706F6F] mt-6 mb-16">
      <div></div>
      <ul className="nav flex justify-center gap-4">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </ul>
      <div className="text-xl font-medium flex items-center justify-end gap-4">
        <img className="w-8" src={user} alt="" />
        <Link
          to={"/login"}
          className="px-6 py-1 bg-[#403F3F] hover:bg-[#403F3F]/90 text-white"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
