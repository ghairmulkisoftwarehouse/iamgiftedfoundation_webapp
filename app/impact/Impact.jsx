
import  HeroSectionBanner  from '@/components/global/HeroSectionBanner'
import Partner   from  '@/components/impact/partner/Partner';
import Recongniztion   from '@/components/impact/recongniztion/Recongniztion';
import ImpactSummary   from  '@/components/impact/impactSummary/ImpactSummary';
import HighlightCards   from '@/components/impact/highlightCards/HighlightCards';
import  GeographicReach   from '@/components/impact/geographicReach/GeographicReach';
import ImpactPillars   from '@/components/impact/impactPillars/ImpactPillars';
const Impact = () => {
  return (
        <div className="flex  flex-col  w-full ">
            <HeroSectionBanner
            title="IMPACT"
             height="h-[250px] "
                   bannerSvgClass = '  w-[110px] lg:w-[120px] xl:w-[160px]     '   
          subtitleClass=" text-sm sm:text-base  md:text-[17px]   text-white/70"
            />
             <ImpactSummary/>
               <HighlightCards/>
               <ImpactPillars/>
                              <GeographicReach/>
             <Recongniztion/>
             <div  className='  pb-10'>
                     <Partner/>
             </div>
      

          
           
           
       

            



  </div>
  )
}

export default Impact;