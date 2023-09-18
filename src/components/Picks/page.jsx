"use client"
const Picks = () => {
  return (
    <>
      <div className="container w-full sm:w-full m-auto mt-[-180px]">
        <h1 className="text-[30px] font-medium pb-[20px]">Picks</h1>
        {/* <div class="grid md:grid-cols-6 grid-cols-3 cursor-pointer">
          <div className="w-[140px] sm:w-[180px] md:w-[200px]h-[30px] border-r border-black text-center">
            <button className="text-left w-[140px] h-[30px] m-auto
            text-[15px] focus:font-semibold focus:border-b-[6px] focus:border-b-red-600 pb-[10px] ">
              Featured Courses
            </button>
          </div>
          <div className="w-[140px] sm:w-[180px] md:w-[200px] h-[30px] border-r border-black text-center">
            <button className="text-center 
             w-[100px] text-[15px] ml-[34px] mr-[10px]
             flex h-[30px] focus:font-semibold focus:border-b-[6px]
              focus:border-b-red-600 pb-[10px] ">
              Most Viewed
            </button>
          </div>
          <div className="w-[160px] sm:w-[180px] md:w-[200px] h-[30px]  text-center">
            <button className="text-center w-[100px] 
            ml-[22px]
            
            flex h-[30px] text-[15px] focus:font-semibold focus:border-b-[6px] focus:border-b-red-600 pb-[10px] ">
              New Courses
            </button>
          </div>
        </div> */}

        <div className="flex gap-2">
          <button
            className="cursor-pointer 
              focus:border-b-[5px]
              focus:font-semibold
            focus:border-b-red-600
          "
          >
            Featured Courses
          </button>
          <span className="piks-col"></span>
          <button
            className="cursor-pointer 
              focus:border-b-[5px]
              focus:font-semibold
            focus:border-b-red-600
          "
          >
            Most Viewed
          </button>
          <span className="piks-col"></span>
          <button
            className="cursor-pointer 
              focus:border-b-[5px]
              focus:font-semibold
            focus:border-b-red-600
          "
          >
            New Courses
          </button>
        </div>

        <div
          id="carouselExampleControls"
          className="relative"
          data-te-carousel-init
          data-te-ride="carousel"
        >
          {/* <!--Carousel items--> */}
          <div className="relative w-[90%] mt-[10px] h-[300px] m-auto overflow-hidden after:clear-both after:block after:content-['']">
            {/* <!--First item--> */}
          </div>

          {/* <!--Carousel controls - prev item--> */}
          <button
            className="absolute bottom-0  left-0 top-[50%] z-[1] flex w-[30px] h-[220px] px-[2px] rounded-md bg-neutral-300 text-black items-center justify-center border-0 bg-none p-0 text-center opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:no-underline 
      focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none -translate-x-0 translate-y-[-50%]
      top-
     "
            type="button"
            data-te-target="#carouselExampleControls"
            data-te-slide="prev"
          >
            <span className="inline-block h-8 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Previous
            </span>
          </button>
          {/* <!--Carousel controls - next item--> */}
          <button
            className="absolute bottom-0 right-0 top-[50%] z-[1] rounded-md -translate-x-0 translate-y-[-50%] flex w-[30px] h-[220px] bg-neutral-300 text-black items-center justify-center border-0 bg-none p-0 text-center  opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)]  hover:no-underline  focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            data-te-target="#carouselExampleControls"
            data-te-slide="next"
          >
            <span className="inline-block h-8 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Next
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Picks;