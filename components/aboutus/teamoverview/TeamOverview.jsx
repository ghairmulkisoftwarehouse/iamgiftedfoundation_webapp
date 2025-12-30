'use client'
import { useEffect,useState} from 'react';
import Image from "next/image"
import Teamoverview from '@/assets/images/teamoverview.png'


const TeamOverview = () => {



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
       <div className="px-5 xl:px-12    mt-16 relative
       
         ">


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
       <div className=" flex flex-col gap-5 w-full lg:px-7 ">

       <Image 
       src={Teamoverview}
       alt="img"
       width={1298}
       height={604}
       className='w-full'
       />
       <p className=" text-lg sm:text-[20px] ">The IAMGIFTED team is comprised of dedicated educators, mentors, and advocates committed to children and families through education, resources, and community-building programs. </p>


       </div>

       </div>

  )
}

export default TeamOverview