"use client";

import { useContext, useState, useEffect } from "react";

// next image
import Image from "next/image";
import Logo from "../../assets/images/almentorlogo.webp"; 

// react scroll
import { Link } from "react-scroll";

// components
import Subscribe from "./Subscribe";
import { Search } from "./Search";
import Language from "./language";
import Darkmode from "./darkmode";
import LoginBtn from "./LoginBtn";
import SignupBtn from "./SignupBtn";
import { ResSearch } from "./resSearch";
import Linksone from "./linksone";

// media query hook
import { useMediaQuery } from "react-responsive";

// icons 
import {BiMenuAltLeft ,BiX} from 'react-icons/bi';


const Header = () => {
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const desktopMode = useMediaQuery({
    query: "(min-width:1300px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      // header
      if (window.scrollY > 50) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };

    // add event listener
    window.addEventListener("scroll", handleScroll);

    // remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <header
      className={`${
        header ? "bg-white shadow-md py-1" : "bg-white shadow-none py-2 "
      }
      fixed w-full max-w-[1920px] mx-auto z-50 transition-all duration-300 
    `}
    >
      <div
        className="xl:container md:container md:w-full mx-auto flex flex-col sm:flex-row xl:flex-row md:flex-row xl:items-center
        xl:justify-between
      "
      >
        <div className="flex ">
          {/* nav open menu */}
          <div
            onClick={() => setNav(!nav)}
            className="items-center py-6 px-4 text-[20px]
            cursor-pointer xl:hidden
          "
          >
            {nav ? <BiX /> : <BiMenuAltLeft />}
          </div>
          {/* Logo */}
          <div className="flex container relative justify-between  xl:w-[200px] items-center">
            <div className="md:w-[700px] sm:w-[100px]">
              <Link
                to="/"
                smooth={desktopMode}
                spy={true}
                className="cursor-pointer "
              >
                <Image src={Logo} alt="logo" width={150} height={50}></Image>
              </Link>
              
            </div>
            <div className=" ">
              <ResSearch />
            </div>
          </div>
        </div>
        {/* nav */}
        <div className="  flex xl:flex-row xl:flex mr-[200px] hidden gap-3 items-center">
          <Link
            className=" dn-menu cursor-pointer relative"
            to="/"
            smooth={desktopMode}
           spy={true}
          >
            Course
          </Link>
            <Linksone className="absolute"/>
          <Link
            className="cursor-pointer"
            to="/"
            smooth={desktopMode}
            spy={true}
          >
            Instructors
          </Link>
          <Subscribe />
        </div>
        <div className="flex items-center gap-1 xl:flex hidden">
          <Search />
          <Language />
          <Darkmode />
          <LoginBtn />
          <SignupBtn />
        </div>
      </div>
    </header>
  );
};

export default Header;
