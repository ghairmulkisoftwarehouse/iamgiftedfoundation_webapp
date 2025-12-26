import { bison } from '@/components/fonts/fonts';
import { teamMembers } from '@/constants/AboutusConstants';
import Image from 'next/image';


const OurTeam = () => {
  return (
    <div className="px-5 xl:px-12   mt-16">
      <div className="flex flex-col w-full items-center  gap-10">
        <h2 className={`title-heading md:leading-tight ${bison.className}`}>
          Our team
        </h2>

        {/* our team grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="border border-black/20  cursor-pointer p-3 rounded-[16px] flex flex-col items-center gap-2.5 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-full h-[274px] overflow-hidden  cursor-pointer rounded-[16px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={274}
                  height={274}
                  className="w-full h-full object-cover rounded-[16px] hover:scale-105 transition-transform duration-300"
                  priority={member.id === 1} 
                />
              </div>

              <div className="flex flex-col items-start gap-0.5 w-full pl-2.5">
                <p className="font-semibold text-[20px] md:text-[22px] lg:text-[24px] leading-tight">
                  {member.name}
                </p>
                <p className="font-normal text-black/25 text-sm md:text-base">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button className='btn-seeMore  border border-black/20'>
           See More
        </button>
      </div>
    </div>
  );
};

export default OurTeam;