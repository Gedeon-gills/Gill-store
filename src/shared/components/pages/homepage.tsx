import Navbar from "../layouts/header/Navbar";
import ScrollButton from "../ui/button";
import { CategoryList } from "../layouts/hero/category";
import { FeaturedList } from "../layouts/hero/featured";
import { Menfashion } from "../layouts/hero/menfashion";
import { Footer } from "../layouts/footer/footer";
import DiscountModal from "../ui/forms/signupForm";
import Product from "../layouts/hero/product";
import type { product } from "../../services/productServices";
import { Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { productServices } from "../../services/productServices";

export default function Hero() {
  // ✅ Fetch all products
  const { data, isLoading, isError } = useQuery<{ products: product[] }, Error>({
    queryKey: ["all-products"], // key goes here
    queryFn: () => productServices.getProducts(), // must be zero-arg function
  });

  const products = data?.products || [];
  const features = products.slice(0, 4);

  return (
    <div>
      <Navbar />
      <DiscountModal />
      <ScrollButton />
      <Product />
      <CategoryList />

      {isLoading ? (
        <p className="text-center mt-10">Loading featured products...</p>
      ) : isError ? (
        <p className="text-center mt-10 text-red-500">Failed to load products</p>
      ) : (
        <FeaturedList featured={features} limit={4} title="Featured Products" />
      )}

      <Menfashion />
      <Footer />
      <Outlet />
    </div>
  );
}
