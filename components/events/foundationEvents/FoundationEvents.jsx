'use client'
import { useEffect,useState} from 'react';
import { eventDetail } from '@/constants/EventConstants';
import img1 from '@/assets/images/eventsimg1.png';
import img2 from '@/assets/images/eventimg2.png';
import ArrowRightSvg from '@/assets/svg/ArrowRigntSvg';
import {  bison } from '@/components/fonts/fonts';
import { useRouter } from "next/navigation";
const colSpanPattern = ["lg:col-span-3", "lg:col-span-2", "lg:col-span-2", "lg:col-span-3"]; // repeating pattern

const EventsSection = () => {
     let router = useRouter();

 const [numBoxes, setNumBoxes] = useState(60);
       useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 640) {
      setNumBoxes(20); 
    } else if (window.innerWidth < 1024) {
      setNumBoxes(40); 
    } else {
      setNumBoxes(60); 
    }
  };

  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

       
         const boxes = Array.from({ length: numBoxes });


  return (

 <div className="px-5 xl:px-12 mt-16 w-full relative">
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
         <div className="flex flex-col w-full items-center gap-10">
      <div className="  w-full    sm:w-[50%] lg:w-[60%] flex flex-col  gap-6">
         <h2 className={`title-heading  text-center  ${bison.className}`}>
              IAMGIFTED Foundation events
            </h2>
        </div>
    <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-5 w-full lg:px-10 gap-5">
      {eventDetail.map((event, index) => {
        const colSpan = colSpanPattern[index % colSpanPattern.length]; 
        const img = (index % 2 === 0) ? img1 : img2; // alternate images

        return (
          <div
            key={index}
            style={{
              backgroundImage: `url(${img.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: "22px",
              height: "381px",
            }}
            className={`${colSpan} relative overflow-hidden group`}
          >
            <div
              className="
               cursor-pointer
                absolute bottom-0 left-0 w-full h-[180px]
                flex justify-between items-center px-4
                bg-gradient-to-b from-transparent via-black/90 to-black
                rounded-b-[22px]
                transition-all duration-700 ease-in-out
                group-hover:h-full
              "
            >
              <p
                className={`text-white text-[25px] lg:text-[30px] xl:text-[36px] lg:w-3/4 ${bison.className}`}
              >
                {event}
              </p>
             <div
              onClick={()=>router.push('/events/1')}
             >
                    <ArrowRightSvg/>
             </div>
            
            </div>
          </div>
        );
      })}
    </div>
     <button className='btn-seeMore  border border-black/20'>
           See More
        </button>
    </div>
    
    </div>
  );
};

export default EventsSection;
