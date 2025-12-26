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
        height="h-[320px] md:h-[380px]"
        subtitleClass="font-semibold md:text-2xl lg:text-[30px]"
/>
  <TeamOverview/>
    <OurTeam/>
    <OurteamMission/>


  </div>
  )
}

export default Aboutus