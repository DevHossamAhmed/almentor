import {IoIosArrowForward} from 'react-icons/io'
import {HiArrowLongRight} from 'react-icons/hi2'
import React from 'react'

const Linksone = () => {
    const links = [

      { name: "Languages" },
      { name: "Arts & Desigb" },
      { name: "Mental Health & Wellness" },
      { name: "Soft Skills" },
      { name: "Business Management" },
      { name: "Parenting & Relationships" },
      { name: "Tecnology, Scince & Productivity" },
      { name: "Media, Photography & Film" },
      { name: "Sales & Marketing" },
      { name: "Kids Development" },
      { name: "Lifestyle & Health " },
      { name: "Enterpreneurship" },
      { name: "Education" },
      { name: "History" },

    ];

    const items = links.map((el,idx)=>(
      <ul key={el.idx}>
        <li>{el.name}</li>
      </ul>
    )
    );

  return (
    <>
      <ul className='menu rounded-md cursor-pointer '>
        <li className='ca-menu bg-white w-full flex  mb[20px]'>Category </li>
        <li className='mt[20px]'>{items} </li>
        <li>
        <button
        className=" flex text-center
            w-[200px] h-[40px] justify-center bg-red-700 
            rounded border-[1px] border-red-500 text-white font-medium
            my-[30px] px-[15px] 
        "
      >
        Browse Courses <HiArrowLongRight className='items-center m-auto font-medium text-[25px]' />
      </button>
        </li>
      </ul>
    </>
  );
}

export default Linksone