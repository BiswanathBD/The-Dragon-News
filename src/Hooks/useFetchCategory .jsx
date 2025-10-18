import { useEffect, useState } from "react";

const useFetchCategory = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { categories, loading };
};

export default useFetchCategory;
