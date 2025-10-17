import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="text-xl font-semibold p-4 bg-[#F3F3F3] mt-10 flex items-center gap-4">
      <button className="px-4 py-2 bg-[#D72050] text-white">Latest</button>
      <Marquee pauseOnHover={true}>
        <div className="flex gap-8">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </Marquee>
    </div>
  );
};

export default LatestNews;
