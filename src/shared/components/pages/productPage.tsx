import { useParams } from "react-router-dom";
import { useCart } from "../../components/layouts/context/useCart";
import Navbar from "../layouts/header/Navbar";
import { Footer } from "../layouts/footer/footer";
import { features } from "../../store/featured";
import { useState } from "react";
import { FaShoppingCart, FaPlus, FaMinus } from "react-icons/fa";

const ProductPage = () => {
  const { name } = useParams<{ name: string }>();
  const product = features.find((p) => p.name === decodeURIComponent(name!));

  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [qty, setQty] = useState(1); // 🔥 quantity state

  if (!product) return <p className="text-center p-10">Product not found</p>;

  const images = product.image.desktop;

  const increaseQty = () => setQty((q) => q + 1);
  const decreaseQty = () =>
    setQty((q) => (q > 1 ? q - 1 : 1));

  const handleAddToCart = () => {
    // Add selected quantity
    for (let i = 0; i < qty; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: images[selectedImage],
      });
    }
  };

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Images */}
        <div className="lg:col-span-7 flex gap-4">
          <div className="flex flex-col gap-2">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                className={`w-20 h-24 border ${
                  selectedImage === i ? "border-blue-500" : "border-gray-300"
                } cursor-pointer`}
                onClick={() => setSelectedImage(i)}
              />
            ))}
          </div>

          <div className="bg-white shadow p-2 w-full max-h-[360px]">
            <img src={images[selectedImage]} className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Info Section */}
        <div className="lg:col-span-5 space-y-4">
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <p className="text-blue-600 text-2xl font-semibold">
            ${product.price}.00
          </p>
          <p className="text-gray-500">{product.description}</p>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={decreaseQty}
              className="p-2 border rounded bg-gray-100"
            >
              <FaMinus size={12} />
            </button>

            <span className="text-lg font-semibold">{qty}</span>

            <button
              onClick={increaseQty}
              className="p-2 border rounded bg-gray-100"
            >
              <FaPlus size={12} />
            </button>
          </div>

          {/* Add To Cart */}
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-6 py-2 rounded flex items-center gap-2 mt-3"
          >
            <FaShoppingCart />
            Add {qty} to Cart
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ProductPage;