import React from "react";
import Header from "../Components/Header/Header";
import LatestNews from "../Components/LatestNews/LatestNews";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 mt-8">
      <Header></Header>
      <LatestNews></LatestNews>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
