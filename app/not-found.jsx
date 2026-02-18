'use client'
import Link from "next/link";
import { IoMdRefresh } from "react-icons/io";
import { IoReturnDownBack } from "react-icons/io5";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router=useRouter();
  return (
    <main className="flex items-center justify-center w-full min-h-screen py-8 text-gray-900 md:py-16">
      <div className="relative flex flex-col items-center w-full gap-8 px-8 md:px-18 xl:px-40 ">

        <h1 className= "  text-7xl lg:text-8xl xl:text-9xl md:text-[300px] w-full select-none text-center font-black text-gray-400">
          404
        </h1>

       <p className="text-2xl lg:text-3xl font-bold capitalize">
                Oops! This page doesn’t exist
                </p>

        <p className="  text-lg md:text-xl lg:text-2xl font-medium break-words text-dull text-center">
          Unfortunately, this is only a 404 page. You may have mistyped the address,
          or the page has been moved to another URL.
        </p>


        
<div className='flex justify-center  gap-2.5 items-center'>





       

      <button
         onClick={() => router.back()}
       className="btn-animated bg-mint-cyan border h-[50px] border-transparent group cursor-pointer relative    overflow-hidden hover:border-[#8bc9c8]">
    <span className="btn-animated-hover bg-[#9dd6d5] group-hover:w-44 group-hover:h-44"></span>
    <span className="btn-animated-text text-gray-800 group-hover:text-gray-900   text-[13px] xs:text-sm sm:text-base font-semibold  mx-auto mt-[-2px] flex  items-center  gap-1">
    <IoReturnDownBack className=" text-2xl"/>
         Go Back
    </span>
  </button>

  <Link href={'/'}>
       <button className="btn-donate group-hover:bg-lavender cursor-pointer  z-5    w-[198px] h-[50px] ">
                        <span className="btn-donate-hover group-hover:w-56 group-hover:h-56"></span>
                        <span className="btn-donate-text group-hover:text-black text-[13px] xs:text-sm sm:text-base ">
                                      Go back to Home Page

                        </span>
                      </button>
                      </Link>
 {/* <button 
    onClick={() => window.location.reload()}

 className="btn-animated bg-polar-mist  h-[38px] group relative overflow-hidden   cursor-pointer">
      <span className="btn-animated-hover bg-gray-200 group-hover:w-40 group-hover:h-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></span>
      <span className="btn-animated-text text-black group-hover:text-gray-900 relative z-10   text-[15px] font-semibold  mx-auto mt-[-2px] flex  items-center gap-0.5 ">
      <IoMdRefresh className=""/>
        Refresh
      </span>
    </button> */}



</div>


{/* 
        <div className="flex flex-col justify-between w-full gap-8 md:flex-row md:gap-32 xl:px-16">

          <Link
            href="/"
            className="flex items-center justify-center w-full gap-4 p-3 font-semibold capitalize border-2 border-blue-500 rounded shadow-lg md:w-fit hover:bg-blue-500 md:p-6 focus:outline-none hover:scale-105 active:scale-90 hover:shadow-xl"
          >
            <span className="rotate-180 material-symbols-outlined">
              arrow_right_alt
            </span>
            Go back to Previous Page
          </Link>

          <Link
            href="/"
            className="rounded flex w-full md:w-fit group items-center gap-4 justify-center border-2 border-green-500 font-semibold hover:bg-green-500 p-3 md:p-6 capitalize focus:outline-none hover:scale-105 active:scale-90 shadow-lg hover:shadow-xl"
          >
            <span className="material-symbols-outlined">home</span>
            Go back to Home Page
          </Link>

        </div> */}
      </div>
    </main>
  );
}
