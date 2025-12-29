import Image from "next/image"
import Teamoverview from '@/assets/images/teamoverview.png'


const TeamOverview = () => {


  return (
       <div className="px-5 xl:px-12    mt-16  ">
       <div className=" flex flex-col gap-2 w-full lg:px-10 ">

       <Image 
       src={Teamoverview}
       alt="img"
       width={1298}
       height={604}
       />
       <p className=" text-lg sm:text-[20px] md:text-[22px] lg:text-[24px] font-medium">The IAMGIFTED team is comprised of dedicated educators, mentors, and advocates committed to children and families through education, resources, and community-building programs. </p>


       </div>

       </div>

  )
}

export default TeamOverview