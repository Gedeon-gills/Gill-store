import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../../../store/category";
import type { Category } from "../../../store/category";

export const CategoryList: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {categories.map((cat: Category, index: number) => (
        <Link
          key={index}
          to={`/shop/${cat.name}`}
          className="flex flex-col items-center group cursor-pointer"
        >
          <img
            src={cat.image.desktop}
            alt={cat.name}
            className="w-20 h-20 rounded-full object-cover border-2 border-gray-300 transition-transform duration-200 group-hover:scale-105"
          />

          <span className="mt-2 text-sm font-medium capitalize transition-colors duration-200 group-hover:text-blue-600">
            {cat.name}
          </span>
        </Link>
      ))}
    </div>
  );
};
