'use client'
import GetInvolvedHeroSection   from '@/components/getinvolved/getInvolvedHeroSection/GetInvolvedHeroSection';
// import  HeroSectionBanner  from '@/components/global/HeroSectionBanner'
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
            <GetInvolvedHeroSection
            />

          <Foundationgurdian/>

            <DonationTiers/>
           <div className='mt-16 w-full '>
             <TrackImpact/>
           </div>
            
            {/* <VolunteerCard/> */}
            {/* <VolunteerOptions/> */}
            {/* <Volunteervideo/> */}
       
            


  </div>
  )
}

export default GetInvolved
