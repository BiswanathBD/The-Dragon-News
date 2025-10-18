import React from "react";
import Marquee from "react-fast-marquee";
import useFetchNews from "../../Hooks/useFetchNews";

const LatestNews = () => {
  const { news } = useFetchNews();
  const trendingNews = news.filter((n) => n.others.is_trending === true);
  return (
    <div className="text-xl font-semibold p-4 bg-[#F3F3F3] mt-10 flex items-center gap-4">
      <button className="px-4 py-2 bg-[#D72050] text-white">Latest</button>
      <Marquee pauseOnHover={true}>
        <div className="flex gap-8">
          {trendingNews.map((n) => (
            <p key={n.id}>{n.title}</p>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default LatestNews;
