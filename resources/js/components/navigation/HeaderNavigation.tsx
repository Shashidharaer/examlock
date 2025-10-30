import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';
import { Link, usePage } from "@inertiajs/react";
import { useState } from 'react';
import Navigation from '../ui/nav';

export default function Header() {
  // Read branding (logo) from Inertia page props
  const { branding } = usePage().props as {
    branding?: { logo?: { url?: string; alt?: string } };
  };

  const logoUrl = branding?.logo?.url;
  const logoAlt = branding?.logo?.alt;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductMenuOpen, setIsMobileProductMenuOpen] =
    useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMobileProductMenuOpen(!isMobileProductMenuOpen);
  };

  const handleProductMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-3 z-50 px-4">
      <div className="relative mx-auto max-w-7xl rounded-lg border border-gray-200 bg-white px-4 shadow-lg shadow-neutral-500/10 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex h-full flex-shrink-0 items-center gap-2"
          >
            <img
              src={logoUrl}
              alt={logoAlt}
              className="h-8 w-auto"
            />
          </Link>

          {/* Navigation OR Search (lg+) */}
          {isSearchOpen ? (
            <div className="mx-4 hidden flex-1 lg:flex">
              <div className="text-primary bg-accent/50 flex w-full items-center gap-2 rounded-md px-3 py-2">
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
                  className="w-full text-sm outline-none"
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === 'Escape')
                      setIsSearchOpen(false);
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
              className="hidden p-1 text-gray-600 transition-colors hover:text-gray-900 lg:block"
              onClick={() => setIsSearchOpen((v) => !v)}
              aria-label={
                isSearchOpen ? 'Close search' : 'Open search'
              }
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
            <span className="hidden h-[1.5rem] w-[1px] bg-[#ebe7e0] lg:block"></span>
            {/* Login - Hidden on mobile */}
            <Link
              href="#"
              className="hidden text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 lg:block"
            >
              Login
            </Link>

            {/* Contact Button */}
            <Button
              asChild
              className="hidden transition-colors lg:flex"
            >
              <Link href="/contact">
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
              </Link>
            </Button>

            {/* Mobile menu button */}
            <button
              className="p-2 text-gray-600 transition-all duration-500 hover:text-gray-900 lg:hidden"
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
            <aside id="mobile-menu" className={cn('w-content fixed right-[1.2rem] top-[5rem] z-50 mb-2 rounded-lg border border-[#E5E7EB] bg-white p-2 shadow-lg lg:hidden',
                { hidden: !isMobileMenuOpen },
              )} style={{ height: '-webkit-fill-available' }}>
              <div className="flex flex-col text-[14px] text-gray-700">
                <div className="mb-2 flex rounded-sm border p-2">
                  <input
                    type="search"
                    className="h-full w-full focus:outline-none"
                  />
                  <Icon
                    icon="iconamoon:search"
                    className="ml-1 inline-block size-4"
                  />
                </div>
                <button
                  type="button"
                  className="border-b-1 hover:bg-accent flex cursor-pointer items-center justify-between px-4 py-2 text-left"
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
                    'flex flex-col overflow-hidden font-light text-neutral-500 transition-all duration-200 ease-in-out',
                    isMobileProductMenuOpen
                      ? 'max-h-64 opacity-100'
                      : 'max-h-0 opacity-0',
                  )}
                >
                  <li className="hover:bg-accent hover:text-primary cursor-pointer rounded-sm px-2 py-2 pl-4">
                    <Link
                      href="/products/examlock"
                      onClick={() =>
                        setIsMobileMenuOpen(false)
                      }
                    >
                      ExamLock
                    </Link>
                  </li>
                  <li className="hover:bg-accent hover:text-primary cursor-pointer rounded-sm px-2 py-2 pl-4">
                    <Link
                      href="/products/examlock-lite"
                      onClick={() =>
                        setIsMobileMenuOpen(false)
                      }
                    >
                      ExamLock Lite
                    </Link>
                  </li>
                  <li className="hover:bg-accent hover:text-primary cursor-pointer rounded-sm px-2 py-2 pl-4">
                    <Link
                      href="/products/examlens"
                      onClick={() =>
                        setIsMobileMenuOpen(false)
                      }
                    >
                      ExamLens
                    </Link>
                  </li>
                  <li className="hover:bg-accent hover:text-primary cursor-pointer rounded-sm px-2 py-2 pl-4">
                    <Link
                      href="/products/lms"
                      onClick={() =>
                        setIsMobileMenuOpen(false)
                      }
                    >
                      LMS
                    </Link>
                  </li>
                </ul>
                <Link
                  href="/integration"
                  className="border-b-1 hover:bg-accent flex cursor-pointer items-center justify-between px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Integration
                </Link>
                <Link
                  href="/docs"
                  className="border-b-1 hover:bg-accent flex cursor-pointer items-center justify-between px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Docs
                </Link>
                <Link
                  href="/about"
                  className="border-b-1 hover:bg-accent flex cursor-pointer items-center justify-between px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>

                {/* Contact Button */}
                <div className="mt-4 flex w-full justify-center gap-2">
                  <Button variant="outline">Login</Button>
                  <Button
                    asChild
                    className="bg-primary flex items-center gap-2 px-3 py-2 text-sm font-medium text-white transition-colors sm:px-4"
                  >
                    <Link
                      href="/contact"
                      onClick={() =>
                        setIsMobileMenuOpen(false)
                      }
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
                    </Link>
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
