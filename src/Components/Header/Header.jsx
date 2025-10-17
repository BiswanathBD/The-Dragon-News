import React from "react";
import logo from "../../assets/logo.png";
import { formatDate } from "date-fns";

const Header = () => {
  return (
    <div className="text-center">
      <img className="mx-auto max-w-[460px]" src={logo} alt="" />
      <p className="text-[#706F6F] py-4 text-lg">
        Journalism Without Fear or Favour
      </p>
      <p className="text-xl font-medium">
        {formatDate(new Date(), "EEEE")},{" "}
        <span className="text-[#706F6F]">
          {formatDate(new Date(), "LLLL dd, yyyy")}
        </span>
      </p>
    </div>
  );
};

export default Header;
