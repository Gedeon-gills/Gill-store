import { useState, useEffect } from "react";
import { features } from "../../../store/featured";
import type { feature } from "../../../store/featured";

export const Menfashion = () => {
  const Menimages = [
    {
      src: "/image/collection/Brown and Pink Modern Summer Collection Poster.jpg",
    },
    {
      src: "/image/collection/Neutral Men Simple Fashion Sale Instagram Post.jpg",
    },
    {
      src: "/image/collection/Yellow And White Minimalist Weekend Sale Instagram Story.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Menimages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [Menimages.length]);

  return (
    <>
      <div className="space-y-25">
        {/*MEN */}
        <div className="max-w-[1200px] mx-auto w-full px-4 border-t-2 border-t-blue-900 ">
          <div className="flex gap-6 items-start">
            <div className="bg-white">
              <div className="w-[180px] rounded-xl bg-white text-blue-900 shadow-md hover:shadow-xl transition-all duration-300 p-6 min-h-[70vh] flex flex-col">
                <h1 className="text-base font-semibold mb-4 md:text-center">Men's Fashion</h1>

                <ul className="space-y-2 text-gray-700 text-sm md:text-center">
                  <li className="hover:text-blue-900 cursor-pointer md:text-center">
                    Wallets
                  </li>
                  <li className="hover:text-blue-900 cursor-pointer md:text-center">
                    T-Shirts
                  </li>
                  <li className="hover:text-blue-900 cursor-pointer md:text-center">Shirts</li>
                  <li className="hover:text-blue-900 cursor-pointer md:text-center">Jeans</li>
                  <li className="hover:text-blue-900 cursor-pointer md:text-center">
                    Jackets & Coats
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative w-[430px] h-[530px] overflow-hidden">
              {Menimages.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute top-0 left-0 w-full h-full transition-transform duration-700 ${
                    index === currentSlide
                      ? "translate-x-0 z-10"
                      : index < currentSlide
                        ? "-translate-x-full z-0"
                        : "translate-x-full z-0"
                  }`}
                >
                  <img
                    src={slide.src}
                    alt="Featured"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              ))}
            </div>

            <div className="ml-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-3">
              {features.map((item: feature, index: number) => (
                <div
                  key={index}
                  className="
              bg-white relative
              transition-all duration-300 ease-in-out
              hover:pt-2 hover:pl-2 hover:pr-2
              hover:pb-6 hover:-mb-6
              hover:z-20
              hover:shadow-[0_12px_30px_rgba(0,0,0,0.2)]
            "
                >
                  <div className="w-full h-50 overflow-hidden bg-gray-100">
                    <span className="absolute top-5 left-2 bg-yellow-400 text-[10px] font-semibold px-2 py-1 rounded z-10">
                      FEATURED
                    </span>

                    <img
                      src={item.image.desktop[0]}
                      alt={item.name}
                      className="w-full h-[80%] object-cover"
                    />
                  </div>

                  <div className="px-3 mt-2">
                    <h2 className="text-sm text-gray-600 font-normal mt-1 capitalize leading-tight">
                      {item.name}
                    </h2>
                    <p className="text-black font-semibold text-sm mt-1">
                      ${item.price}.00
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/*WOMEN */}

        <div className="max-w-[1200px] mx-auto w-full px-4 border-t-2 border-t-red-300 ">
          <div className="flex gap-6 items-start">
            <div className="bg-white">
              <div className="w-[180px] rounded-xl bg-white text-red-300 shadow-md hover:shadow-xl transition-all duration-300 p-6 min-h-[70vh] flex flex-col">
                <h1 className="text-base font-semibold mb-4 md:text-center">
                  Women's Fashion
                </h1>

                <ul className="space-y-2 text-gray-700 text-sm md:text-center">
                  <li className="hover:text-red-300 cursor-pointer md:text-center">
                    Trousers & Capris
                  </li>
                  <li className="hover:text-red-300 cursor-pointer md:text-center">Tops</li>
                  <li className="hover:text-red-300 cursor-pointer md:text-center">
                    Shorts & Skirts
                  </li>
                  <li className="hover:text-red-300 cursor-pointer md:text-center">
                    Lingerie & Nightwear
                  </li>
                  <li className="hover:text-red-300 cursor-pointer md:text-center">Jeans</li>
                  <li className="hover:text-red-300 cursor-pointer md:text-center">Dresses</li>
                  <li className="hover:text-red-300 cursor-pointer md:text-center">
                    Jackets & Coats
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative w-[430px] h-[530px] overflow-hidden rounded-xl">
              <img
                src="/image/collection/New Minimal Fashion Collection Model Instagram Post.jpg"
                alt="Women's Featured"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="ml-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-3">
              {features.map((item: feature, index: number) => (
                <div
                  key={index}
                  className="
              bg-white relative
              transition-all duration-300 ease-in-out
              hover:pt-2 hover:pl-2 hover:pr-2
              hover:pb-6 hover:-mb-6
              hover:z-20
              hover:shadow-[0_12px_30px_rgba(0,0,0,0.2)]
            "
                >
                  <div className="w-full h-50 overflow-hidden bg-gray-100">
                    <span className="absolute top-5 left-2 bg-yellow-400 text-[10px] font-semibold px-2 py-1 rounded z-10">
                      FEATURED
                    </span>

                    <img
                      src={item.image.desktop[0]}
                      alt={item.name}
                      className="w-full h-[80%] object-cover"
                    />
                  </div>

                  <div className="px-3 mt-2">
                    <h2 className="text-sm text-gray-600 font-normal mt-1 capitalize leading-tight">
                      {item.name}
                    </h2>
                    <p className="text-black font-semibold text-sm mt-1">
                      ${item.price}.00
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/*categories */}

        <div className="max-w-[1200px] mx-auto w-full px-4 border-t-2 border-t-[#C76E00] ">
          <div className="flex gap-6 items-start">
            <div className="bg-white">
              <div className="w-[180px] rounded-xl bg-white text-[#C76E00] shadow-md hover:shadow-xl transition-all duration-300 p-6 min-h-[58vh] flex flex-col">
                <h1 className="text-base font-semibold mb-4 md:text-center" >Fashion Categories </h1>

                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="hover:text-[#C76E00] cursor-pointer md:text-center">
                    Women
                  </li>
                  <li className="hover:text-[#C76E00] cursor-pointer md:text-center">
                    Watches
                  </li>
                  <li className="hover:text-[#C76E00] cursor-pointer md:text-center">Shoes</li>
                  <li className="hover:text-[#C76E00] cursor-pointer md:text-center">Men</li>
                  <li className="hover:text-[#C76E00] cursor-pointer md:text-center">
                    Jewellery
                  </li>
                  <li className="hover:text-[#C76E00] cursor-pointer md:text-center">
                    Beauty & Care
                  </li>
                  <li className="hover:text-[#C76E00] cursor-pointer md:text-center">
                    Bags & Backpacks
                  </li>
                  <li className="hover:text-[#C76E00] cursor-pointer md:text-center">
                    Accessories
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative w-[400px] h-[440px] overflow-hidden rounded-xl">
              <img
                src="/image/collection/Blue and White Clean Minimalist Winter Sale Men Wear Collection Instagram Post.jpg"
                alt="Women's Featured"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="ml-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-3">
              {features.map((item: feature, index: number) => (
                <div
                  key={index}
                  className="
              bg-white relative
              transition-all duration-300 ease-in-out
              hover:p-4
              hover:z-20
              hover:shadow-[0_12px_30px_rgba(0,0,0,0.2)]
            "
                >
                  <div className="w-full h-50 overflow-hidden bg-gray-100">
                    <span className="absolute top-5 left-2 bg-white/90 text-[10px] font-semibold px-2 py-1 rounded z-10">
                      
                    </span>

                    <img
                      src={item.image.desktop[0]}
                      alt={item.name}
                      className="w-full h-[80%] object-cover"
                    />
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
