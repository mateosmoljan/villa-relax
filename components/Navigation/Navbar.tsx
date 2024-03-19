"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import "./nav.css";
import { NavigationLinks } from "@/lib/Links";
import { usePathname } from "next/navigation";
import { Divide as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [navActive, setNavActive] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const menuVars = {
    initial: {
      height: 0,
    },
    animate: {
      height: 224,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      height: 0,

      transition: {
        duration: 0.3,
        ease: [0.12, 0, 0.39, 0],
      },
    },
  };

  useEffect(() => {
    if (navActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Ensure the overflow is reset when the component unmounts
    };
  }, [navActive]);

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

  const handleCloseNav = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        handleCloseNav();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`bg-white shadow-md flex place-content-between sm:px-8 px-4 w-full py-2 fixed z-40 ${
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
          <span className="text-dark_blue_black">Villa</span>
          Panorama
        </p>
      </Link>

      {/* Desktop Navigation */}
      <div className="md:flex hidden">
        <div className="flex gap-3 md:gap-5">
          <ul className="flex gap-4 items-center">
            {NavigationLinks.NavData.map((item, index) => (
              <li
                key={index}
                className={`${pathname === item.path ? "" : "hover_nav"}`}
              >
                <Link
                  href={item.path}
                  className={`nav_list ${
                    pathname === item.path ? "active_nav" : ""
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="btn">
                Book
                <MdKeyboardDoubleArrowRight />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex relative" ref={navRef}>
        <button className=" z-50">
          <Hamburger
            toggled={navActive}
            toggle={setNavActive}
            label="Show menu"
            size={24}
            color="#343a40"
            rounded
          />
        </button>
        <AnimatePresence>
          {navActive && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className={`fixed left-0 top-14 bg-white w-full px-3  pb-3 shadow-md origin-top overflow-hidden`}
            >
              <ul className="flex flex-col gap-4 origin-top">
                {NavigationLinks.NavData.map((item, index) => (
                  <li
                    key={index}
                    className={`flex `}
                    onClick={() => setNavActive(() => !navActive)}
                  >
                    <Link
                      href={item.path}
                      className={`nav_list ${
                        pathname === item.path ? "active_nav" : ""
                      }`}
                    >
                      <div
                        className={` ${
                          pathname === item.path ? "active_nav" : "hover_nav"
                        }`}
                      >
                        {item.title}
                      </div>
                    </Link>
                  </li>
                ))}
                <li
                  className="flex"
                  onClick={() => setNavActive(() => !navActive)}
                >
                  <Link href="/contact" className="btn pb-2">
                    Book
                    <MdKeyboardDoubleArrowRight />
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
