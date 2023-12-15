"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import React from "react";

const Navbar = () => {
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("#fffff");

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#252734") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

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
