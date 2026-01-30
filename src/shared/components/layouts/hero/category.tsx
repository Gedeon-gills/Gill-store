import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { categoryService } from "../../../services/categoryServices";

export const CategoryList: React.FC = () => {
  const {
    data: categories, // The actual data from the API (renamed from 'data' to 'users')
    isLoading, // True when fetching for the first time
    isError, // True if an error occurred
    error, // The actual error object
    isSuccess, // True when data was fetched successfully
  } = useQuery({
    queryKey: ["categories"], // Unique identifier for this query (used for caching)
    queryFn: categoryService.getCategories, // The function that fetches the data
  });
console.log(categories?.categories);
  console.log(isLoading,isError,error,isSuccess)
// Function to filter products by a specific property

  
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {categories?.categories?.map((cat, index:number) => (
        <Link
          key={index}
          to={`/shop/${cat.name}`}
          className="flex flex-col items-center group cursor-pointer"
        >
          <img
            src={cat.image}
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
