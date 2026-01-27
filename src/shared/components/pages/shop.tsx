import { useParams, Link } from "react-router-dom";
import Navbar from "../layouts/header/Navbar";
import { Footer } from "../layouts/footer/footer";
import { FeaturedList } from "../../components/layouts/hero/featured";
import { features } from "../../store/featured";

const Shop = () => {
  const { category } = useParams();

  const filteredProducts = category
    ? features.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      )
    : features;

  return (
    <>
      <Navbar />

      <header className="py-12 text-center bg-[#f9f9f9] border-b mb-10">
        <h1 className="text-5xl font-bold text-gray-700 mb-2 capitalize">
          {category || "Shop"}
        </h1>
        <nav className="text-xs text-gray-400 uppercase tracking-widest">
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>{" "}
          / <span>{category || "Shop"}</span>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-8">
        {/* SIDEBAR */}
        <aside className="w-full md:w-64 space-y-6">
          <h3 className="font-bold border-b pb-2 uppercase text-sm">
            Product Categories
          </h3>

          {[
            "men",
            "women",
            "shoes",
            "watches",
            "jewellery",
            "bag",
          ].map((cat) => (
            <Link
              key={cat}
              to={`/shop/${cat}`}
              className="block capitalize text-sm hover:text-blue-600"
            >
              {cat}
            </Link>
          ))}
        </aside>

        {/* PRODUCTS */}
        <main className="flex-1">
          <FeaturedList products={filteredProducts} />
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Shop;
