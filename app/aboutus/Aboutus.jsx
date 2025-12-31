import OurTeam  from '@/components/aboutus/ourteam/OurTeam';
import TeamOverview  from '@/components/aboutus/teamoverview/TeamOverview';
import OurteamMission   from '@/components/aboutus/ourteam-misson/OurteamMission';
import  HeroSectionBanner   from '@/components/global/HeroSectionBanner';

const Aboutus = () => {
  return (
  <div className="flex  flex-col  w-full ">
<HeroSectionBanner
  title="About Us"
        subtitle="The Founder: Alexander Mattison"
        height="h-[250px] "
                       bannerSvgClass = 'w-[150px]   lg:w-[170px]   xl:w-[220px] '   

        subtitleClass="font-semibold md:text-2xl  text-white/80"
/>
  <TeamOverview/>
    <OurTeam/>
    <div className='pb-5  lg:pb-10'>
     <OurteamMission/>
    </div>
 


  </div>
  )
}

export default Aboutus