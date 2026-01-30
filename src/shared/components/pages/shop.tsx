import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Navbar from "../layouts/header/Navbar";
import ScrollButton from "../ui/button";
import { Footer } from "../layouts/footer/footer";
import { FeaturedList } from "../layouts/hero/featured";
import { categoryService } from "../../services/categoryServices";
import { productServices } from "../../services/productServices";
import clsx from "clsx";
import type { product } from "../../services/productServices";

const Shop = () => {
  const { category } = useParams<{ category?: string }>();

  // ✅ Fetch categories from DB
  const { data: categoryData } = useQuery({
    queryKey: ["categories"],
    queryFn: categoryService.getCategories,
  });

  /* =======================
     FETCH ALL PRODUCTS (for counts)
  ======================= */
  const { data: allProductsData } = useQuery<{ products: product[] }, Error>({
    queryKey: ["all-products"],
    queryFn: () => productServices.getProducts(),
  });

  /* =======================
     FETCH FILTERED PRODUCTS (for display)
  ======================= */
  const { data: filteredProductsData, isLoading } = useQuery<{ products: product[] }, Error>({
    queryKey: ["products", category], // the category param is part of the key
    queryFn: () => productServices.getProducts(category), // pass category here
  });

  const categories = categoryData?.categories || [];
  const allProducts = allProductsData?.products || [];
  const products = filteredProductsData?.products || [];

  /* =======================
     CATEGORY COUNTS
  ======================= */
  const categoryCounts = categories.reduce<Record<string, number>>(
    (acc, cat) => {
      acc[cat.name.toLowerCase()] = allProducts.filter(
        (p) => p.category.toLowerCase() === cat.name.toLowerCase()
      ).length;
      return acc;
    },
    {}
  );

  return (
    <>
      <Navbar />
      <ScrollButton />

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
        <aside className="w-full md:w-64 space-y-3">
          <h3 className="font-bold border-b pb-2 uppercase text-sm">
            Product Categories
          </h3>

          {/* ALL PRODUCTS */}
          <Link
            to="/shop"
            className={clsx(
              "flex justify-between px-2 py-1 rounded text-sm",
              !category ? "bg-blue-600 text-white" : "hover:text-blue-600"
            )}
          >
            <span>All Products</span>
            <span>({allProducts.length})</span>
          </Link>

          {/* DB CATEGORIES */}
          {categories.map((cat) => {
            const isActive = category === cat.name.toLowerCase();

            return (
              <Link
                key={cat._id}
                to={`/shop/${cat.name.toLowerCase()}`}
                className={clsx(
                  "flex justify-between px-2 py-1 rounded text-sm capitalize transition",
                  isActive ? "bg-blue-600 text-white" : "hover:text-blue-600"
                )}
              >
                <span>{cat.name}</span>
                <span className="text-xs opacity-70">
                  ({categoryCounts[cat.name.toLowerCase()] || 0})
                </span>
              </Link>
            );
          })}
        </aside>

        {/* PRODUCTS */}
        <main className="flex-1">
          {isLoading ? (
            <p>Loading products...</p>
          ) : (
            <FeaturedList featured={products} />
          )}
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Shop;
