import React from "react";
import SearchAccount from "../components/SearchAccount";
import NavBar from "../components/NavBar";
import CheckoutRow from "../components/CheckoutRow";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import cartLaptop from "../assets/cart-laptop.svg";
import cartController from "../assets/cart-controller.svg";
import cartIphone from "../assets/cart-iphone.svg";
import mobileCartLaptop from "../assets/mobile-cart-laptop.svg";
import mobileCartController from "../assets/mobile-cart-controller.svg";
import mobileCartIphone from "../assets/mobile-cart-iPhone.svg";
import smallAirpods from "../assets/small-airpods.svg";
import blackAirpods from "../assets/black-airpods.svg";
import checkbox1 from "../assets/checkbox-1.svg";
import checkbox2 from "../assets/checkbox-2.svg";

function CartPage() {
  return (
    <>
      <div className="mx-6 lg:mx-20 mt-5 lg:mt-10">
        <header>
          <SearchAccount />
          <NavBar />
        </header>
        <main>
          <div className="font-inter mt-6 md:mt-14 flex justify-between items-center">
            <h1 className=" md:text-5xl text-2xl font-bold text-mainblue leading-8 lg:leading-10">
              MY CART
            </h1>
            <a
              href=""
              className="md:hidden text-base font-bold text-mainblue leading-6 active:underline"
            >
              Update
            </a>
          </div>
          <div className="mt-6 lg:mt-20">
            <div className="font-roboto hidden md:grid grid-cols-5 items-center mt-10 font-bold text-xl leading-7">
              <p className="col-span-2">Product</p>
              <p className="text-center">Price</p>
              <p className="text-center">Quantity</p>
              <p className="text-center">Total</p>
            </div>
            <hr className="mt-5 border-stone-400" />
            <CheckoutRow
              productImage={cartLaptop}
              mobileproductImage={mobileCartLaptop}
              imageAlt={"Laptop"}
              productName={"13’ Macbook Air 2020"}
              color={"Silver"}
              model={2020}
              version={"HTNO-24-07"}
              price={1080}
            />
            <hr className="mt-12 border-stone-400" />
            <CheckoutRow
              productImage={cartController}
              mobileproductImage={mobileCartController}
              imageAlt={"Controller"}
              productName={"Easy SMX Game Controller"}
              color={"Silver"}
              model={2022}
              version={"HTNO-22-11"}
              price={95}
            />
            <hr className="mt-12 border-stone-500" />
            <CheckoutRow
              productImage={cartIphone}
              mobileproductImage={mobileCartIphone}
              imageAlt={"Laptop"}
              productName={"iPhone XSMAX"}
              color={"Black"}
              model={2020}
              version={"HTNO-27-06"}
              price={270}
            />
          </div>
          <hr className="border-stone-400 md:mt-[70px] md:mb-10 my-7" />
          <section className="flex justify-between">
            <div className="flex items-center w-full md:w-auto">
              <input
                type="text"
                placeholder="Promo Code Here"
                className="flex-grow p-3 border border-mainblue border-solid outline-none bg-[#F5F7FF;] font-roboto"
              />
              <Button
                buttonText={"Apply"}
                className={"rounded-l-none h-full grow-0"}
              />
            </div>
            <Button buttonText={"Update Cart"} className={"hidden md:block"} />
          </section>
          <hr className="border-stone-400 my-10 hidden md:block" />
          <section className="flex flex-col md:flex-row mt-11 md:mt-0 justify-between md:gap-10">
            <div className="flex flex-col gap-8 md:gap-12 order-2 md:order-none mt-10 md:mt-0">
              <p className="text-xl font-bold leading-7">
                You may be interested in
              </p>
              <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-center">
                <ProductCard
                  image={smallAirpods}
                  imageAlt={"airpods pro"}
                  productName={"Airpods Pro"}
                  price={"$400"}
                />
                <ProductCard
                  image={blackAirpods}
                  imageAlt={"black wireless airpods"}
                  productName={"Black Wireless Pods"}
                  price={"$180"}
                  oldPrice={"$200"}
                />
              </div>
            </div>
            <div className="font-inter flex flex-col">
              <p className="text-2xl font-bold leading-7">Cart Totals</p>
              <div className="flex flex-col border border-solid border-stone-400 pt-10 pb-16 md:pb-10 mt-8 md:mt-3 text-xl">
                <div className="flex gap-10 justify-between items-center pl-10 pr-5 md:pr-7">
                  <p className="font-semibold">Subtotal</p>
                  <p className="font-bold">$2975</p>
                </div>
                <hr className="border-stone-400 ml-10 mr-5 md:mr-7 my-5" />
                <div className="flex gap-10 justify-between items-start pl-10 pr-5 md:pr-7">
                  <p className="font-semibold">Shipping</p>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex justify-end items-center gap-1">
                      <img src={checkbox1} alt="" />
                      <p>
                        Flat rate: <span className="font-bold">$30.00</span>
                      </p>
                    </div>
                    <div className="flex justify-end items-center gap-1">
                      <img src={checkbox2} alt="" />
                      <p className="text-stone-500">Free Shipping</p>
                    </div>
                    <p className="text-right text-stone-600">
                      Shipping to <span className="font-bold text-black">14, AmoreGardens</span>
                    </p>
                    <a href="" className="text-base text-[#08319CCC] font-medium">Change Address</a>
                  </div>
                </div>
                <hr className="border-stone-400 ml-10 mr-5 md:mr-7 my-5" />
                <div className="flex gap-10 justify-between items-center pl-10 pr-5 md:pr-7">
                  <p className="font-semibold">Total</p>
                  <p className="font-bold">$3005.00 </p>
                </div>
                <hr className="border-stone-400 mt-5 mb-10" />
                <Button
                  buttonText={"Proceed to Checkout"}
                  className={"md:px-[137px] ml-10 mr-5 md:mr-7"}
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default CartPage;
