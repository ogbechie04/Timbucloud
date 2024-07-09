import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import mobileLogo from "../assets/mobile-logo.svg";
import { CgShoppingCart } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";

function NavBar() {
  const location = useLocation()
  return (
    <>
      <nav className="font-inter text-lg font-medium leading-7 flex justify-between items-center mt-5 lg:mt-14">
        <Link to="/" className="hidden lg:block">
          <img src={logo} alt="Timbucloud logo" />
        </Link>
        <Link to="/" className="lg:hidden">
          <img src={mobileLogo} alt="Timbucloud logo" />
        </Link>
        <div className="lg:flex gap-6 items-center hidden">
          <ul className="flex gap-20">
            <li className="">
              <a href="">PRODUCTS</a>
            </li>
            <li>
              <a href="">CATEGORIES</a>
            </li>
            <li>
              <a href="">CONTACT</a>
            </li>
          </ul>
          {location.pathname !== "/cart" && (
            <Link to="/cart">
              <button className="flex items-center bg-mainblue text-white rounded py-2.5 px-4 text-base font-bold gap-4 text-nowrap border hover:bg-[#F5F7FF] hover:border-mainblue hover:border hover:text-mainblue">
                SHOPPING CART
                <CgShoppingCart className="w-7 h-7" />
              </button>
            </Link>
          )}
        </div>
        <div className="lg:hidden flex  justify-center gap-3 text-mainblue">
        {location.pathname !== "/cart" && (
            <Link to="/cart">
              <CgShoppingCart className="w-5 h-5" />
            </Link>
          )}
          <a href="">
            <GiHamburgerMenu className="w-5 h-5" />
          </a>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
