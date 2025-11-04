"use client";
import { Button } from "@/components/ui/button";
import Navigation from "../ui/nav";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Icon } from "@iconify/react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductMenuOpen, setIsMobileProductMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // added

  const handleMenuClick = () => {
    setIsMobileProductMenuOpen(!isMobileProductMenuOpen);
  };

  const handleProductMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-3 z-50 px-4">
      <div className="bg-white border border-gray-200 rounded-lg px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto shadow-lg shadow-neutral-500/10 relative">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 flex-shrink-0 h-full"
          >
            <img
              src="/examlock.svg"
              alt="ExamLock Logo"
              className="h-8 w-auto"
            />
          </a>

          {/* Navigation OR Search (lg+) */}
          {/* When search is open, hide Navigation and show a full-width search input */}
          {isSearchOpen ? (
            <div className="hidden lg:flex flex-1 mx-4">
              <div className="flex w-full items-center gap-2 text-primary rounded-md px-3 py-2 bg-accent/50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M10.77 18.3a7.53 7.53 0 1 1 7.53-7.53a7.53 7.53 0 0 1-7.53 7.53m0-13.55a6 6 0 1 0 6 6a6 6 0 0 0-6-6"
                  />
                  <path
                    fill="currentColor"
                    d="M20 20.75a.74.74 0 0 1-.53-.22l-4.13-4.13a.75.75 0 0 1 1.06-1.06l4.13 4.13a.75.75 0 0 1 0 1.06a.74.74 0 0 1-.53.22"
                  />
                </svg>
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-full outline-none text-sm"
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === "Escape") setIsSearchOpen(false);
                  }}
                />
              </div>
            </div>
          ) : (
            <Navigation />
          )}

          {/* Right side */}
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
            {/* Search - Hidden on small screens */}
            <button
              className="hidden lg:block p-1 text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsSearchOpen((v) => !v)}
              aria-label={isSearchOpen ? "Close search" : "Open search"}
            >
              {isSearchOpen ? (
                <Icon icon="mdi:close" className="size-5" />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M10.77 18.3a7.53 7.53 0 1 1 7.53-7.53a7.53 7.53 0 0 1-7.53 7.53m0-13.55a6 6 0 1 0 6 6a6 6 0 0 0-6-6"
                  />
                  <path
                    fill="currentColor"
                    d="M20 20.75a.74.74 0 0 1-.53-.22l-4.13-4.13a.75.75 0 0 1 1.06-1.06l4.13 4.13a.75.75 0 0 1 0 1.06a.74.74 0 0 1-.53.22"
                  />
                </svg>
              )}
            </button>
            <span className="hidden lg:block h-[1.5rem] w-[1px] bg-[#ebe7e0]"></span>
            {/* Login - Hidden on mobile */}
            <a
              href="#"
              className="hidden lg:block text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors"
            >
              Login
            </a>

            {/* Contact Button */}
            <Button asChild className="hidden lg:flex transition-colors">
              <a href="/contact">
                Contact
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M16.175 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.712t.3-.713z"
                  />
                </svg>
              </a>
            </Button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-all duration-500"
              onClick={handleProductMenuClick}
              aria-label="Toggle Menu"
            >
              {!isMobileMenuOpen ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12H21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3 6H21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3 18H21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="M20 20L4 4m16 0L4 20"
                  />
                </svg>
              )}
            </button>
            <aside
              id="mobile-menu"
              className={cn(
                "lg:hidden bg-white w-content mb-2 fixed right-[1.2rem] top-[5rem] rounded-lg shadow-lg border border-[#E5E7EB] z-50 p-2",
                { hidden: !isMobileMenuOpen }
              )}
              style={{ height: "-webkit-fill-available" }}
            >
              <div className="flex flex-col text-[14px] text-gray-700">
                <div className="flex border p-2 rounded-sm mb-2">
                  <input
                    type="search"
                    className="w-full h-full focus:outline-none"
                  />
                  <Icon
                    icon="iconamoon:search"
                    className="inline-block ml-1 size-4"
                  />
                </div>
                <button
                  type="button"
                  className="flex justify-between items-center py-2 px-4 border-b-1 hover:bg-accent cursor-pointer text-left"
                  onClick={handleMenuClick}
                >
                  Products
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062"
                    />
                  </svg>
                </button>
                <ul
                  className={cn(
                    "flex flex-col text-neutral-500 font-light overflow-hidden transition-all ease-in-out duration-200",
                    isMobileProductMenuOpen
                      ? "max-h-64 opacity-100"
                      : "max-h-0 opacity-0"
                  )}
                >
                  <li className="py-2 px-2 pl-4 hover:bg-accent rounded-sm cursor-pointer hover:text-primary">
                    <a
                      href="/products/examlock"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      ExamLock
                    </a>
                  </li>
                  <li className="py-2 px-2 pl-4 hover:bg-accent rounded-sm cursor-pointer hover:text-primary">
                    <a
                      href="/products/examlock-lite"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      ExamLock Lite
                    </a>
                  </li>
                  <li className="py-2 px-2 pl-4 hover:bg-accent rounded-sm cursor-pointer hover:text-primary">
                    <a
                      href="/products/examlens"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      ExamLens
                    </a>
                  </li>
                  <li className="py-2 px-2 pl-4 hover:bg-accent rounded-sm cursor-pointer hover:text-primary">
                    <a
                      href="/products/lms"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      LMS
                    </a>
                  </li>
                </ul>
                <a
                  href="/integration"
                  className="flex justify-between items-center py-2 px-4 border-b-1 hover:bg-accent cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Integration
                </a>
                <a
                  href="/docs"
                  className="flex justify-between items-center py-2 px-4 border-b-1 hover:bg-accent cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Docs
                </a>
                <a
                  href="/about"
                  className="flex justify-between items-center py-2 px-4 border-b-1 hover:bg-accent cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </a>

                {/* Contact Button */}
                <div className="flex justify-center w-full gap-2 mt-4">
                  <Button variant="outline">Login</Button>
                  <Button
                    asChild
                    className="bg-primary text-white px-3 sm:px-4 py-2 text-sm font-medium flex items-center gap-2 transition-colors"
                  >
                    <a
                      href="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M16.175 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.712t.3-.713z"
                        />
                      </svg>
                    </a>
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </header>
  );
}
