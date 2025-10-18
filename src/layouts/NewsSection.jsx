import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard";

const NewsSection = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    const newsByCategory = data.filter((news) => news.category_id == id);
    if (newsByCategory.length === 0) {
      if (id == 1) {
        const brakingNews = data.filter(
          (news) => news.others.is_today_pick === true
        );
        setCategoryNews(brakingNews);
      } else {
        setCategoryNews(data);
      }
    } else {
      setCategoryNews(newsByCategory);
    }
  }, [data, id]);

  return (
    <div>
      <h3 className="text-xl font-semibold">Dragon News Home</h3>
      <div className="my-6 grid gap-12">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
