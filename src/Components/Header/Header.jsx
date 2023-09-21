import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <h1 className="mr-10 text-xl lg:text-3xl text-white font-extrabold flex-shrink-0">
            User Profile
          </h1>
          <div className="flex items-center">
            <div className="hidden md:block ml-auto">
              <div className="flex justify-center space-x-4">
                <a
                  href="/"
                  className="text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  Home
                </a>
                <a
                  href="/list-view"
                  className="text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  List View 
                </a>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <a
                onClick={toggleNavbar}
                href="#"
                className="bg-blue-800 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-none focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-start">
            <a
              href="/"
              className="text-white block px-3  rounded-md text-lg font-medium"
            >
              Home
            </a>
            <a
              href="/list-view"
              className="text-white px-3 py-2 rounded-md text-lg font-medium block"
            >
              List View 
            </a>
            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;