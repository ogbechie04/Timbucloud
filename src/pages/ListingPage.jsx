import React from "react";
import { useLocation } from "react-router-dom";
import SearchAccount from "../components/SearchAccount";
import NavBar from "../components/NavBar";
import ProductCategory from "../components/ProductCategory";
import ProductCard from "../components/ProductCard";
import Button from "../components/Button";
import Footer from "../components/Footer";
import heroImage from "../assets/hero-image.jpg";
import userImage from "../assets/user-image.jpg";
import laptop from "../assets/laptop.svg";
import airpods from "../assets/airpods.svg";
import controller from "../assets/controller.svg";
import iPhone from "../assets/iphone.svg";

function ListingPage() {
  const location = useLocation();
  console.log(location)
  
  return (
    <>
      <div className="mx-5 lg:mx-20 mt-5 lg:mt-10">
        <header>
          <SearchAccount />
          <NavBar />
          <img
            src={heroImage}
            alt="heroImage"
            className="w-full mt-3.5 lg:mt-14"
          />
        </header>
        <div className="w-full h-6 bg-mainblue-background mt-6 hidden lg:block"></div>

        <main className="mt-8 lg:mt-12 flex flex-col lg:flex-row gap-9 lg:gap-11">
          <section className="flex flex-col items-center w-fit gap-[77px]">
            <div className="w-full lg:w-fit flex flex-col gap-3.5 lg:gap-0.5">
              <p className="lg:text-lg text-base leading-7 font-bold font-inter bg-mainblue text-white text-center lg:text-justify py-3.5 lg:pl-9 lg:pr-20 w-full rounded lg:rounded-b-none text-nowrap">
                SHOP BY CATEGORY
              </p>
              <div className="flex lg:flex-col gap-4 lg:gap-0.5 flex-wrap justify-between">
                <ProductCategory categoryName={"Smartphones"} />
                <ProductCategory
                  categoryName={"Laptops"}
                  className={"order-3 lg:order-none"}
                />
                <ProductCategory
                  categoryName={"Accessories"}
                  className={"order-2 lg:order-none"}
                />
                <ProductCategory
                  categoryName={"Gaming"}
                  className={"order-6 lg:order-none"}
                />
                <ProductCategory
                  categoryName={"Wearable Technologies"}
                  className={"order-4 lg:order-none"}
                />
                <ProductCategory
                  categoryName={"Photo/Videography"}
                  className={"order-5 lg:order-none"}
                />
                <ProductCategory
                  categoryName={"Audio Entertainment"}
                  className={"lg:rounded-b hidden lg:flex"}
                />
              </div>
            </div>
            <div className="lg:flex flex-col items-center gap-6 border-solid border hidden rounded border-mainblue shadow-[0px_4px_8px_0px_#08319C] p-3">
              <div className="flex flex-col items-center gap-3 pt-7">
                <p className="text-mainblue font-bold leading-7 text-xl">
                  BEST GADGETS
                </p>
                <p className="font-bold leading-7 text-base">SHOP NOW!</p>
              </div>
              <img src={userImage} alt="user-image" />
            </div>
          </section>
          <section className="w-fit flex flex-col items-center lg:gap-[92px] gap-10">
            <div className="flex flex-col gap-5 md:gap-10">
              <div className="text-xl lg:text-2xl font-bold text-mainblue leading-7 flex justify-between font-inter">
                <p>FEATURED PRODUCTS</p>
                <div className="lg:flex gap-8 hidden">
                  <a href="" className="hover:underline">
                    Promo
                  </a>
                  <a href="" className="hover:underline">
                    New Arrival
                  </a>
                </div>
              </div>
              <div className="grid gap-y-10 md:grid-cols-2 md:gap-x-20 md:gap-y-14">
                <ProductCard
                  image={laptop}
                  imageAlt={"laptop"}
                  productName="13’ Macbook Air 2020"
                  price="$1080"
                  oldPrice="$1200"
                  description="Lightweight, powerful, and efficient. With the latest M2 chip, stunning Retina display, and up to 18 hours of battery life, it's perfect for work and play."
                />
                <ProductCard
                  image={airpods}
                  imageAlt={"airpods"}
                  productName="Airpods pro"
                  price="$400"
                  description="Experience superior sound with active noise cancellation, a customizable fit, and seamless integration with your Apple devices for an unparalleled listening experience."
                />
                <ProductCard
                  image={controller}
                  imageAlt={"controller"}
                  productName="Easy SMX Game Controller"
                  price="$95"
                  oldPrice="$100"
                  description="Elevate your gaming with ergonomic design, responsive buttons, and customizable features for a truly immersive and precise gameplay experience."
                />
                <ProductCard
                  image={iPhone}
                  imageAlt={"iPhone"}
                  productName="iPhone XSMAX"
                  price="$720"
                  oldPrice="$800"
                  description="Enjoy a stunning 6.5-inch Super Retina display, powerful A12 Bionic chip, and advanced dual-camera system for exceptional performance and photography."
                />
              </div>
            </div>
            <Button buttonText={"VIEW MORE PRODUCTS"} className={"p-3"} />
          </section>
        </main>
      </div>
      <footer className="lg:mx-20">
        <Footer />
      </footer>
    </>
  );
}

export default ListingPage;
