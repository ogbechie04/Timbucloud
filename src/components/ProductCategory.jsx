import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";

function ProductCategory({categoryName, className}) {
    const baseClasses = "flex bg-mainblue-background px-5 lg:py-3 py-1.5 items-center text-mainblue justify-between gap-2 lg:gap-0 flex-1 basis-[calc(30%-16px)] lg:basis-0";
    const combinedClasses = `${baseClasses} ${className || ""}`;

    return (
        <>
        <div className={combinedClasses}>
            <p className="lg:text-lg text-base leading-7 font-bold font-inter text-nowrap">{categoryName}</p>
            <FaChevronRight className="w-5 h-5 hidden lg:inline " />
            <FaChevronDown className="w-5 h-5 lg:hidden" />
        </div>
        </>
    )
}

export default ProductCategory