"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <section className="menu-lg bg-white py-4">
        <div className="container-fluid">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/images/logo-nitro.png"
                  alt="Agung Ventures"
                  width={80}
                  height={40}
                />
              </Link>
            </div>

            <div className="md:flex-grow">
              <ul className="menu-lg flex justify-end space-x-8">
                <li>
                  <Link
                    href="/about-us"
                    className={cn("menu-option hover:text-gray-600 text-base")}
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    href="/profile-team"
                    className={cn("menu-option hover:text-gray-600 text-base")}
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portofolio"
                    className={cn("menu-option hover:text-gray-600 text-base")}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className={cn("menu-option hover:text-gray-600 text-base")}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Navigation */}
      <section className="menu-mobile bg-white py-4">
        <div className="phone">
          <div className="content">
            <div className="flex justify-between items-center px-4">
              <div className="flex-shrink-0">
                <Link href="/">
                  <Image
                    src="/images/logo-nitro.png"
                    alt="Agung Ventures"
                    width={80}
                    height={35}
                  />
                </Link>
              </div>

              <div className="flex items-center">
                <nav role="navigation">
                  <div id="menuToggle" className="relative">
                    <input
                      type="checkbox"
                      className="absolute top-0 right-0 w-10 h-10 opacity-0 z-10 cursor-pointer"
                      checked={mobileMenuOpen}
                      onChange={() => setMobileMenuOpen(!mobileMenuOpen)}
                    />

                    {/* Hamburger Icon */}
                    <div className="flex flex-col space-y-1">
                      <span
                        className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
                          mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                        }`}
                      ></span>
                      <span
                        className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${
                          mobileMenuOpen ? "opacity-0" : "opacity-100"
                        }`}
                      ></span>
                      <span
                        className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
                          mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                        }`}
                      ></span>
                    </div>

                    {/* Mobile Menu */}
                    <div
                      id="menu"
                      className={`absolute right-0 top-10 bg-white shadow-md p-4 w-40 transition-all duration-300 z-50 ${
                        mobileMenuOpen
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      }`}
                    >
                      <ul className="space-y-3">
                        <li>
                          <Link
                            href="/about-us"
                            className="block hover:text-gray-600"
                          >
                            About
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/profile-team"
                            className="block hover:text-gray-600"
                          >
                            Team
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/portofolio"
                            className="block hover:text-gray-600"
                          >
                            Portfolio
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/contact-us"
                            className="block hover:text-gray-600"
                          >
                            Contact
                          </Link>
                        </li>
                      </ul>

                      <div className="socmed-mobile mt-4">
                        <ul className="flex space-x-3">
                          <li>
                            <a
                              href="https://www.linkedin.com/company/agungventures/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
