import Image from "next/image";
import React from "react";
import Footerlogo from "../../assets/images/footerlogo.webp";
import google from "../../assets/images/play-store.svg";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    // <!-- Footer container -->
    <footer className="bg-neutral-100 text-centertext-black dark:text-black dark:bg-neutral-100 lg:text-left mt-[40px]">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* <!-- logo Elements section --> */}
          <div className="px-[10%]">
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <Image
                src={Footerlogo}
                alt="logo"
                className="w-[40px] item-center"
              />
            </h6>
            <p className="mb-4">
              <a
                href="#!"
                className="text-black dark:text-black hover:underline"
              >
                About
              </a>
            </p>
            <p className="mb-4">
              <a
                href="#!"
                className="text-black dark:text-black hover:underline"
              >
                Press
              </a>
            </p>
            <p className="mb-4">
              <a
                href="#!"
                className="text-black dark:text-black hover:underline"
              >
                Team
              </a>
            </p>
            <p className="mb-4">
              <a
                href="#!"
                className="text-black dark:text-black hover:underline"
              >
                Contact
              </a>
            </p>
          </div>
          {/* <!-- Products section --> */}
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start ">
              Explore
            </h6>
            <p className="mb-4">
              <a
                href="#!"
                className="text-black dark:text-black hover:underline"
              >
                Browse courses
              </a>
            </p>
            <p className="mb-4">
              <a
                href="#!"
                className="text-black dark:text-black hover:underline"
              >
                Popular courses
              </a>
            </p>
            <p className="mb-4">
              <a
                href="#!"
                className="text-black dark:text-black hover:underline"
              >
                Subscription Plans
              </a>
            </p>
            <p>
              <a
                href="#!"
                className="text-black dark:text-black hover:underline"
              >
                Instructors
              </a>
            </p>
            <p className="pt-[15px]">
              <a
                href="#!"
                className="text-black dark:text-black hover:underline "
              >
                Learning Partners
              </a>
            </p>
          </div>
          {/* <!-- Useful links section --> */}
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start ">
              Business
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-black dark:text-black underline">
                Become an instructor
              </a>
            </p>
            <button
              className="bg-white w-[160px] leading-[30px] text-[16px]
h-[50px] text-red-600
border rounded-md my-3 
border-red-600
hover:bg-red-600 hover:border-red-600 hover:text-white
"
            >
              Subscribe now
            </button>
          </div>
          {/* <!-- Contact section --> */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              CONTACT
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <Image
                src={google}
                alt="google play store"
                className="w-[160px]"
              />
            </p>
          </div>
        </div>
      </div>

      {/* <!--Copyright section--> */}
      {/* <div className=" bg-slate-200 py-10 text-center md:text-left">
<div className="container p-6 text-neutral-800 grid gap-5 lg:grid-cols-2 md:grid-cols-1">
<div>
<p className="text-black text-[16px]">
© 2023
<a
className="font-semibold text-black "
href="https://www.almentor.net/home"
>
almentor.net
</a>
</p>

<a href="#" className="px-[8px] hover:underline">
Terms of use
</a>
<a href="#" className="px-[8px] hover:underline">
Privacy policy
</a>
<a href="#" className="text-sky-500 underline">
Help Center
</a>
</div>
<div className="flex text-right bg-slate-200 gap-3 text-[30px] ">
<a href="#">
<BiLogoLinkedin />
</a>
<a href="#">
<BiLogoFacebook />
</a>
<a href="#">
<BiLogoInstagram />
</a>
<a href="#">
<BiLogoYoutube />
</a>
<a href="#">
<BiLogoTwitter />
</a>
</div>
</div>
<Copyright/>
</div> */}
      <Copyright />
    </footer>
  );
};

export default Footer;
