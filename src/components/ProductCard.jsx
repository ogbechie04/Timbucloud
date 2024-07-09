import React from "react";
import Button from "./Button";
import rating from "../assets/ratings.svg";
import blackAirpods from "../assets/black-airpods.jpg";

function ProductCard({
  image,
  imageAlt,
  productName,
  price,
  oldPrice,
  description,
}) {
  return (
    <>
      <div className="font-roboto flex flex-col items-center w-fit pb-5 gap-3">
        <div className="bg-mainblue-background rounded-lg flex items-center justify-center w-full">
          <img src={image} alt={imageAlt} />
        </div>
        <div className="font-medium leading-7 text-lg text-center">
          <p>{productName}</p>
          <p>
            {price}&nbsp;<span className="line-through">{oldPrice}</span>
          </p>
        </div>
        <img src={rating} alt="ratings" />
        <p className="font-medium leading-7 text-sm text-wrap text-center px-5">
          {description}
        </p>
        <Button buttonText={"ADD TO CART"} className="px-6" />
      </div>
    </>
  );
}

export default ProductCard;
