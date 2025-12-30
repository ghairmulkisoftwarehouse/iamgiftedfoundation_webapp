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
        height="h-[280px] "
                       bannerSvgClass = ' w-[240px]  md:w-[180px]  lg:w-[230px] '   

        subtitleClass="font-semibold md:text-2xl  text-white/80"
/>
  <TeamOverview/>
    <OurTeam/>
    <OurteamMission/>


  </div>
  )
}

export default Aboutus