import { bison } from '@/components/fonts/fonts';
import { teamServices } from '@/constants/ProgramConstants';

const Humanitarian = () => {
  return (
    <div className=" mt-16    pb-5  lg:pb-20">
      <div className="flex flex-col w-full items-center gap-10 pt-0 lg:pt-2">
        <h2
          className={`text-black text-4xl  sm:text-[46px] lg:text-[55px] text-center w-full  ${bison.className}`}
        >
          Providing Humanitarian services to all <br/> people is What we do
        </h2>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-0 md:space-y-5   gap-4 w-full container mx-auto  px-3.5 ">
  {teamServices.map((service, index) => {
    const Icon = service.image;

    return (
      <div
        key={index}
        className={`
          flex flex-col items-center gap-3 
          ${service.bgColor} 
          rounded-[25px] py-6 
          transition-transform transform 
          cursor-pointer
          hover:shadow-xl
          duration-300
        `}
      >
        <div className=" w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-white rounded-full flex items-center justify-center">
          <Icon  className={'w-[40px] h-[40px] md:w-[50px] md:h-[50px]'}/>
        </div>

        <h2 className="text-xl sm:text-[22px] font-semibold text-center">
          {service.title}
        </h2>

        <p className="px-8 text-center text-base  text-[#030F0CCC]">
          {service.paragraph}
        </p>
      </div>
    );
  })}
    </div>


        <button className="btn-seeMore border ">
          See More
        </button>
      </div>
    </div>
  );
};

export default Humanitarian;
