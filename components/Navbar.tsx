"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [navActive, setNavActive] = useState<boolean>(false);

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
  };

  const menuVarsList = {
    initial: {
      y: "5vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };

  const menuVarsLinks = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

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
      className={`bg-white shadow-md flex place-content-between sm:px-8 px-4 w-full py-2 fixed z-50 ${
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
          Relax
        </p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        <div className="flex gap-3 md:gap-5">
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="" className="nav_list">
                Villa Relax
              </Link>
            </li>
            <li>
              <Link href="/" className="nav_list">
                Pricelist
              </Link>
            </li>
            <li>
              <Link href="/" className="nav_list">
                Photogallery
              </Link>
            </li>
            <li>
              <Link href="/" className="nav_list">
                Pula
              </Link>
            </li>
            <li>
              <Link href="/" className="nav_list">
                Contact
              </Link>
            </li>
            <li className="flex">
              <Link href="/" className="btn">
                Book
                <MdKeyboardDoubleArrowRight />
              </Link>
            </li>
            <li>
              <Link href="/" className="btn first-child:tracking-widest">
                Book
                <MdKeyboardDoubleArrowRight />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        <button onClick={() => setNavActive(() => !navActive)}>
          <RxHamburgerMenu />
        </button>
        <AnimatePresence>
          {navActive && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className={`fixed left-0 top-14 bg-white w-full px-2 pb-2 shadow-md origin-top overflow-hidden`}
            >
              <motion.ul
                initial="initial"
                animate="open"
                exit="initial"
                variants={menuVarsList}
                className="flex flex-col gap-2"
              >
                <div className="overflow-hidden">
                  <motion.li
                    initial="initial"
                    animate="open"
                    variants={menuVarsLinks}
                  >
                    <Link href="" className="nav_list">
                      Villa Relax
                    </Link>
                  </motion.li>
                </div>
                <div className="overflow-hidden">
                  <motion.li
                    initial="initial"
                    animate="open"
                    variants={menuVarsLinks}
                  >
                    <Link href="/" className="nav_list">
                      Pricelist
                    </Link>
                  </motion.li>
                </div>
                <div className="overflow-hidden">
                  <motion.li
                    initial="initial"
                    animate="open"
                    variants={menuVarsLinks}
                  >
                    <Link href="/" className="nav_list">
                      Photogallery
                    </Link>
                  </motion.li>
                </div>
                <div className="overflow-hidden">
                  <motion.li
                    initial="initial"
                    animate="open"
                    variants={menuVarsLinks}
                  >
                    <Link href="/" className="nav_list">
                      Pula
                    </Link>
                  </motion.li>
                </div>
                <div className="overflow-hidden">
                  <motion.li
                    initial="initial"
                    animate="open"
                    variants={menuVarsLinks}
                  >
                    <Link href="/" className="nav_list">
                      Contact
                    </Link>
                  </motion.li>
                </div>
                <div className="overflow-hidden">
                  <motion.li
                    initial="initial"
                    animate="open"
                    variants={menuVarsLinks}
                    className="flex"
                  >
                    <Link href="/" className="btn">
                      Book
                      <MdKeyboardDoubleArrowRight />
                    </Link>
                  </motion.li>
                </div>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
