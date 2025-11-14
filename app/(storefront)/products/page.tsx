"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

const mockProducts = [
  {
    id: "1",
    name: "Vintage T-Shirt",
    price: 25,
    category: "newest",
    image: "https://via.placeholder.com/200x200.png?text=Vintage+T-Shirt",
  },
  {
    id: "2",
    name: "Classic Sneakers",
    price: 60,
    category: "trending",
    image: "https://via.placeholder.com/200x200.png?text=Classic+Sneakers",
  },
  {
    id: "3",
    name: "Denim Jacket",
    price: 80,
    category: "featured",
    image: "https://via.placeholder.com/200x200.png?text=Denim+Jacket",
  },
  {
    id: "4",
    name: "Best Seller Jacket",
    price: 80,
    category: "best",
    image: "https://via.placeholder.com/200x200.png?text=Best+Seller+Jacket",
  },
  {
    id: "5",
    name: "Another New Arrival",
    price: 80,
    category: "newest",
    image: "https://via.placeholder.com/200x200.png?text=New+Arrival",
  },
];

export default function ProductsPage() {
  const { addToCart } = useCart();

  const categories = [
    { label: "All", value: "all" },
    { label: "Newest", value: "newest" },
    { label: "Trending", value: "trending" },
    { label: "Best Sellers", value: "best" },
    { label: "Featured", value: "featured" },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  // Filter logic
  const filteredProducts =
    activeCategory === "all"
      ? mockProducts
      : mockProducts.filter((product) => product.category === activeCategory);

  return (
    <div className="max-w-[1220px] mx-auto px-5 mt-5 flex flex-col ">
      <div className="flex flex-col gap-4 mb-10">
        <h1 className="text-3xl text-[#272343] text-center font-bold">
          All Products
        </h1>

        <div className="w-full flex justify-center">
          <div className="flex items-center gap-6 text-[#272343] text-sm font-medium">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`pb-1 transition ${
                  activeCategory === cat.value
                    ? "text-[#272343] border-b-2 border-[#272343]"
                    : "hover:text-[#272343]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-xl shadow-sm hover:shadow-md transition p-4 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-[#272343] font-medium mb-2">${product.price}</p>

            <button
              onClick={() => addToCart({ ...product, quantity: 1 })}
              className="mt-auto bg-[#029FAE] text-[#272343] py-2 rounded-md font-medium hover:bg-[#E3F6F5] transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
