import React from "react";
import Button from "./Button";
import logo from "../assets/logo.svg";
import mobileLogo from "../assets/mobile-logo.svg";
import { CgShoppingCart } from "react-icons/cg";
import { FaHamburger } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function NavBar() {
  return (
    <>
      <nav className="font-inter text-lg font-medium leading-7 flex justify-between items-center mt-5 lg:mt-14">
        <a href="" className="hidden lg:block">
          <img src={logo} alt="Timbucloud logo" />
        </a>
        <a href="" className="lg:hidden">
          <img src={mobileLogo} alt="Timbucloud logo" />
        </a>
        <div className="lg:flex gap-6 items-center hidden">
          <ul className="flex gap-20">
            <li className="font-bold">
              <a href="">PRODUCTS</a>
            </li>
            <li>
              <a href="">CONTACT</a>
            </li>
            <li>
              <a href="">AFFLILIATE</a>
            </li>
            <li>
              <a href="">SPECIAL</a>
            </li>
          </ul>
          <button className="flex items-center bg-mainblue text-white rounded py-2.5 px-4 text-base font-bold gap-4 text-nowrap">
            SHOPPING CART
            <CgShoppingCart className="w-7 h-7" />
          </button>
        </div>
        <div className="lg:hidden flex  justify-center gap-3 text-mainblue">
          <a href=""><CgShoppingCart className="w-5 h-5"/></a>
          <a href=""><GiHamburgerMenu className="w-5 h-5"/></a>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
