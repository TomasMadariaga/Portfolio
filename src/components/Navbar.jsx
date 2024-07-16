import { useState } from "react";
import { Link } from "react-router-dom";
import { BiHomeAlt2 } from "react-icons/bi";
import { LuPhoneCall } from "react-icons/lu";
import { MdPersonOutline } from "react-icons/md";
import { FaCode } from "react-icons/fa";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarBlur, setNavbarBlur] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      setNavbarBlur(true);
    } else {
      setNavbarBlur(false);
    }
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <nav
      className={`flex top-0 z-10 left-0 fixed h-16 px-5 flex-col xl:flex-row w-full transition-all items-center text-lg ${
        navbarBlur && "backdrop-blur-lg backdrop-opacity-100"
      }`}
    >
      <div className="flex justify-between items-center w-full">
        <h1 className="font-bold tracking-widest text-military-green text-xl select-none">TM</h1>
        <button
          onClick={toggleMenu}
          className="text-white xl:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <ul
        className={`font-mono w-full flex flex-col gap-5 pt-5 text-end xl:py-0 xl:flex xl:flex-row xl:justify-end xl:px-6 xl:gap-8 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <li className="text-xl transition-all hover:text-military-green">
          <Link className="flex gap-2" to="/">
            <BiHomeAlt2 className="size-6" />
            Home
          </Link>
        </li>
        <li className="text-xl transition-all hover:text-military-green">
          <Link className="flex gap-2" to="/projects">
            <FaCode className="size-6" />
            Projects
          </Link>
        </li>
        <li className="text-xl transition-all hover:text-military-green">
          <Link className="flex gap-2" to="/about">
            <MdPersonOutline className="size-6" />
            About
          </Link>
        </li>
        <li className="text-xl transition-all hover:text-military-green">
          <Link className="flex gap-2" to="/contact">
            <LuPhoneCall className="size-6" />
            Contact me
          </Link>
        </li>
      </ul>
    </nav>
  );
};
