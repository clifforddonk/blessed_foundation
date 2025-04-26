"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  // State to track whether mobile menu is open
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // State to track if navbar should be transparent or solid
  const [isScrolled, setIsScrolled] = useState(false);
  // Get current pathname
  const pathname = usePathname();
  // Check if we're on the homepage
  const isHomepage = pathname === "/";

  // Navigation items
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Join Us", path: "/join-us" },
    { name: "Contact Us", path: "/contact" },
  ];

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Handle scroll events to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    // Add event listeners
    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    // Clean up
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [mobileMenuOpen]);

  // Determine if we should use transparent styling
  // Only use transparent if we're on homepage AND not scrolled
  const useTransparent = isHomepage && !isScrolled;

  return (
    <header
      className={`fixed w-full z-30 transition-all duration-300 ${
        useTransparent ? "bg-transparent" : "bg-white shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className={`text-2xl font-bold transition-colors ${
                useTransparent ? "text-white" : "text-indigo-600"
              }`}
            >
              <img className="h-17 w-19" src="/logo.jpg" alt="" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`font-medium transition-colors ${
                  useTransparent
                    ? "text-white hover:text-indigo-200"
                    : "text-gray-700 hover:text-indigo-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/donate"
              className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors coursor-pointer"
            >
              Donate Now
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className={`transition-colors cursor-pointer ${
                useTransparent
                  ? "text-white hover:text-indigo-200"
                  : "text-gray-700 hover:text-indigo-600"
              }`}
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
            >
              {/* Hamburger icon */}
              {!mobileMenuOpen ? (
                <svg
                  className="h-6 w-6 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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
                  className="h-6 w-6 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile menu, sliding from right */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold text-indigo-600">Menu</h2>
          <button
            className="text-gray-500 hover:text-indigo-600"
            onClick={toggleMobileMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
              onClick={toggleMobileMenu}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/donate"
            className="block px-3 py-2 mt-4 text-center bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700"
            onClick={toggleMobileMenu}
          >
            Donate Now
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
