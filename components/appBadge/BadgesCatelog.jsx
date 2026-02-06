'use client'
import { useEffect,useState} from 'react';
import { bison } from '@/components/fonts/fonts';
import bafgesimg from '@/assets/svg/IAMGIFTED-1 1.svg';
import Image from 'next/image';
import { useSelector } from 'react-redux';
// import SeedSuppter25Svg   from '@/assets/badges/SeedSuppter25Svg';
// import WingGiver50Svg   from '@/assets/badges/WingGiver50Svg';
// import Growth100Svg  from '@/assets/badges/Growth100Svg'
// import Hope250Svg   from '@/assets/badges/Hope250Svg';
// import Empower500Svg    from '@/assets/badges/Empower500Svg';
// import PatnerShip1000Svg   from '@/assets/badges/PatnerShip1000Svg';
// import Legacy2500Svg   from '@/assets/badges/Legacy2500Svg';
// import Vision5000Svg   from  '@/assets/badges/Vision5000Svg';
// import Founders10000   from '@/assets/badges/Founders10000';
import { motion } from "framer-motion";
import { badgeSvgMap } from '@/constants/badgeConstants';
import devLog from '@/utils/logsHelper';



const BadgesCatelog = () => {

       const { publicBadge } = useSelector((state) => state.badge);

  devLog('publicBadge',publicBadge);

// const badges = [
//   { title: "Seed Supporter", Svg: SeedSuppter25Svg },
//   { title: "Wing Giver", Svg: WingGiver50Svg },
//   { title: "Growth", Svg: Growth100Svg },
//   { title: "Hope", Svg: Hope250Svg },
//   { title: "Empower", Svg: Empower500Svg },
//   { title: "Partnership", Svg: PatnerShip1000Svg },
//   { title: "Legacy", Svg: Legacy2500Svg },
//   { title: "Vision", Svg: Vision5000Svg },
//   { title: "Founders", Svg: Founders10000 },
// ];
  
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


  const uiBadges = publicBadge?.map((item) => ({
    title: item.name,
    min: item.min,
    max: item.max,
    Svg: badgeSvgMap[item.min],
  }));

  return (
    <div className=" w-full pt-16 relative  bg-gradient-to-b from-[#D6EEF080]  to-transparent  pb-12    ">


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

         <div className=' flex flex-col gap-2'>
                <h2
             className={`text-black text-4xl  sm:text-[46px] lg:text-[55px]  text-center  ${bison.className}`}
           >
  Showcase Your Achievements with App Badges
            </h2>
         <div className=' w-full px-6  md:px-0   md:w-4/5  lg:w-8/12 mx-auto'>
        <p className='  text-sm sm:text-base md:text-lg  font-thin text-[#030F0CCC]/80  text-center ' >
            Highlight your verified contributions and earned badges, build credibility, and let your impact speak for itself through our official App Badge collection.

            </p>
            </div>
       
         </div>
        
          
         </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-5 md:px-3.5 md:container mx-auto mt-10">
        {uiBadges?.map((badge, index) => {
          const BadgeSvg = badge.Svg;
          if (!BadgeSvg) return null;

          return (
            <motion.div
              key={badge.min}
              className="flex flex-col items-center gap-2 p-4 rounded-[22px] cursor-pointer "
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                type: 'spring',
                stiffness: 120,
              }}
              whileHover={{
                scale: 1.08,
                boxShadow: '0px 14px 30px rgba(0,0,0,0.18)',
              }}
            >
              <h3 className="text-lg font-semibold text-center mb-[-20px]">
                {badge.title}
              </h3>

              <BadgeSvg className="w-[220px] h-[220px] md:w-[260px] md:h-[260px] lg:w-[300px] lg:h-[300px]" />

          
            </motion.div>
          );
        })}
      </div>




        
       </div>
  )
}

export default BadgesCatelog