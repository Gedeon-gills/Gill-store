import { FaList } from "react-icons/fa";
import { HiViewGrid } from "react-icons/hi";
import Navbar from "../layouts/header/Navbar";
import { FeaturedList } from "../layouts/hero/featured";
import { Footer } from "../layouts/footer/footer";



const Shop = () => {

  return (
    <>
      <Navbar />
      <header className="py-12 text-center bg-[#f9f9f9] border-b border-gray-100 mb-10">
          <h1 className="text-5xl font-bold text-gray-700 mb-2">Shop</h1>
          <nav className="text-xs text-gray-400 uppercase tracking-widest">
            <span className="hover:text-blue-500">Home</span>
            <span className="mx-1">/</span>
            <span className="text-gray-600 text-[10px]" >Shop </span>
          </nav>
        </header>
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-8 bg-white text-gray-800">
        {/* SIDEBAR */}
        <aside className="w-full md:w-64 flex-shrink-0 space-y-8">
          <div>
            <h3 className="font-bold border-b pb-2 mb-4 uppercase text-sm tracking-wider">
              Product Categories
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                "Accessories",
                "Bags & Backpacks",
                "Beauty & Care",
                "Jewellery",
                "Men",
                "Shoes",
                "Watches",
                "Women",
              ].map((cat) => (
                <li
                  key={cat}
                  className="flex justify-between hover:text-blue-600 cursor-pointer"
                >
                  <span>{cat}</span>
                  <span className="text-gray-400"></span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold border-b pb-2 mb-4 uppercase text-sm tracking-wider">
              Filter by Price
            </h3>
            <div className="space-y-2">
              
            </div>
          </div>

          <div>
            <h3 className="font-bold border-b pb-2 mb-4 uppercase text-sm tracking-wider">
              Filter by Color
            </h3>
            <div className="space-y-2">
              {[
                { name: "Black", color: "bg-black" },
                { name: "Blue", color: "bg-blue-500" },
                { name: "Dark Blue", color: "bg-blue-900" },
                { name: "Grey", color: "bg-gray-500" },
              ].map((c) => (
                <div
                  key={c.name}
                  className="flex items-center gap-3 text-sm cursor-pointer group"
                >
                  <span
                    className={`w-3 h-3 rounded-full ${c.color} border`}
                  ></span>
                  <span className="group-hover:text-blue-600">
                    {c.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold border-b pb-2 mb-4 uppercase text-sm tracking-wider">
              Filter by Size
            </h3>
            <div className="space-y-2">
              
            </div>
          </div>
        </aside>

        <main className="flex-1">
          <div className="flex justify-between items-center mb-6 pb-4 border-b">
            <p className="text-sm text-gray-500">
              Showing 1–5 Products of 30 Products
            </p>

            <div className="flex items-center gap-4">
              <div className="flex gap-2 border-r pr-4">
                <HiViewGrid size={18} className="text-blue-600 cursor-pointer" />
                <FaList size={18} className="text-gray-400 cursor-pointer" />
              </div>

              <select className="text-sm border-none focus:ring-0 cursor-pointer">
                <option>Default sorting</option>
                <option>Price: Low to High</option>
              </select>
            </div>
          </div>
              <FeaturedList />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Shop;