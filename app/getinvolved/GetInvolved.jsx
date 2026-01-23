'use client'
import  HeroSectionBanner  from '@/components/global/HeroSectionBanner'
// import  VolunteerCard   from '@/components/getinvolved/volunteerCard/VolunteerCard';
// import VolunteerOptions  from '@/components/getinvolved/volunteerOptions/VolunteerOptions';
import dynamic from "next/dynamic"

import DonationTiers   from '@/components/getinvolved/donationTiers/DonationTiers';
import TrackImpact   from '@/components/global/trackImpact/TrackImpact';
import Foundationgurdian  from '@/components/getinvolved/foundationgurdian/Foundationgurdian';

// const Volunteervideo = dynamic(
//   () => import("@/components/getinvolved/voluntervideo/Volunteervideo"),
//   { ssr: false }
// )


const GetInvolved = () => {
  return (
          <div className="flex  flex-col  w-full ">
            <HeroSectionBanner
            title="donate/GET INVOLVED "
            subtitle="Your support empowers youth and strengthens communities through education, wellness, and opportunity."
          height=" h-[250px] "
               bannerSvgClass = ' w-[210px] lg:w-[230px]   xl:w-[300px]'   
               subtitleClass=" text-sm sm:text-base  md:text-[17px]   text-white/70"
            />

          <Foundationgurdian/>

            <DonationTiers/>
           <div className='mt-20 w-full '>
             <TrackImpact/>
           </div>
            
            {/* <VolunteerCard/> */}
            {/* <VolunteerOptions/> */}
            {/* <Volunteervideo/> */}
       
            


  </div>
  )
}

export default GetInvolved
