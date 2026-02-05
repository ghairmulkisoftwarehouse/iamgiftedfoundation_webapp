
import  HeroSectionBanner   from '@/components/global/HeroSectionBanner';

const AppBadge = () => {
  return (
  <div className="flex  flex-col  w-full ">
<HeroSectionBanner
  title="App Badge"
  subtitle="Showcase your verified impact with an official App Badge—build trust, increase visibility, and let your contribution speak for itself."
  height="h-[250px]"
  bannerSvgClass="w-[160px] md:w-[170px] lg:w-[190px] xl:w-[245px]"
  subtitleClass="text-sm sm:text-base md:text-[17px] text-white/70"
/>



  </div>
  )
}

export default AppBadge;