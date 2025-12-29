
import  HeroSectionBanner  from '@/components/global/HeroSectionBanner'
import Contactfrom   from '@/components/contact/Contactfrom';


const Contact = () => {
  return (
          <div className="flex  flex-col  w-full ">
            <HeroSectionBanner
            title="Contact"
            subtitle="Fill out the form below, and we’ll get back to you as soon as possible."
             height=" h-[350px] sm:h-[320px] md:h-[380px]"
               bannerSvgClass = 'w-[180px]   xl:w-[250px]'   
            subtitleClass=" text-base  md:text-lg lg:text-xl  text-white/70"
            />
       
            
             <Contactfrom/>


  </div>
  )
}

export default Contact