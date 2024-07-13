import React from "react";
import { useState } from "react";
import useCart from "../hooks/useCart";
import { FaX } from "react-icons/fa6";

function CheckoutRow({
  productImage,
  mobileproductImage,
  imageAlt,
  productName,
  color,
  model,
  id,
  price,
  onQuantityChange
}) {
  const [quantity, setQuantity] = useState(1)
  const { removeItem } = useCart();

  const handleIncrement = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      onQuantityChange(id, newQuantity); // Notify parent of change
      return newQuantity;
    });
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity > 1) {
        const newQuantity = prevQuantity - 1;
        onQuantityChange(id, newQuantity); // Notify parent of change
        return newQuantity;
      }
      return prevQuantity; // Do not allow decrement below 1
    });
  };

  const total = price * quantity;

  const handleRemove = () => {
    const itemToRemove = { id }; // Only include the id to identify the item
    removeItem(itemToRemove); // Call removeItem from useCart
  };

  return (
    <>
      {/* MOBILE VIEW */}
      <div className="grid grid-cols-2 items-center mt-10 font-roboto text-lg font-bold leading-7 md:hidden">
        {/* PRODUCT IMAGE */}
        <div className=" rounded-lg w-fit">
          <img className="md:hidden" src={`https://api.timbu.cloud/images/${productImage}`} alt={imageAlt} />
        </div>
        <div className="flex flex-col h-full justify-between">
          {/* PRODUCT DESCRIPTION */}
          <div>
            <p>{productName}</p>
            <p>
              Color:&nbsp;<span className="text-stone-500">{color}</span>
              &nbsp;Model:&nbsp;<span className="text-stone-500">{model}</span>
            </p>
            <p className="hidden">id: {id}</p>
          </div>
          {/* QUANTITY AND BUTTONS */}
          <div className="flex justify-between items-end">
            <div className="flex md:gap-9 gap-2 items-center justify-center order-2">
              <button
                className="border px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md"
                onClick={handleDecrement}
              >
                -
              </button>
              <p>{quantity}</p>
              <button
                className="border px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md"
                onClick={handleIncrement}
              >
                +
              </button>
            </div>
            {/* TOTAL */}
            <p>${total}</p>
          </div>
        </div>
      </div>

      {/* WEB VIEW */}
      <div className="md:grid grid-cols-5 items-center mt-12 font-roboto text-xl font-bold leading-7 hidden">
        {/* PRODUCT IMAGE */}
        <div className="flex items-center md:gap-10 gap-5 col-span-2">
          <div className="bg-mainblue-background rounded-lg">
            <img
              className="block"
              src={`https://api.timbu.cloud/images/${productImage}`}
              alt={imageAlt}
            />
            <img
              className="md:hidden"
              src={`https://api.timbu.cloud/images/${productImage}`}
              alt={imageAlt}
            />
          </div>
          {/* PRODUCT DESCRIPTION */}
          <div>
            <p className="text-nowrap">{productName}</p>
            <p>
              Color:&nbsp;<span className="text-stone-500">{color}</span>
              &nbsp;Model:&nbsp;<span className="text-stone-500">{model}</span>
            </p>
            <p className="hidden">id: {id}</p>
          </div>
        </div>
        {/* PRODUCT PRICE */}
        <p className="text-center hidden md:block">${price}</p>
        {/* QUANTITY AND BUTTONS */}
        <div className="flex gap-9 items-center justify-center">
          <button
            className="border px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md"
            onClick={handleDecrement}
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            className="border px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
        {/* TOTAL */}
        <div className="flex gap-9 items-center justify-end">
          <p>${total}</p>
          <FaX className="cursor-pointer hidden md:block" onClick={handleRemove}/>
        </div>
      </div>
      <hr className="mt-12 border-stone-400" />
    </>
  );
}

export default CheckoutRow;
