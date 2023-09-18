import React from 'react'
import {BsQuestionCircle} from 'react-icons/bs'
const Support = () => {
  return (
    <div className="absolute">
      <button
        className="border bg-cyan-700 text-black 
       w-[160px] h-[50px] rounded-full text-[20px] font-medium 
       bottom-4 fixed right-6 z-50 border-cyan-700
      "
      >
        <BsQuestionCircle className='absolute ml-[15px] mt-[3px]'/> Support
      </button>
    </div>
  );
}

export default Support;