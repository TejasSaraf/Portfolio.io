"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import SearchPopup from "./SearchPopup";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  return (
    <>
      <nav
        className={`navbar fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-8xl px-6 sm:px-32 lg:px-34">
          <div className="navContents relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <button
                type="button"
                className={`relative inline-flex items-center justify-center rounded-md p-2 ${
                  isScrolled
                    ? "text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                    : "text-white hover:bg-gray-700 hover:text-white"
                } focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="NavLogo flex flex-shrink-0 items-center">
                <Image
                  className="h-8 w-auto"
                  src="/T.png"
                  alt="Your Company"
                  width={38}
                  height={38}
                />
              </div>
              <div className="hidden sm:ml-6 sm:block w-full max-w-xs">
                <div className="flex items-center">
                  <div className="relative flex flex-1 items-stretch">
                    <button
                      onClick={handleSearchClick}
                      className="bg-background3 w-full text-left pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors duration-300"
                    >
                      Type / to search
                    </button>
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                className={`paint p-1 rounded-full ${
                  isScrolled
                    ? "text-gray-400 hover:text-gray-500"
                    : "text-gray-300 hover:text-white"
                } focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 transition-colors duration-300`}
              >
                <Image
                  src="/paint-palette.png"
                  alt="Paint Palette"
                  width={25}
                  height={25}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        <div
          className={`sm:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            <button
              onClick={handleSearchClick}
              className="w-full text-left pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors duration-300"
            >
              Search
            </button>
          </div>
        </div>
      </nav>
      <SearchPopup
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}

export default Navbar;
