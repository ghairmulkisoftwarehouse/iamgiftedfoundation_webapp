'use client'
import  HeroSectionBanner  from '@/components/global/HeroSectionBanner'
import  VolunteerCard   from '@/components/getinvolved/volunteerCard/VolunteerCard';
import VolunteerOptions  from '@/components/getinvolved/volunteerOptions/VolunteerOptions';
import dynamic from "next/dynamic"

const Volunteervideo = dynamic(
  () => import("@/components/getinvolved/voluntervideo/Volunteervideo"),
  { ssr: false }
)


const GetInvolved = () => {
  return (
          <div className="flex  flex-col  w-full ">
            <HeroSectionBanner
            title="Get Involved"
            subtitle="Interested in volunteering, donating, or partnering with us? We’d love to have you join our efforts. Reach out for more information on how you can make a difference."
          height=" h-[250px] "
               bannerSvgClass = ' w-[210px] lg:w-[230px]   xl:w-[300px]'   
               subtitleClass=" text-sm sm:text-base  md:text-[17px]   text-white/70"
            />
            <VolunteerCard/>
            <VolunteerOptions/>
            <Volunteervideo/>
       
            


  </div>
  )
}

export default GetInvolved
