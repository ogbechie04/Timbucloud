import React from "react";

function Button({ buttonText, className, onClick }) {
    const baseClasses = "bg-mainblue text-white rounded py-2.5 px-7 md:px-8 text-md leading-7 font-bold font-inter border hover:bg-[#F5F7FF] border-mainblue border hover:text-mainblue ";
    const combinedClasses = `${baseClasses} ${className || ""}`;

    return (
      <button className={combinedClasses} onClick={onClick}>{buttonText}</button>
    );
  }

export default Button