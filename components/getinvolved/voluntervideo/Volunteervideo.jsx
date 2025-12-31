


'use client'
// import Plyr from "plyr";
// import { useState, useEffect, useRef } from "react";
import { bison } from '@/components/fonts/fonts';
// import "plyr/dist/plyr.css";
import PlayVideoSvg from '@/assets/svg/PlayVideoSvg';
import img1 from '@/assets/images/bannerimage.png';
import Image from "next/image";
// import PauseIconSvg from "@/assets/svg/PauseIconSvg";

const Volunteervideo = () => {
  // const videoRef = useRef(null);
  // const playerRef = useRef(null);
  // const [numBoxes, setNumBoxes] = useState(60);
  // const [showIcon, setShowIcon] = useState(true); // Show play button initially
  // const [iconType, setIconType] = useState('play'); // 'play' or 'pause'

  // // Responsive boxes
  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth < 640) setNumBoxes(20);
  //     else if (window.innerWidth < 1024) setNumBoxes(40);
  //     else setNumBoxes(60);
  //   };
  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // // Initialize Plyr
  // useEffect(() => {
  //   if (videoRef.current) {
  //     const player = new Plyr(videoRef.current, {
  //       controls: ["progress", "mute", "fullscreen"], 
  //       clickToPlay: false,
  //     });

  //     playerRef.current = player;

  //     player.on("play", () => {
  //       setShowIcon(false); // hide icon while playing
  //     });

  //     player.on("pause", () => {
  //       setIconType('pause');
  //       setShowIcon(true); // show pause icon briefly
  //       setTimeout(() => setShowIcon(false), 1000); // hide after 1 second
  //     });

  //     player.on("ended", () => {
  //       setIconType('play');
  //       setShowIcon(true); // show play icon when video ends
  //     });

  //     return () => player.destroy();
  //   }
  // }, []);

  // const handleScreenClick = () => {
  //   if (!playerRef.current) return;

  //   if (!playerRef.current.playing) {
  //     playerRef.current.play();
  //     setIconType('play');
  //     setShowIcon(false); // hide play button immediately after click
  //   } else {
  //     playerRef.current.pause();
  //     setIconType('pause');
  //     setShowIcon(true); 
  //     setTimeout(() => setShowIcon(false), 1000);
  //   }
  // };

  // const boxes = Array.from({ length: numBoxes });

  return (
    <div 
      className="flex flex-col gap-2 w-full  px-5 xl:px-12   mt-16  relative"
  
    >
      <div className=" w-full h-full  flex flex-col gap-0 md:gap-3.5   pb-5  lg:pb-20  ">
    
         <div className="w-full relative lg:px-7  h-auto lg:h-[600px]">
            <div className="absolute inset-0 flex items-center justify-center z-20">
      <PlayVideoSvg   className={' w-[63px] h-[63px] md:w-[110px] md:h-[110px]'}/>
    </div>
          <Image
            className="w-full rounded-[25px] h-auto lg:h-[600px]  object-cover"
            src={img1}
            alt="Mission image"
            width={1296}
            height={604}
        
          />
        </div>
      </div>

    </div>
  );
};

export default Volunteervideo;

   
