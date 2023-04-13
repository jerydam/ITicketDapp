import { useState } from "react";
import Connect from './Connect';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
      
        <span className="font-semibold text-xl p-2 rounded-md bg-[#bcd8d6] text-[#000000] tracking-tight ml-2">
          ITICKET
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-500 hover:text-white hover:border-white"
          onClick={toggleMenu}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path
              d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-md ml-[500px]  lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white mr-20"
          >
            About
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block mr-20 lg:mt-0 text-gray-500 hover:text-white"
          >
            Documentation
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 mr-10 hover:text-white"
          >
            Developer
          </a>  
        </div>
        <Connect />
      </div>
    </nav>
  );
};

export default Navbar;
