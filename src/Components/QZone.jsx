import React from "react";
import swimming from "../assets/swimming.png";
import classImg from "../assets/class.png";
import playground from "../assets/playground.png";

const QZone = () => {
  return (
    <div className="mt-6 bg-[#F3F3F3] p-3 rounded-sm">
      <h3 className="text-xl font-semibold mb-2">Q-Zone</h3>
      <div className="grid gap-4 my-4">
        <img src={swimming} alt="" />
        <img src={classImg} alt="" />
        <img src={playground} alt="" />
      </div>
    </div>
  );
};

export default QZone;
