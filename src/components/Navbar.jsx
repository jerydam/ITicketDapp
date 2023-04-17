import { useState } from "react";
import Connect from "./Connect";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between bg-light-blue">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <a href="">
          <span className="font-bold text-xl text-[#fff] tracking-tight ml-2">
            <span className="text-5xl text-red">.</span>METASQUARE
          </span>
        </a>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-500 hover:text-white hover:border-white"
          onClick={toggleMenu}
        >
          <svg
            className="fill-current text-white h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-md lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white mr-10 sm:ml-[500px] lg:ml-0"
          >
            About
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block mr-10 lg:mt-0 text-gray-500 hover:text-white sm:ml-[500px] lg:ml-0"
          >
            Docs
          </a>
          <a
            href="/admin"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 mr-20 hover:text-white sm:ml-[500px] lg:ml-0"
          >
            Admin
          </a>
        </div>
        <Connect />
      </div>
      <style jsx>{`
        @media (max-width: 767px) {
          .flex-col {
            display: flex;
            flex-direction: column;
          }
          .flex-col .nav-link {
            margin-top: 10px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
