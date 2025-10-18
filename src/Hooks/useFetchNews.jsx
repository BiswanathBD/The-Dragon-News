import { useEffect, useState } from "react";

const useFetchNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setNews(data))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { news, loading };
};

export default useFetchNews;
