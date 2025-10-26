import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());
const Categories = () => {
  const categories = use(categoryPromise);
  return (
    <div>
      <h2 className="font-bold">All Categories {categories.length}</h2>
      <div className="grid grid-cols-1 mt-3 gap-2">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.id}`}
            key={category.id}
            className={"btn bg-base-100 hover:bg-base-200"}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
