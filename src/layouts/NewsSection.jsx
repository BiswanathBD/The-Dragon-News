import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import NewsCard from "../Components/NewsCard";
import useFetchNews from "../Hooks/useFetchNews";

const NewsSection = () => {
  const { id } = useParams();
  const { news } = useFetchNews();
  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    const newsByCategory = news.filter((news) => news.category_id == id);
    if (newsByCategory.length === 0) {
      if (id == 1) {
        const brakingNews = news.filter(
          (news) => news.others.is_today_pick === true
        );
        setCategoryNews(brakingNews);
      } else {
        setCategoryNews(news);
      }
    } else {
      setCategoryNews(newsByCategory);
    }
  }, [news, id]);

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
