import type { feature } from "../../../store/featured";
import {
  FaCartShopping,
  FaShuffle,
  FaSearchengin,
  FaHeart,
} from "react-icons/fa6";

interface FeaturedListProps {
  products: feature[];
}

export const FeaturedList = ({ products }: FeaturedListProps) => {
  if (!products || products.length === 0) {
    return (
      <p className="text-center text-gray-400 py-20">
        No products found
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {products.map((item, index) => (
        <div
          key={index}
          className="relative group rounded-lg bg-white overflow-hidden
          shadow hover:shadow-lg transition-all duration-300 pb-4"
        >
          <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
            <FaHeart />
          </button>

          <div className="w-full h-64 overflow-hidden bg-gray-100">
            <img
              src={item.image.desktop}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="px-3 mt-3">
            <p className="text-[11px] text-gray-500 uppercase">
              {item.category}
            </p>

            <h2 className="text-sm font-semibold mt-1 capitalize">
              {item.name}
            </h2>

            <p className="text-blue-600 font-semibold text-sm mt-2">
              ${item.price}.00
            </p>
          </div>

          <div
            className="absolute left-1/2 -translate-x-1/2 bottom-6
            opacity-0 group-hover:opacity-100 transition flex gap-3"
          >
            <button className="bg-white p-2 rounded shadow">
              <FaShuffle />
            </button>
            <button className="bg-white p-2 rounded shadow">
              <FaCartShopping />
            </button>
            <button className="bg-white p-2 rounded shadow">
              <FaSearchengin />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
