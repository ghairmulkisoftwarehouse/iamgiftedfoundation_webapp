'use client'
import { useEffect,useState} from 'react';
import { bison } from '@/components/fonts/fonts';
import  img  from '@/assets/images/fundrasingimg.png' 
import { teamFundrasing } from '@/constants/ProgramConstants';
import  img1  from '@/assets/images/donateperson1.png' 
import  img2  from '@/assets/images/donateperson2.png' 
import  img3  from '@/assets/images/donateperson3.png'
import Link from 'next/link';
import Image from 'next/image';

const Fundrasing = () => {


  
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
    <div className="px-5 xl:px-12 mt-16 relative">


       <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 absolute left-0   top-[-90px]  z-0 w-full">
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
           <h2
             className={`text-black text-4xl  sm:text-[46px] lg:text-[55px]  text-center  ${bison.className}`}
           >
            Peer-to-Peer Fundraising
           </h2>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  space-y-0 md:space-y-5   gap-4 w-full lg:px-7  ">
         {teamFundrasing.map((item, index) => (
  <div
    key={index} // Added key prop for React
    className="
      group
      border border-black/20 rounded-[20px] p-3
      flex flex-col gap-3 w-full
      transition-all duration-700 ease-out
      hover:shadow-2xl
      lg:h-[450px]
    "
  >
    {/* Image wrapper */}
    <div className="w-full overflow-hidden rounded-[20px]">
      <Image
        src={item.image}
        width={370}
        height={236}
        alt={item.title}
        className="
          w-full object-cover rounded-[20px]
          transition-transform duration-700 ease-out
          group-hover:scale-110
        "
      />
    </div>

    <h1 className="font-semibold text-lg md:text-[22px]">
      {item.title}
    </h1>

    <p className="text-sm md:text-[15px] text-black/70">
      {item.paragraph}
    </p>

    {/* Progress Bar */}
    <div className="flex flex-col">
      <div className="w-full bg-[#B2BCC599] rounded-full h-2 overflow-hidden">
        <div
          className="bg-light-cyan h-2 rounded-full transition-all duration-700 ease-out"
          style={{ width: `60%` }}
        />
      </div>

      <div className="flex justify-between w-full">
        <p className="text-[10px] xs:text-xs md:text-sm text-black font-medium">
          Raised: $8,000
        </p>
        <p className="text-[10px] xs:text-xs md:text-sm text-black/70">
          Goal: $18,000
        </p>
      </div>
    </div>

    <div className="border-b border-black/10 w-full"></div>

    {/* Donors + Button */}
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        {[img1, img2, img3].map((img, i) => (
          <div
            key={i}
            className="w-[30px] h-[30px] rounded-full border-2 border-white ml-[-5px]"
          >
            <Image
              src={img}
              width={200}
              height={300}
              className="w-full h-full rounded-full object-cover"
              alt="donor"
            />
          </div>
        ))}

        <div className="w-[30px] h-[30px] rounded-full border-2 border-white ml-[-5px] bg-black text-white text-[10px] flex items-center justify-center font-semibold">
          +124
        </div>
      </div>

      <Link href="/donate">
        <button className="btn-animated bg-mint-cyan border border-transparent group cursor-pointer w-[146px] h-[40px] rounded-full relative overflow-hidden hover:border-[#8bc9c8]">
          <span className="btn-animated-hover bg-[#9dd6d5] absolute top-1/2 left-1/2 w-0 h-0 rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:w-44 group-hover:h-44 transition-all duration-500 ease-out"></span>
          <span className="btn-animated-text text-black font-semibold group-hover:text-gray-900 relative z-10">
            Donate Now
          </span>
        </button>
      </Link>
    </div>
  </div>
))}
                
            
           </div>
   
  
   
   
           <button className="btn-seeMore border ">
             See More
           </button>
         </div>
       </div>
  )
}

export default Fundrasing