"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import React from "react";

const Navbar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [handleClick, setClicked] = useState(false);
  const [hamburgerColor, setHamburgerColor] = useState("#F9F7F7");

  function HandleScroll() {
    if (window.scrollY > 0) {
      setScrolled(true);
      setHamburgerColor("#000");
    } else {
      setScrolled(false);
      setHamburgerColor("#F9F7F7");
    }
  }

  function handleNav() {
    setClicked((event) => !event);
  }

  return (
    <nav className="flex place-content-between sm:px-16 w-full py-3 fixed z-10">
      <Link href="/" className="flex gap-2 items-center">
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={40}
          height={40}
          className="object-contain"
        />
        <p className="font-arbutus font-black text-2xl text-brown">
          <span className="text-black">Villa</span>Relax
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
          {toggleDropdown && (
            <div className="dropdown">
              <Link href="/" className="btn">
                Book
                <MdKeyboardDoubleArrowRight />
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
