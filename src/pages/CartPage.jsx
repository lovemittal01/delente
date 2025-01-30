import React from "react";
import { useCart } from "../context/CardContext.jsx";
import { FaHeart, FaTrash } from "react-icons/fa";

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="container mx-auto mt-8 px-4">
      <div className="sm:flex sm:gap-5 bg-white  my-10">
        <div className="w-full sm:w-3/4 rounded-2xl border-2 border-gray-200 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-bold text-3xl">Shopping Cart</h1>
            <h2 className="font-bold text-3xl">{cartItems.length} Items</h2>
          </div>
          {cartItems.length === 0 ? (
            <p className="text-center py-10">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="md:flex items-stretch py-8 md:py-10 lg:py-8 border-t border-gray-50"
              >
                <div className="md:w-4/12 border border-gray-100 rounded-md 2xl:w-1/4 w-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full p-10 object-center object-cover"
                  />
                </div>
                <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-between  m-4">
                  <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                    SKU: {item.id}
                  </p>
                  <div className="flex gap-10 items-center justify-between w-full">
                    <p className="text-xl font-semibold leading-none text-gray-800">
                      {item.title.split(" ").map((word, index) => (
                        <span key={index}>
                          {word}
                          {index === 2 && <br />} {index < 2 && " "}
                        </span>
                      ))}
                    </p>
                    <p className="text-2xl font-black leading-none text-gray-800">
                      ${item.price}
                    </p>
                  </div>
                  <p className="text-lg leading-3 text-gray-600 pt-2">
                    Quantity: {item.quantity}
                  </p>
                  <div className="flex items-center justify-between pt-5">
                    <div className="flex items-center">
                      <p className="text-xs leading-3 text-gray-800 cursor-pointer flex items-center">
                        <FaHeart className="mr-2 text-red-500" /> Add to
                        favorites
                      </p>

                      <p
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs leading-3 text-red-500 pl-5 cursor-pointer flex items-center"
                      >
                        <FaTrash className="mr-2" />
                        Remove
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div
          id="summary"
          className="w-full h-fit bg-white rounded-2xl border-2 border-gray-200 mt-5 sm:mt-0  sm:w-1/4 md:w-1/2 px-8 py-10"
        >
          <h1 className="font-bold text-3xl border-b pb-8">Order Summary</h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-bold text-md uppercase">
              Items {cartItems.length}
            </span>
            <span className="font-bold text-md ">
              $
              {cartItems
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </span>
          </div>
          <div>
            <label className="font-bold inline-block mb-3 text-sm uppercase">
              Shipping
            </label>
            <select className="block p-2 text-gray-600 w-full text-sm">
              <option>Standard shipping - $10.00</option>
            </select>
          </div>
          <div className="py-10">
            <label
              htmlFor="promo"
              className="font-bold inline-block mb-3 text-sm uppercase"
            >
              Promo Code
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              className="p-2 text-sm w-full"
            />
          </div>
          <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-md rounded-md text-white ">
            Apply
          </button>
          <div className="border-t mt-8">
            <div className="flex font-bold justify-between py-6 text-md uppercase">
              <span>Total cost</span>
              <span>
                $
                {(
                  cartItems.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  ) + 10
                ).toFixed(2)}
              </span>
            </div>
            <button className="bg-black rounded-md font-semibold hover:bg-gray-600 py-3 text-sm text-white uppercase w-full">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
