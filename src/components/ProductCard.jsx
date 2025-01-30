import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CardContext";
import { FaShoppingCart, FaHeart, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleViewDetails = () => {
    navigate(`/product-detail/${product.id}`);
  };

  return (
    <div className="group relative  flex flex-col justify-between rounded-2xl border-2 border-gray-200 overflow-hidden">
      <div className="">
        <img
          src={product.image}
          alt={product.title}
          className="aspect-square w-fit h-60  p-8 md:p-10   mx-auto  group-hover:opacity-75 lg:aspect-auto lg:h-72"
        />
      </div>
      <div className="p-4 bg-white flex flex-col justify-between h-fit md:h-full  text-white">
        <h3 className="text-lg text-gray-900 mb-2">
          {product.title.length > 50
            ? product.title.substring(0, 50) + "..."
            : product.title}
        </h3>

        <p className="mt-1 text-3xl text-black font-bold">${product.price}</p>
        <div className="mt-4 flex  justify-between items-center">
          <button
            onClick={handleViewDetails}
            className="  items-center text-black  py-2 rounded-md hover:cursor-pointer hover:text-blue-600"
          >
            View Details
          </button>

          <button
            onClick={handleAddToCart}
            className="rounded-md flex gap-2 bg-black py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-gray-700 focus:shadow-none active:bg-gray-700 hover:bg-gray-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
            type="button"
          >
            <FaShoppingCart className="size-5" /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
