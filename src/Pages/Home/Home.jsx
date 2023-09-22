import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="my-20">
      <h2 className="text-3xl font-semibold text-center mb-6">
        Welcome to my website
      </h2>
      <p className="text-lg md:text-xl font-medium text-center mb-10 mx-3 sm:mx-0">
        Do you want to see the users of my website ? Kindly Click this button
      </p>
      <div class="flex text-center justify-center">
        <Link to="/list-view">
          <div class="button">
            <div class="text font-semibold">See Users</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
