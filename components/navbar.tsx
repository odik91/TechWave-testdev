"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import logo from "@/public/images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* navbar */}
      <nav className="border">
        <div className="px-[15px] py-3 md:flex justify-center gap-19">
          <div className="flex md:hidden justify-between items-center px-4 py-2">
            <Image
              alt="logo"
              src={logo}
              placeholder="blur"
              quality={80}
              className={`block relative`}
              style={{ width: "170px" }}
            />
            <Button
              variant="secondary"
              className="block md:hidden lg:hidden active:bg-rose-400 active:shadow-sm active:shadow-gray-300 active:text-white"
              onClick={toggleMenu}
            >
              <RiMenuFill className="text-xl" />
            </Button>
          </div>

          {/* link menus */}
          <ul
            className={`md:flex md:justify-between md:items-center transition-all duration-1000 ease-in-out overflow-hidden ${
              isOpen ? "h-[80px]" : "h-0 md:h-auto"
            }`}
          >
            <li
              className={`${
                isOpen
                  ? "h-[40px] opacity-100 md:h-auto"
                  : "h-0 opacity-0 md:h-auto md:opacity-100 py-0"
              } box-border list-item py-2 pl-10 md:text-center md:py-0 md:pl-0 transition-all duration-1000 ease-in-out overflow-hidden`}
            >
              <Link
                href="/"
                className={`font-bold px-6 ${
                  pathName === "/"
                    ? "text-rose-500"
                    : "text-gray-800 hover:text-opacity-80"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li
              className={`${
                isOpen
                  ? "h-[40px] opacity-100 md:h-auto"
                  : "h-0 opacity-0 md:h-auto md:opacity-100 py-0"
              } box-border list-item py-2 pl-10 md:text-center md:py-0 md:pl-0 transition-all duration-1000 ease-in-out overflow-hidden`}
            >
              <Link
                href="/about-us"
                className={`font-bold px-6 ${
                  pathName === "/about-us"
                    ? "text-rose-500"
                    : "text-gray-800 hover:text-opacity-80"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Tentang Kami
              </Link>
            </li>
          </ul>
          <ul className="hidden md:block text-center relative min-w-[170px]">
            <Image
              alt="logo"
              src={logo}
              placeholder="blur"
              quality={80}
              className={`block absolute left-[50%] top-[50%] z-10 rounded-full transform -translate-x-[50%] -translate-y-[50%] transition-all`}
              style={{ width: "180px" }}
            />
            <li className={`text-white`}>
              <h5 className="text-xl font-medium">TECHWARE</h5>
              <div className="text-xs font-light">
                Solusi untuk pengembangan aplikasi sesuai kebutuhan anda
              </div>
            </li>
          </ul>
          <ul
            className={`md:flex md:justify-between md:items-center transition-all duration-1000 ease-in-out overflow-hidden ${
              isOpen ? "h-[80px]" : "h-0 md:h-auto"
            }`}
          >
            <li
              className={`${
                isOpen
                  ? "h-[40px] opacity-100 md:h-auto"
                  : "h-0 opacity-0 md:h-auto md:opacity-100 py-0"
              } box-border list-item py-2 pl-10 md:text-center md:py-0 md:pl-0 transition-all duration-1000 ease-in-out overflow-hidden`}
            >
              <Link
                href="/services"
                className={`font-bold px-6 ${
                  pathName === "/services"
                    ? "text-rose-500"
                    : "text-gray-800 hover:text-opacity-80"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Layanan
              </Link>
            </li>
            <li
              className={`${
                isOpen
                  ? "h-[40px] opacity-100 md:h-auto"
                  : "h-0 opacity-0 md:h-auto md:opacity-100 py-0"
              } box-border list-item py-2 pl-10 md:text-center md:py-0 md:pl-0 transition-all duration-1000 ease-in-out overflow-hidden`}
            >
              <Link
                href="/contact"
                className={`font-bold px-6 ${
                  pathName === "/contact"
                    ? "text-rose-500"
                    : "text-gray-800 hover:text-opacity-80"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Kontak
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
