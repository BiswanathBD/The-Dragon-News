import { format } from "date-fns";
import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { author, title, thumbnail_url, details, id, rating, total_view } =
    news;

  return (
    <div className="text-[#706F6F] border border-[#F3F3F3] rounded-sm">
      {/* author section */}
      <div className="flex justify-between items-center px-4 py-2 bg-[#F3F3F3]">
        <div className="flex gap-3 items-center">
          <img
            className="h-10 rounded-full aspect-square"
            src={author.img}
            alt=""
          />
          <div>
            <p className="text-[#403F3F] font-semibold">{author.name}</p>
            <p className="text-sm">{format(new Date(), "dd-MM-yyyy")}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <CiBookmark></CiBookmark>
          <CiShare2></CiShare2>
        </div>
      </div>

      {/* news */}
      <div className="px-4 py-2">
        <h3 className="text-xl font-semibold text-[#403F3F]">{title}</h3>
        <img className="rounded-sm w-full py-6" src={thumbnail_url} alt="" />
        <p className=" border-b border-[#F3F3F3] pb-4 mb-4">
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}...{" "}
              <span className="text-orange-400 font-semibold">
                <Link to={`/details/${id}`}>Read More</Link>
              </span>
            </>
          ) : (
            details
          )}
        </p>
      </div>

      <div className="px-4 py-2 flex justify-between items-center mb-4">
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <FaStar
              key={i}
              className={
                i <= rating.number
                  ? "text-orange-400"
                  : "text-gray-300"
              }
            />
          ))}
        </div>
        <div className="flex items-center gap-1">
          <IoMdEye size={24} />
          <p>{total_view}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
