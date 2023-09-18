"use cleint"
const Banner = () => {
  return (
    <div>
      <div className="flex bg text-white   ">
        <div
          className="container m-auto leading-[50px]
          text-center md:text-left
        "
        >
          <h1 className="text-[40px] font-extrabold">Learn Online</h1>
          <p className="text-[20px] ">
            From the biggest Arabic library of video-based courses
          </p>
          <p className="text-[20px] ">
            Only for <span className="text-[30px] font-medium">99 EGP</span>{" "}
            /month
          </p>
          <p className="text-slate-500 italic">Billed yearly</p>
          <button
            className=" border border-red-600	w-[170px]
           bg-red-600 rounded-md
           hover:bg-white
           hover:text-red-600
          "
          >
            Subscribe now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner