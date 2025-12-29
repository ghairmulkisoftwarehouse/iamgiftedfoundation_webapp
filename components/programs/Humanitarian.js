import { bison } from '@/components/fonts/fonts';
import { teamServices } from '@/constants/ProgramConstants';

const Humanitarian = () => {
  return (
    <div className="px-5 xl:px-12 mt-16">
      <div className="flex flex-col w-full items-center gap-10">
        <h2
          className={`title-heading md:leading-tight text-center w-full md:w-11/12 ${bison.className}`}
        >
          Providing Humanitarian services to all people is What we do
        </h2>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full lg:px-10 ">
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
        <div className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center">
          <Icon />
        </div>

        <h2 className="text-xl sm:text-2xl font-medium text-center">
          {service.title}
        </h2>

        <p className="px-8 text-center text-base sm:text-lg text-[#030F0CCC]">
          {service.paragraph}
        </p>
      </div>
    );
  })}
    </div>


        <button className="btn-seeMore border border-black/20">
          See More
        </button>
      </div>
    </div>
  );
};

export default Humanitarian;
