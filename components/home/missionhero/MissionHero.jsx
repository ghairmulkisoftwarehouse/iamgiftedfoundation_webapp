'use client'
import { useState, useEffect } from "react";
import {  bison } from '@/components/fonts/fonts';

// import { Player, ControlBar, ProgressControl } from "video-react";
// import "video-react/dist/video-react.css";
const MissionHero = () => {
      const [numBoxes, setNumBoxes] = useState(60);

       useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 640) {
      // Tailwind 'sm' breakpoint is 640px
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
 <div className="flex flex-col gap-2 w-full h-auto xl:h-[900px] bg-gradient-to-b from-light-cyan to-white relative">

         <div className=" absolute    w-full h-full   z-20 left-0 flex flex-col gap-3.5 ">
         <h2 className={`title-heading  md:leading-tight  text-center  pt-16 ${bison.className}`}>Our mission is to aid those in need </h2>
         
          <div className="px-5 xl:px-12 flex justify-center w-full">
  <video  width={1200}   height={350}   controls>
    <source 
      src="https://flutter.github.io/assets-for-api-docs/assets/videos/bee.mp4" 
      type="video/mp4" 
    />
  </video>
</div>
          <div>

 
    </div>
 
     

         <div>

         </div>


   
   </div>

   <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 relative z-0">
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
       
     

    </div>
  )
}

export default MissionHero