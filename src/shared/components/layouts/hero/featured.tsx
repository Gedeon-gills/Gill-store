import { Link } from "react-router-dom";
import {
  FaCartShopping,
  FaShuffle,
  FaSearchengin,
  FaHeart,
} from "react-icons/fa6";
import type { product } from "../../../services/productServices";

interface FeaturedListProps {
  featured: product[];
  limit?: number;
  title?: string;
}

export const FeaturedList = ({ featured, limit, title }: FeaturedListProps) => {
  const displayProducts = limit ? featured.slice(0, limit) : featured;

  if (!featured.length) {
    return <p className="text-gray-500">No products found.</p>;
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 my-24">
      {title && (
        <h2 className="text-3xl font-bold text-gray-700 mb-8">
          {title}
        </h2>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {displayProducts.map((item) => (
          <Link key={item._id} to={`/products/${item._id}`} className="group">
            <div className="relative rounded-lg bg-white overflow-hidden shadow hover:shadow-lg transition pb-8">
              
              {/* Wishlist */}
              <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow z-10">
                <FaHeart />
              </button>

              {/* Image */}
              <div className="w-full h-64 bg-gray-100 overflow-hidden">
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              </div>

              {/* Info */}
              <div className="px-3 mt-3">
                <p className="text-[11px] text-gray-500 uppercase">
                  {item.category}
                </p>
                <h2 className="text-sm font-semibold capitalize">
                  {item.name}
                </h2>
                <p className="text-blue-600 font-semibold mt-2">
                  ${item.price}.00
                </p>
              </div>

              {/* Hover actions */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-6 opacity-0 group-hover:opacity-100 transition flex gap-3">
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
          </Link>
        ))}
      </div>
    </div>
  );
};
