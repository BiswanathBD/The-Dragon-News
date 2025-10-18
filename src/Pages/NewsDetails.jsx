import React from "react";
import { Link, useParams } from "react-router";
import useFetchNews from "../Hooks/useFetchNews";
import LoginAside from "../Components/Login/LoginAside";
import Header from "../Components/Header/Header";
import { GoArrowLeft } from "react-icons/go";

const NewsDetails = () => {
  const { news, loading } = useFetchNews();
  const { newsId } = useParams();

  if (loading) {
    return <p>Loading...</p>;
  }

  const selectedNews = news.find((n) => n.id == newsId);
  console.log(selectedNews);

  if (!selectedNews) {
    return <p>No news found for ID {newsId}</p>;
  }

  return (
    <div className="mt-8">
      <Header></Header>
      <div className="grid grid-cols-12 gap-12 container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 my-8">
        <div className="col-span-9">
          <h3 className="text-xl font-semibold mb-4">Dragon News</h3>
          <div className="p-4 border border-[#E7E7E7] rounded-sm">
            <img
              className="w-full"
              src={selectedNews.image_url}
              alt={selectedNews.title}
            />
            <h2 className="text-2xl font-semibold space-y-4 py-4">
              {selectedNews.title}
            </h2>
            <p className="text-[#706F6F]">{selectedNews.details}</p>
            <Link to={`/category/${selectedNews.category_id}`}>
              <button className="px-4 py-1 bg-[#D72050] text-white mt-4 flex items-center gap-2">
                <GoArrowLeft/> <span className="text-sm font-light">All news in this category</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="col-span-3">
          <LoginAside></LoginAside>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
