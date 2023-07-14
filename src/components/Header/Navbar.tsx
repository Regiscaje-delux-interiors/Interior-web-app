import React, { useState } from "react";
import { Services, Staffs } from "./Navs";
import logo from "../../assests/images/logo.png";
const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [isStaff, setIsStaff] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const mousetoggle = () => {
    setOpen(!isOpen);
  };
  const mouseStafftoggle = () => {
    setIsStaff(!isStaff);
  };
  return (
    <nav className="bg-blue-950 fixed w-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-8 w-8">
              <img className="h-8 w-auto object-cover" src={logo} alt="Logo" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#"
                  className=" text-white hover:text-red hover:text-red px-3 py-2 rounded-md text-sm font-medium"
                >
                  <h1 className=" text-white hover:text-#f43f5e hover:text-#f43f5e">
                    REGISCAJE DELUX INTERIORS
                  </h1>
                </a>
                <a
                  href="#"
                  className="text-white hover:bg-red-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  PROFILE
                </a>
                <div
                  className="relative inline-block text-left"
                  onMouseEnter={mousetoggle}
                  onMouseLeave={mousetoggle}
                >
                  <button
                    type="button"
                    className="text-white hover:bg-red-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    SERVICES
                  </button>
                  {isOpen && (
                    <>
                      <Services />
                    </>
                  )}
                </div>
                <a
                  href="#"
                  className="text-white hover:bg-red-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  PROJECTS
                </a>
                <div
                  className="relative inline-block text-left"
                  onMouseEnter={mouseStafftoggle}
                  onMouseLeave={mouseStafftoggle}
                >
                  <button
                    type="button"
                    className="text-white hover:bg-red-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    STAFFS
                  </button>
                  {isStaff && (
                    <>
                      <Staffs />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <a
            href="#"
            className=" text-white hover:#f43f5e hover:text-white px-3 py-2 rounded-md text-sm font-medium xl:hidden lg:hidden md:hidden "
          >
            <h1>REGISCAJE DELUX INTERIORS</h1>
          </a>
          <div className="-mr-2 flex md:hidden">
            <button
              className="text-gray-400 hover:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              onClick={toggleDropdown}
            >
              {/* Menu open/close icon */}
              {isDropdownOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isDropdownOpen && (
        <div className="md:hidden h-full relative" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <div
              className="relative inline-block text-left"
              onMouseEnter={mousetoggle}
              onMouseLeave={mousetoggle}
            >
              <button
                type="button"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Services
              </button>
              {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Service 1
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Service 2
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Service 3
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
