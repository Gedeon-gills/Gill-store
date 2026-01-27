import { useParams, Link } from "react-router-dom";
import { features } from "../../store/featured";
import { useState } from "react";

const ProductPage = () => {
  const { name } = useParams<{ name: string }>();
  const product = features.find(p => p.name === decodeURIComponent(name!));

  const [selectedImage, setSelectedImage] = useState(0);
  if (!product) return <p className="p-10 text-center">Product not found</p>;

  const images = [product.image.desktop]; // Add more images if available

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
        <Link to="/" className="text-xl font-bold tracking-tight">GillStore</Link>
        <div className="hidden md:flex space-x-6 uppercase text-sm font-medium">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Images */}
        <div className="lg:col-span-7 flex flex-col md:flex-row gap-4">
          <div className="flex md:flex-col gap-2 order-2 md:order-1">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="thumbnail"
                className={`w-20 h-24 object-cover cursor-pointer border-2 ${selectedImage === idx ? 'border-blue-500' : 'border-transparent'}`}
                onClick={() => setSelectedImage(idx)}
              />
            ))}
          </div>
          <div className="relative flex-1 order-1 md:order-2 bg-white p-2 shadow-sm">
            <img src={images[selectedImage]} alt="Main product" className="w-full h-auto object-cover" />
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="lg:col-span-5 space-y-4">
          <h1 className="text-2xl font-semibold text-gray-700">{product.name}</h1>
          <p className="text-blue-600 font-semibold text-2xl">${product.price}.00</p>
          <p className="text-gray-500">Category: {product.category}</p>
          <p className="text-gray-700">Type: {product.type}</p>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
