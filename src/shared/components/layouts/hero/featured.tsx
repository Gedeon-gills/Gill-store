import { features } from "../../../store/featured";
import type { feature } from "../../../store/featured";
import { FaCartShopping, FaShuffle, FaSearchengin, FaHeart } from "react-icons/fa6";

export const FeaturedList = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-10">
      <h1 className="text-xl font-semibold mb-6 text-center">
        FEATURED PRODUCTS
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {features.map((item: feature, index: number) => (
          <div
            key={index}
            className="
              relative group rounded-lg bg-white overflow-hidden
              shadow-[0_0_0_rgba(0,0,0,0.0)]
              hover:shadow-[0_8px_20px_rgba(0,0,0,0.15),0_-8px_20px_rgba(0,0,0,0.15)]
              transition-all duration-300 pb-4
            "
          >
            <span className="absolute top-2 left-2 bg-yellow-400 text-[10px] font-semibold px-2 py-1 rounded">
              FEATURED
            </span>

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
              <p className="text-[11px] text-gray-500 uppercase">{item.category}</p>

              <h2 className="text-sm font-semibold mt-1 capitalize leading-tight">
                {item.name}
              </h2>

              <div className="flex items-center gap-1 mt-2">
                <span className="bg-green-500 text-white text-[10px] px-1.5 py-[2px] rounded">
                  ★
                </span>
                <span className="text-xs text-gray-600">(3)</span>
              </div>

              <p className="text-blue-600 font-semibold text-sm mt-2">
                ${item.price}.00
              </p>
            </div>

            <div
              className="
                absolute left-1/2 -translate-x-1/2 bottom-30
                opacity-0 group-hover:opacity-100
                translate-y-2 group-hover:translate-y-0
                transition-all duration-300 flex gap-3
              "
            >
              <button className="bg-white p-2 rounded-md shadow hover:bg-gray-100 transition">
                <FaShuffle className="text-gray-700 text-lg" />
              </button>

              <button className="bg-white p-2 rounded-md shadow hover:bg-gray-100 transition">
                <FaCartShopping className="text-gray-700 text-lg" />
              </button>

              <button className="bg-white p-2 rounded-md shadow hover:bg-gray-100 transition">
                <FaSearchengin className="text-gray-700 text-lg" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};