'use client'
import { useEffect,useState} from 'react';
import BecomeVoluntershapeSvg  from '@/assets/svg/BecomeVoluntershapeSvg';
import VolunterShapeSvg   from '@/assets/svg/VolunterShapeSvg';
import { bison } from '@/components/fonts/fonts';
import Link from 'next/link';
import ArrowUpSvg from '@/assets/svg/ArrowUpSvg';
import VolunterButterfulySvg   from '@/assets/svg/VolunterButterfulySvg';
import  JoinVolunterButterfullySvg   from '@/assets/svg/JoinVolunterButterfullySvg';


const VolunteerCard = () => {


     const [numBoxes, setNumBoxes] = useState(30);
       useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 640) {
      setNumBoxes(20); 
    } else if (window.innerWidth < 1024) {
      setNumBoxes(30); 
    } else {
      setNumBoxes(30); 
    }
  };

  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

       
         const boxes = Array.from({ length: numBoxes });
  return (
   <div className=" mt-16 w-full relative bg-[#F4F7F7]">
         <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 absolute left-0 top-[-90px] z-0 w-full">
          {boxes.map((_, index) => {
            return (
              <div
                key={index}
                className={`h-[85px] flex items-center justify-center border-r border-b border-black/7`}
              >
              </div>
            );
          })}
        </div>

                    {/*  */}
     <div className="grid grid-cols-1 md:grid-cols-2 w-full container mx-auto  px-3.5  gap-5 relative z-5">

  {/* First Card */}
  <div className="flex flex-col w-full h-auto bg-light-cyan rounded-[21px] relative overflow-hidden
      cursor-pointer
     transform transition-transform duration-300 ease-in-out 
             hover:shadow-lg
  ">
    <div className="absolute z-0 left-[-30px] hidden md:block">
      <BecomeVoluntershapeSvg />
    </div>
    <div className="absolute z-0 bottom-0 right-0">
      <VolunterButterfulySvg className="w-[130px] lg:w-auto" />
    </div>

    <div className="relative flex flex-row gap-2 z-5 w-full px-4 h-full py-4">
      <div className="w-full flex flex-col items-center h-full  px-5  md:px-9 gap-2 py-4">
        <h2 className={`text-[30px] md:text-[35px] lg:text-[38px]  text-center ${bison.className}`}>
          Become a volunteer
        </h2>
        <p className="text-[#030F0CCC]  text-sm md:text-base lg:text-[17px] text-center  leading-6">
          Provide resources such as reports, infographics, and educational materials related to the charity's cause. Use a clear and intuitive navigation menu to help users find information quickly.
        </p>

        <div className="flex gap-0.5 w-full justify-center">
          <div className="flex flex-row gap-0 group cursor-pointer pt-2.5">
            <Link href="/">
              <button className="btn-donate group-hover:bg-lavender cursor-pointer">
                <span className="btn-donate-hover group-hover:w-56 group-hover:h-56"></span>
                <span className="btn-donate-text group-hover:text-black">Learn more</span>
              </button>
            </Link>

            <Link href="/">
              <button className="btn-icon group-hover:bg-lavender cursor-pointer">
                <span className="btn-icon-hover group-hover:translate-y-0"></span>
                <ArrowUpSvg className="text-white group-hover:text-black z-10" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Second Card */}
  <div className="flex flex-col w-full h-auto bg-thistle rounded-[21px] 
   cursor-pointer
  relative overflow-hidden
     transform transition-transform duration-300 ease-in-out 
             hover:shadow-lg
  ">
    <div className="absolute z-0 left-[-30px] hidden md:block">
      <VolunterShapeSvg />
    </div>
    <div className="absolute z-0 bottom-0 right-0">
      <JoinVolunterButterfullySvg className="w-[130px] lg:w-auto" />
    </div>

    <div className="relative flex flex-row gap-2 z-5 w-full px-4 h-full py-4">
      <div className="w-full flex flex-col items-center h-full   px-5  md:px-9 gap-2 py-4">
        <h2 className={`text-[30px] md:text-[35px] lg:text-[38px] text-center ${bison.className}`}>
          Join Us volunteer
        </h2>
        <p className="text-[#030F0CCC] text-sm md:text-base lg:text-[17px] text-center  leading-6">
          Provide resources such as reports, infographics, and educational materials related to the charity's cause. Use a clear and intuitive navigation menu to help users find information quickly.
        </p>

        <div className="flex gap-0.5 w-full justify-center">
          <div className="flex flex-row gap-0 group cursor-pointer pt-2.5">
            <Link href="/">
              <button className="btn-donate group-hover:bg-lavender cursor-pointer">
                <span className="btn-donate-hover group-hover:w-56 group-hover:h-56"></span>
                <span className="btn-donate-text group-hover:text-black">Join the Movement</span>
              </button>
            </Link>

            <Link href="/">
              <button className="btn-icon group-hover:bg-lavender cursor-pointer">
                <span className="btn-icon-hover group-hover:translate-y-0"></span>
                <ArrowUpSvg className="text-white group-hover:text-black z-10" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>

     </div>



         
    
    </div>
  )
}

export default VolunteerCard