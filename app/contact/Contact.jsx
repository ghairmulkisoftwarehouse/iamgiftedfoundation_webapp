
import  HeroSectionBanner  from '@/components/global/HeroSectionBanner'
import Contactfrom   from '@/components/contact/Contactfrom';


const Contact = () => {
  return (
          <div className="flex  flex-col  w-full ">
            <HeroSectionBanner
            title="Contact"
            subtitle="Fill out the form below, and we’ll get back to you as soon as possible."
             height=" h-[250px] "
               bannerSvgClass = '  w-[130px]  lg:w-[150px] xl:w-[190px]  '   
           subtitleClass=" text-sm sm:text-base  md:text-[17px]   text-white/70"
            />
       
            
             <Contactfrom/>


  </div>
  )
}

export default Contact