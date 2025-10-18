import React from "react";
import { useParams } from "react-router";

const NewsDetails = () => {
  const {newsId} = useParams()
  console.log(newsId);
  
  return <div>news details</div>;
};

export default NewsDetails;
