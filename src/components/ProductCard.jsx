import React from "react";
import Button from "./Button";
import useCart from "../hooks/useCart";
import rating from "../assets/ratings.svg";

function ProductCard({
  image,
  imageAlt,
  productName,
  price,
  oldPrice,
  description,
  id
}) {
  const { addToCart } = useCart();

  const handleAddToCart = (event) => {
    event.stopPropagation();
    const product = {
      image,
      imageAlt,
      productName,
      price,
      oldPrice,
      description,
      id
    };
    addToCart(product);
  };

  return (
    <>
      <div className="font-roboto flex flex-col items-center w-fit pb-5 gap-3">
        <div className="bg-mainblue-background rounded-lg flex items-center justify-center w-full">
          <img
            className="w-56 h-56"
            src={`https://api.timbu.cloud/images/${image}`}
            alt={imageAlt}
          />
        </div>
        <div className="font-medium leading-7 text-lg text-center">
          <p>{productName}</p>
          <p>
            ₦{price}&nbsp;<span className="line-through">{oldPrice}</span>
          </p>
        </div>
        <img src={rating} alt="ratings" />
        <p className="font-medium leading-7 text-sm text-wrap text-center px-5">
          {description}
        </p>
        <p className="hidden">id={id}</p>
        <Button
          buttonText={"ADD TO CART"}
          className="px-6"
          onClick={handleAddToCart}
        />
      </div>
    </>
  );
}

export default ProductCard;
