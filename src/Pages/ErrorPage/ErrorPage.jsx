import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorImg from "../../assets/error.jpg";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex justify-center">
      <div className="my-16">
        <p className="text-red-500 text-2xl font-semibold text-center mb-5">
          Sorry, an unexpected error has occurred
        </p>
        <p className="text-red-600 text-2xl font-semibold text-center mb-5">
          {error.statusText || error.message}
        </p>
        <img src={errorImg} alt="" />
        <div className="flex justify-center mt-10">
          <Link to="/">
            <button className="bg-cyan-400 py-5 px-10 rounded-full text-xl text-white font-semibold">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
