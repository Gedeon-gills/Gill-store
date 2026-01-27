import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./shared/components/pages/homepage";
import Blog from "./shared/components/pages/blog";
import ContactUs from "./shared/components/pages/contactus"
import Shop from "./shared/components/pages/shop"
import ProductPage from "./shared/components/pages/productPage";


import "./styles/global.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/Blogs" element={<Blog />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/shop/:category" element={<Shop />} />
        <Route path="/product/:name" element={<ProductPage />} />

      </Routes>
    </BrowserRouter>
  );
}
