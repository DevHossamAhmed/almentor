"use client"
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useState , useEffect } from 'react';
import Sun from '../../assets/images/sun.svg';
import Moon from '../../assets/images/moon.jpeg';




const Darkmode = () => {
 
  const {theme , setTheme} = useTheme();
  const [mounted , setMounted] = useState(false);

  useEffect(()=>{
    setMounted(false);
  },[]);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme ;

  return (
    <div>
      <div className='flex justify-center'>
        {currentTheme === 'dark' ? (
          <button

            className='bg-black hover:bg-black w-28 rounded-md '
            onClick={()=> setTheme ('light')}

          >
            <Image src={Sun} alt='logo' width={50} height={50}/>
          </button>
        ) : (
          <button 

            className='bg-gray-100 w-28 rounded-md hover:bg-gray-300'
            onClick={()=> setTheme ('dark')}
          
          >
            <Image src={Moon} alt='logo' width={50} height={50}/>
          </button>
        )}
      </div>
    </div>
  );
};

export default Darkmode;
