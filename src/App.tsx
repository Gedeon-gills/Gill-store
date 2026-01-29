import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./shared/components/pages/homepage";
import Blog from "./shared/components/pages/blog";
import ContactUs from "./shared/components/pages/contactus"
import Shop from "./shared/components/pages/shop"
import ProductPage from "./shared/components/pages/productPage";
import { CartProvider } from "./shared/components/layouts/context/cartContext";
import CheckoutPage from "./shared/components/pages/checkout"
import ViewCartPage from "./shared/components/pages/cart"


import "./styles/global.css";

export default function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/Blogs" element={<Blog />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/shop/:category" element={<Shop />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/cart" element={<ViewCartPage />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}
