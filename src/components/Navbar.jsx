import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Aspire Logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Study Destination", path: "/study-destination" },
  { label: "Courses", path: "/courses" },
  { label: "Training Program", path: "/training" },
  { label: "Team", path: "/team" },
  { label: "Blogs", path: "/blogs" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="w-full">
      {/* Top Offer Bar */}
      <div className="text-center text-xs md:text-sm text-white font-medium py-2 bg-gradient-to-r from-green-500 via-[#22c55e] to-[#16a34a]">
        Study abroad with Aspire Career{" "}
        <span className="underline underline-offset-2">
          Join Now
        </span>
      </div>

      {/* Main Navbar */}
      <nav className="relative z-50 h-[70px] flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 bg-white text-gray-900 shadow">
        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <img className="w-20" src={Logo} alt="Aspire Logo" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 md:pl-28">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.label}>
                <Link
                  to={link.path}
                  className={`text-sm transition ${
                    isActive
                      ? "text-green-600 font-semibold"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:inline bg-white hover:bg-gray-50 border border-gray-300 ml-10 px-7 py-2 rounded-full active:scale-95 transition text-gray-800 text-sm">
          Get started
        </button>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-label="Toggle Menu"
          className="md:hidden text-gray-900 active:scale-90 transition"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
            >
              <path
                d="M6 6l12 12M6 18L18 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
            >
              <path
                d="M3 7h24M3 15h24M3 23h24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute z-40 top-[70px] left-0 w-full bg-white border-t border-gray-100 shadow-lg transition-all duration-200 ease-out ${
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-3 pointer-events-none"
          }`}
        >
          <div className="p-6">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      onClick={closeMenu}
                      className={`block text-sm ${
                        isActive
                          ? "text-green-600 font-semibold"
                          : "text-gray-700 hover:text-gray-900"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link to="/study-destination">
  <button
    type="button"
    onClick={closeMenu}
    className="mt-6 w-40 h-11 rounded-full border border-gray-300 bg-white text-sm text-gray-700 hover:bg-gray-50 active:scale-95 transition"
  >
    Get started
  </button>
</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
