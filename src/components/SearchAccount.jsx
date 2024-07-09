import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

function SearchAccount() {
  return (
    <>
      <div className="font-inter text-black opacity-50 flex gap-6">
        <div className="flex justify-start items-center gap-[10px] border-[1px] border-solid rounded-lg border-mainblue p-2.5 grow">
        <FaSearch className=""/>
        <input className="text-lg leading-7 font-medium placeholder:text-black w-full outline-none bg-[#F5F7FF]" type="text" name="search-bar" id="search" placeholder="Search" />
        </div>
        <div className="flex justify-start items-center gap-[10px] border-[1px] border-solid rounded-lg border-mainblue p-2.5">
          <span className="text-lg leading-7 font-medium text-nowrap">My Account</span>
          <FaChevronDown className="" />
        </div>
      </div>
    </>
  );
}

export default SearchAccount;
