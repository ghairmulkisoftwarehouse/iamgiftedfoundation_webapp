import Image from "next/image";
import HeroSection   from '@/components/home/herosection/HeroSection';
// import DonateBanner   from '@/components/home/donatebanner/DonateBanner';
// import Awareness   from '@/components/home/awareness/Awareness';
// import ImpactStats   from '@/components/home/impactstats/ImpactStats';
// import Foundation   from '@/components/home/foundation/Foundation'
import MissionHero   from '@/components/home/missionhero/MissionHero';
import PillarsSection   from '@/components/home/PillarsSection/PillarsSection';
// import Fundrasing  from '@/components/home/fundrasing/Fundrasing';
// import ImpactNewsCarousel   from '@/components/home/impactNewsCarousel/ImpactNewsCarousel';

export default function Home() {
  return (
    <div className="flex  flex-col  w-full      ">
 
    <HeroSection/>
          <MissionHero/>
          <PillarsSection/>

   {/* <ImpactStats/> */}
      {/* <Awareness/> */}
       {/* <ImpactNewsCarousel/> */}
    {/* <DonateBanner/>  */}
        {/* <Fundrasing/> */}
    {/* <Foundation/> */}

    


    </div>
  );
}
