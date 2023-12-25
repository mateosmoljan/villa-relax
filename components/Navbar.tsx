"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const isScrolledDown = currentScrollPos < prevScrollPos;

    setVisible(isScrolledDown);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      className={`bg-white shadow-md flex place-content-between sm:px-8 w-full py-2 fixed z-50 ${
        visible ? "transleteNavUp" : "transleteNav"
      }`}
    >
      <Link href="/" className="flex gap-2 items-center">
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={40}
          height={40}
          className="object-contain"
        />
        <p className="font-arbutus font-black text-2xl text-yellow">
          <span className="text-dark_blue_black">Villa</span>Relax
        </p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        <div className="flex gap-3 md:gap-5">
          <Link href="/" className="btn">
            Book
            <MdKeyboardDoubleArrowRight />
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        <div className="flex">
          <div className="dropdown">
            <Link href="/" className="btn">
              Book
              <MdKeyboardDoubleArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
