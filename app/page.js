import Image from "next/image";
import HeroSection   from '@/components/home/herosection/HeroSection';
import MissionHero   from '@/components/home/missionhero/MissionHero';
import PillarsSection   from '@/components/home/PillarsSection/PillarsSection';
import GetInvolved   from '@/components/home/getInvolved/GetInvolved';
import Fundrasing  from '@/components/home/fundrasing/Fundrasing';
import TrackImpact   from '@/components/global/trackImpact/TrackImpact';

// import DonateBanner   from '@/components/home/donatebanner/DonateBanner';
// import Awareness   from '@/components/home/awareness/Awareness';
// import ImpactStats   from '@/components/home/impactstats/ImpactStats';
// import Foundation   from '@/components/home/foundation/Foundation'

// import ImpactNewsCarousel   from '@/components/home/impactNewsCarousel/ImpactNewsCarousel';

export default function Home() {
  return (
    <div className="flex  flex-col  w-full      ">
 
    <HeroSection/>
          <MissionHero/>
          <PillarsSection/>
         
              <Fundrasing/>
               <GetInvolved/>
                  <div className=' pb-11 mt-10'>
         <TrackImpact/>
        </div>

   {/* <ImpactStats/> */}
      {/* <Awareness/> */}
       {/* <ImpactNewsCarousel/> */}
    {/* <DonateBanner/>  */}
    {/* <Foundation/> */}

    


    </div>
  );
}
