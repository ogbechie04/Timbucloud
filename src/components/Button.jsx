import React from "react";

function Button({ buttonText, className, onClick }) {
    const baseClasses = "bg-mainblue text-white rounded py-2.5 lg:px-8 text-lg leading-7 font-bold font-inter";
    const combinedClasses = `${baseClasses} ${className || ""}`;

    return (
      <button className={combinedClasses} onClick={onClick}>{buttonText}</button>
    );
  }

export default Button