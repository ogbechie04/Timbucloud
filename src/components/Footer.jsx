import React from "react";
import footerMobileLogo from "../assets/footer-logo-mobile.svg";
import footerWebLogo from "../assets/footer-logo-web.svg";
import footerSocials from "../assets/footer-socials.svg";

function Footer() {
  return (
    <>
      <div className="bg-mainblue text-white font-inter flex md:px-14 px-7 pt-7 md:pt-9 pb-10 md:pb-7 justify-between flex-col md:flex-row gap-6 md:gap-8 lg:gap-0 mt-12 md:mt-28">
        <div className="flex flex-col gap-9 max-w-[474px]">
          <a href="">
            <img className="hidden md:block" src={footerWebLogo} alt="" />
            <img className="md:hidden" src={footerMobileLogo} alt="" />
          </a>
          <p className="text-justify text-xl font-medium leading-7 text-wrap hidden md:block">
            At Timbu Cloud Shop, we cater to all your gadget needs in one
            convenient location. We offer a wide range of affordable and
            accessible products, no matter where you are or what you're looking
            for. Timbu Cloud Shop is your ultimate one-stop shop for gadgets.
          </p>
        </div>
        <div className="flex md:flex-col gap-10">

          <div className="flex flex-col gap-3">
            <p className="text-justify text-xl md:text-3xl font-bold leading-7">
              Contact
            </p>
            <ul className="text-justify text-base md:text-xl font-medium leading-7 flex flex-col gap-2">
              <li>
                <a href="">@gadget.com</a>
              </li>
              <li>
                <a href="">+123 456789</a>
              </li>
              <li>
                <a href="">Anywhere</a>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Footer;
