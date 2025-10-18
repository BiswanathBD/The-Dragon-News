import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import QZone from "../QZone";

const LoginAside = () => {
  return (
    <div className=" grid gap-2">
      <h3 className="text-xl font-semibold mb-2">Login With</h3>

      {/* Social Authentication */}
      <button className="w-full px-2 py-1 border flex items-center gap-2 justify-center rounded-sm text-blue-500 border-blue-500">
        <FcGoogle /> <span>Login With Google</span>
      </button>
      <button className="w-full px-2 py-1 border flex items-center gap-2 justify-center rounded-sm">
        <FaGithub /> <span>Login With GitHub</span>
      </button>

      <h3 className="mt-8 mb-3 text-xl font-medium">Follow Us On</h3>
      <div className="grid text-[#706F6F] font-medium">
        <button className="text-left flex items-center gap-2  p-4 border border-[#E7E7E7] rounded-t-sm">
          <FaFacebook className="text-blue-500 text-2xl" />{" "}
          <span>Facebook</span>
        </button>
        <button className="text-left flex items-center gap-2  p-4 border border-[#E7E7E7]">
          <FaTwitter className="text-sky-500 text-2xl" /> <span>Twitter</span>
        </button>
        <button className="text-left flex items-center gap-2  p-4 border border-[#E7E7E7] rounded-b-sm">
          <FaInstagram className="text-pink-500 text-2xl" />{" "}
          <span>Instagram</span>
        </button>
      </div>
      <QZone></QZone>
    </div>
  );
};

export default LoginAside;
