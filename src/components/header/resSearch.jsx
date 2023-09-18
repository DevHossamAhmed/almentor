"use client";

import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

export const ResSearch = () => {
  // const [value , setValue] = useState('Search courses, topics, instructors');
  // const searchHandler =() => {
  //   const {target} = event;
  //   setValue(target, value);
  // }
  return (
    <form className="flex relative items-center xl:hidden">
      <div className="relative xl:hidden ">
        <input
          type="search"
          name="search"
          className=" h-10 text-end  text-xs focus:outline-none"
          placeholder="Search...."
        />
        <button className="absolute right-1 top-1/2 -translate-y-1/2 ">
          <BiSearchAlt2 className="text-red-600 text-2xl " />
        </button>
      </div>
    </form>
  );
};
