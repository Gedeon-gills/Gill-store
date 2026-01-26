import Product  from "../layouts/hero/product"
import Navbar from "../layouts/header/Navbar";
import ScrollButton from "../ui/button"
import { CategoryList } from "../layouts/hero/category"
import { FeaturedList } from "../layouts/hero/featured"
import { Menfashion } from "../layouts/hero/menfashion"
import { Footer } from "../layouts/footer/footer"
import  DiscountModal  from "../ui/forms/signupForm"
import { Outlet } from "react-router-dom"

export default function hero() {
  return (
    <div >
      <Navbar />
      <DiscountModal />
      <ScrollButton />
      <Product />
      <CategoryList />
      <FeaturedList />
      <Menfashion />
      <Footer />
      
      <Outlet />
    </div>
  );
}
