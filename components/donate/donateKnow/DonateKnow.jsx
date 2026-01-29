'use client'
import { useEffect,useState} from 'react';
import Image from 'next/image';
import   img from '@/assets/images/donateimge.png'; 
import { bison } from '@/components/fonts/fonts';
import DonateForm   from '../donatefrom/DonateForm';
import RecentDonate  from '../recentdonate/RecentDonate';
import ProgramList   from '../programlist/ProgramList';




const DonateKnow = () => {


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

      
       <div className="grid grid-cols-1   lg:grid-cols-3 w-full px-5  md:px-3.5  md:container mx-auto   gap-6 relative z-5 pt-4">

           <div className='lg:col-span-1   '>

              <ProgramList/>
       </div>
       <div className='lg:col-span-2   flex flex-col gap-3.5   '>
        <Image
        src={img}
        alt={'img'}
        width={794}
        height={451}
        className="w-full  object-cover rounded-[22px] h-[300px] lg:h-[451px]"
      />

      <div className=' flex flex-col gap-2'>
          <h3  className={`text-[28px] lg:text-[34px] ${bison.className}`}> Life Skills Camp — Empowering Confidence for the Future</h3>

        <p className="text-[#030F0CCC] text-sm lg:text-[15px] leading-[35px]">
A one-day, high-impact experience focused on building life skills, leadership, and confidence—both on and off the field. Participants engage in hands-on activities designed to strengthen teamwork, communication, and self-belief, creating skills they can carry into everyday life.

        </p>

      </div>
 <div className=' pt-6'>
  <DonateForm/>
 </div>
      
  

       </div>


     


       </div>



         
    
    </div>
  )
}

export default DonateKnow
