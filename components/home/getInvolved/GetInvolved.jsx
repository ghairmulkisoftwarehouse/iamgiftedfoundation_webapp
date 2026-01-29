import { bison } from '@/components/fonts/fonts';
import { involvedData } from '@/constants/homeConstants';


const GetInvolved = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-col w-full gap-10 px-5  md:px-3.5  md:container mx-auto">
      <div className=' flex flex-col  gap-0.5'>
        <h2 className={`text-black text-4xl sm:text-[46px] lg:text-[55px] ${bison.className}`}>
          GET INVOLVED
        </h2>
              <div className=' w-full    md:w-4/5  lg:w-8/12'>
             <p className='text-sm sm:text-base md:text-lg  font-thin text-[#030F0CCC]/80  '>
Whether you donate, volunteer, partner, or advocate, your support helps create opportunities for youth to thrive.
              </p>
           </div>
      
      </div>
       

        {/* INVOLVED cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 w-full cursor-pointer">
          {involvedData.map((item, index) => {
            const Icon = item.icon;
                const textColorClass = item.color === '#000000' ? 'text-white' : 'text-black';

            return (
              <div
                key={index}
                className="h-[350px] rounded-[25px] flex flex-col gap-3.5 items-center justify-center px-3.5 transition-transform duration-300  hover:shadow-lg"
                style={{ backgroundColor: item.color }} 
              >
                <div className="w-[100px] h-[100px] bg-white rounded-full flex justify-center items-center">
                  <Icon className="w-[70px] h-[70px] md:w-auto md:h-auto" />
                </div>
                <h2 className={`text-xl xl:text-[22px] font-semibold ${textColorClass}`}>{item.title}</h2>
                                    <p
                        className={`text-[15px] font-normal xl:text-base text-center ${
                            item.color === '#000000' ? 'text-white/80' : 'text-[#030F0CCC]/80'
                        }`}
                        >
                        {item.paragraph}
                        </p>
              </div>
            );
          })}
        </div>
     
       

      </div>
    </div>
  );
};

export default GetInvolved;
