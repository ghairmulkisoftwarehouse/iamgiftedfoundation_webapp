'use client'
import  HeroSectionBanner  from '@/components/global/HeroSectionBanner'
import  VolunteerCard   from '@/components/getinvolved/volunteerCard/VolunteerCard';
import VolunteerOptions  from '@/components/getinvolved/volunteerOptions/VolunteerOptions';
import Volunteervideo   from '@/components/getinvolved/voluntervideo/Volunteervideo';


const GetInvolved = () => {
  return (
          <div className="flex  flex-col  w-full ">
            <HeroSectionBanner
            title="Get Involved"
            subtitle="Interested in volunteering, donating, or partnering with us? We’d love to have you join our efforts. Reach out for more information on how you can make a difference."
             height=" h-[350px] sm:h-[320px] "
               bannerSvgClass = ' w-[240px]  md:w-[180px]  lg:w-[250px] xl:w-[310px]'   
            subtitleClass=" text-base  md:text-lg lg:text-xl  text-white/70"
            />
            <VolunteerCard/>
            <VolunteerOptions/>
            <Volunteervideo/>
       
            


  </div>
  )
}

export default GetInvolved
