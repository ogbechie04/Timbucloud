import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center gap-6 my-28">
      <h1 className="md:text-5xl text-2xl font-bold text-mainblue">
        404 - Page Not Found
      </h1>
      <p className="md:text-2xl text-lg font-bold text-mainblue">
        The page you are looking for does not exist.
      </p>
      <Link to="/">
        <Button buttonText={"Go To Home"} />
      </Link>
    </div>
  );
};

export default NotFound
