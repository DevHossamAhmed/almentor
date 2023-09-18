"use client"
const Responsive = () => {
  return (
    <>
      <div className="w-full sm:w-full md:w-full lg:hidden">
        <div className="flex grid-cols-2 divide-x">
          <div>01</div>
          <div>02</div>
        </div>
      </div>
    </>
  );
}

export default Responsive