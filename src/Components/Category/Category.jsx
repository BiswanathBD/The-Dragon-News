import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import useFetchCategory from "../../Hooks/useFetchCategory ";
import useFetchNews from "../../Hooks/useFetchNews";
import { CiCalendar } from "react-icons/ci";
import { format } from "date-fns";

const Category = () => {
  const { categories } = useFetchCategory();
  const { news } = useFetchNews();
  const trendingNews = news.filter((n) => n.others.is_trending === true);

  const getRandomItems = (arr, n) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  };

  const randomTrending = getRandomItems(trendingNews, 3);

  return (
    <div>
      <h3 className="text-xl font-semibold">All Category</h3>
      <div className="grid gap-2 my-4 news-category">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            className="hover:text-[#d72050] text-lg text-[#9F9F9F] px-12 py-3 rounded-sm"
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
      <h3 className="text-xl font-semibold mt-8 mb-4">Trending News</h3>
      <div>
        {randomTrending.map((news) => {
          return (
            <div>
              <img className="w-full rounded-lg" src={news.image_url} alt="" />
              <h3 className="text-xl font-semibold py-4">{news.title}</h3>
              <div className="text-[#9F9F9F] flex items-center gap-4 mb-6">
                <p className="font-semibold text-[#696969]">
                  {news.tags[1].toUpperCase()}
                </p>
                <CiCalendar size={24} />
                <p>
                  {format(new Date(news.author.published_date), "dd-MM-yyyy")}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
