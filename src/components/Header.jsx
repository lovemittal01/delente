import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CardContext";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

const Header = () => {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between bg-gray-900 text-white w-full p-6">
      <div className="px-5 xl:px-12 flex w-full items-center justify-between">
        <div className="text-3xl font-bold font-heading text-white">
          Delente
        </div>

        <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
          <li>
            <Link
              className="text-white hover:text-gray-300"
              to="/"
              style={{ color: "white" }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-white hover:text-gray-300"
              style={{ color: "white" }}
            >
              Category
            </Link>
          </li>
          <li>
            <Link
              className="text-white hover:text-gray-300"
              style={{ color: "white" }}
            >
              Collections
            </Link>
          </li>
          <li>
            <Link
              className="text-white hover:text-gray-300"
              style={{ color: "white" }}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="hidden xl:flex items-center space-x-5">
          <Link className="text-white hover:text-gray-300">
            <AiOutlineHeart size={24} style={{ color: "white" }} />
          </Link>
          <Link
            className="relative flex items-center text-white hover:text-gray-300"
            to="/cart"
          >
            <AiOutlineShoppingCart size={24} style={{ color: "white" }} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex justify-center items-center">
                {cartCount}
              </span>
            )}
          </Link>
          <Link
            className="text-white flex items-center hover:text-gray-300"
            to="/my-profile"
          >
            <AiOutlineUser size={24} style={{ color: "white" }} />
          </Link>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <AiOutlineClose size={24} />
          ) : (
            <AiOutlineMenu size={24} />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <ul className="md:hidden absolute z-10 top-16 left-0 w-full bg-gray-900 flex flex-col items-start px-12 space-y-4 py-6">
          <li>
            <Link
              className="text-white hover:text-gray-300"
              to="/"
              onClick={() => setIsMenuOpen(false)}
              style={{ color: "white" }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-white hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
              style={{ color: "white" }}
            >
              Category
            </Link>
          </li>
          <li>
            <Link
              className="text-white hover:text-gray-300"
              to="/cart"
              onClick={() => setIsMenuOpen(false)}
              style={{ color: "white" }}
            >
              Cart
            </Link>
          </li>
          <li>
            <Link
              className="text-white hover:text-gray-300"
              to="/my-profile"
              onClick={() => setIsMenuOpen(false)}
              style={{ color: "white" }}
            >
              My Profile
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Header;
