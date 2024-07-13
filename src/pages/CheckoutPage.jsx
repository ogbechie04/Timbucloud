import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import checkbox1 from "../assets/checkbox-1.svg";
import checkbox2 from "../assets/checkbox-2.svg";
import creditCard from "../assets/credit-card.svg";
import giftCard from "../assets/gift-card.svg";
import paypal from "../assets/paypal.svg";

function CheckoutPage() {
  return (
    <>
      <div className="pt-11 md:pt-[73px] mx-6 md:mx-20">
        <header>
          <NavBar />
        </header>
        <main>
          <h1 className=" md:text-5xl text-4xl font-bold text-mainblue leading-8 lg:leading-10 mt-5 lg:mt-[52px] font-inter">
            CHECKOUT
          </h1>
          {/* DELIVERY DETAILS */}
          <div className="flex flex-col md:flex-row gap-6 items-center justify-around">
          <div className="mt-4 md:mt-8 font-inter order-2 md:order-none">
            {/* DELIVERY INFORMATION */}
            <div className="md:bg-[#C8D3F0] md:px-5 md:pt-7 md:pb-6">
              <p className="text-xl md:text-2xl font-bold leading-7 mb-6 md:mb-8">
                Delivery Information
              </p>
              {/* DELIVERY INFO DETAILS */}
              <div className="bg-[#C8D3F0] px-5 md:px-0 pt-4 md:pt-0 flex flex-col mb-11 md:mb-9 pb-8">
                <div className="flex flex-col gap-3">
                  <p className="text-base md:text-lg font-semibold leading-7">
                    Delivery Address
                  </p>
                  <input
                    type="text"
                    name="delivery-address"
                    id=""
                    className="border border-solid border-stone-400 rounded p-3 outline-none bg-[#C8D3F0] w-full"
                  />
                </div>
                <div className="flex flex-col md:gap-8 gap-7 mt-3 md:mt-6">
                  <p className="text-base md:text-lg font-semibold leading-7">
                    Delivery Options
                  </p>
                  <div className="flex justify-around">
                    <div className="flex items-center gap-5">
                      <img src={checkbox1} alt="" />
                      <p className="text-base md:text-lg font-medium leading-7">
                        Standard
                      </p>
                    </div>
                    <div className="flex items-center gap-5">
                      <img src={checkbox2} alt="" />
                      <p className="text-base md:text-lg font-medium leading-7">
                        Express
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mt-7 md:mt-9 gap-7 md:gap-3">
                  <p className="text-xl md:text-2xl font-bold leading-7">
                    Payment Method
                  </p>
                  <div className="flex items-center justify-around">
                    <div className="border border-solid border-stone-400 rounded flex flex-col items-center">
                      <img src={creditCard} alt="credit card" />
                      <p className="text-base md:text-lg font-semibold leading-7">
                        Credit Card
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <img src={giftCard} alt="gift card" />
                      <p className="text-base md:text-lg font-semibold leading-7">
                        Gift Card
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <img src={paypal} alt="paypal" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mt-8 gap-4 md:gap-6">
                  <div className="flex flex-col gap-3">
                    <p className="text-base md:text-lg font-semibold leading-7">
                      Credit Card Info
                    </p>
                    <input
                      type="text"
                      name="credit-card-no"
                      id=""
                      placeholder="0000 - 0000 - 0000 - 0000"
                      maxLength={16}
                      className="border border-solid border-stone-400 rounded p-3 outline-none bg-[#C8D3F0] w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="text-base md:text-lg font-semibold leading-7">
                      Name on Card
                    </p>
                    <input
                      type="text"
                      name="name-on-card"
                      id=""
                      className="border border-solid border-stone-400 rounded p-3 outline-none bg-[#C8D3F0] w-full"
                    />
                  </div>
                  <div className="flex gap-8 md:gap-14 flex-wrap">
                    <div>
                      <p className="text-base md:text-lg font-medium leading-7">
                        CVV Number
                      </p>
                      <input
                        type="text"
                        maxLength={3}
                        className="border border-solid border-stone-400 rounded p-3 outline-none bg-[#C8D3F0] w-full"
                        placeholder="000"
                      />
                    </div>
                    <div>
                      <p className="text-base md:text-lg font-medium leading-7">
                        Expiry Month
                      </p>
                      <input
                        type="number"
                        placeholder="Month"
                        min={1}
                        max={12}
                        className="border border-solid border-stone-400 rounded p-3 outline-none bg-[#C8D3F0] w-full"
                      />
                    </div>
                    <div>
                      <p className="text-base md:text-lg font-medium leading-7">
                        Expiry Year
                      </p>
                      <input
                        type="number"
                        placeholder="Year"
                        min={new Date().getFullYear()}
                        max={new Date().getFullYear() + 10}
                        className="border border-solid border-stone-400 rounded p-3 outline-none bg-[#C8D3F0] w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-14">
            <div className="font-inter flex flex-col order-1 md:order-none mt-4 md:mt-0">
              <p className="text-2xl font-bold leading-7">Order Summary</p>
              <div className="flex flex-col border border-solid border-stone-400 pt-10 pb-16 md:pb-10 mt-8 md:mt-3 text-xl">
                <div className="flex gap-10 justify-between items-center px-6 md:pr-7">
                  <p className="font-semibold">Subtotal</p>
                  <p className="font-bold">$2975</p>
                </div>
                <hr className="border-stone-400 ml-10 mr-5 md:mr-7 my-5" />
                <div className="flex md:gap-32 gap-20 justify-between items-start px-6 md:pr-7">
                  <p className="font-semibold">Shipping</p>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex justify-end items-center gap-1 text-nowrap">
                      <img src={checkbox1} alt="" />
                      <p>
                        Flat rate: <span className="font-bold">$30.00</span>
                      </p>
                    </div>
                    <div className="flex justify-end items-center gap-1">
                      <img src={checkbox2} alt="" />
                      <p className="text-stone-500">Free Shipping</p>
                    </div>
                  </div>
                </div>
                <hr className="border-stone-400  my-5" />
                <div className="flex gap-10 justify-between items-center px-6 md:pr-7">
                  <p className="font-semibold">Total</p>
                  <p className="font-bold">$3005.00 </p>
                </div>
              </div>
            </div>
            {/* WEB BUTTON */}
            <div className="hidden lg:flex flex-col items-center gap-5">
              <Button buttonText={"Complete Purchase"} />
              <Link to="/cart">
                <a href="" className="font-medium text-lg hover:underline">
                  Back to Cart
                </a>
              </Link>
            </div>
          </div>
          {/* MOBILE BUTTON */}
          <div className="md:hidden flex flex-col items-center gap-5 order-3">
            <Button buttonText={"Complete Purchase"} />
            <Link to="/cart">
              <a href="" className="font-medium text-lg hover:underline">
                Back to Cart
              </a>
            </Link>
          </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default CheckoutPage;
