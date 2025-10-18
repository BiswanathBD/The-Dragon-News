import React, { use } from "react";
import { categoryPromise } from "../../Pages/Homepage/Homepage";
import { Link, NavLink } from "react-router";

const Category = () => {
  const categories = use(categoryPromise);
  return (
    <div>
      <h3 className="text-xl font-semibold">All Category</h3>
      <div className="grid gap-2 my-6 news-category">
        {categories.map((category) => (
          <NavLink key={category.id}
            className="hover:text-[#d72050] text-lg text-[#9F9F9F] px-12 py-3 rounded-sm"
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Category;
