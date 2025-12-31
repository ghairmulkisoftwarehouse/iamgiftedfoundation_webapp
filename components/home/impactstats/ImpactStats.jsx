import React from 'react'
import ButterfullySvg from '@/assets/svg/ButterfullySvg';
import  ButterfullyrightSvg   from '@/assets/svg/ButterfullyrightSvg'


const ImpactStats = () => {
  return (
    <div className='  w-full  mt-16'>

      <div className=' gap-2 w-full bg-black   relative  h-[500px]  sm:h-[300px] overflow-hidden    '>
        <div className="absolute  top-[15%]  left-[-70px] ">
          <ButterfullySvg  className=' w-[200px] h-[200px] z-4 '/>
        </div>
         <div className="absolute  top-[15%]    right-[-20px]   z-4 ">
          <ButterfullyrightSvg  className=' w-[200px] h-[200px] '/>
        </div>

           <div className=' block  lg:hidden  h-full   flex items-center    '>
             <div className="grid grid-cols-1 sm:grid-cols-2  gap-7 container mx-auto  px-3.5">
             <div className=' flex flex-col gap-1.5  justify-center  h-full items-center'>
               <h2 className=' text-4xl  xs:text-[46px] lg:text-[55px]  font-semibold text-thistle'>
                98
               </h2>
               <p className=' font-normal text-base  md:text-lg  lg:text-[22px]  px-4  sm:px-0 text-center md:leading-8  text-white'>Youth Scholarships Awarded</p>
            </div>

             <div className=' flex flex-col gap-1.5  justify-center h-full items-center'>
               <h2 className=' text-4xl  xs:text-[46px] lg:text-[55px]   font-semibold text-thistle'>
              2,219
               </h2>
               <p className=' font-normal text-base  md:text-lg  lg:text-[22px]  text-center md:leading-8    px-4  sm:px-0 text-white'>Children and Youth Attended Camp</p>
            </div>



             <div className=' flex flex-col gap-1.5  justify-center h-full items-center'>
               <h2 className=' text-4xl  xs:text-[46px] lg:text-[55px]  font-semibold text-thistle'>
               1,276
               </h2>
               <p className=' font-normal  text-base  md:text-lg  lg:text-[22px]  text-center md:leading-8    px-4  sm:px-0  text-white'>Families Supported in Rush2Give</p>
            </div>


             <div className=' flex flex-col gap-1.5  justify-center h-full items-center'>
               <h2 className=' text-4xl  xs:text-[46px] lg:text-[55px]   font-semibold text-thistle'>
               534
               </h2>
               <p className=' font-normal text-base  md:text-lg  lg:text-[22px]  text-center md:leading-8   px-4  sm:px-0    text-white'>Youth Provided School Supplies</p>
            </div>
           

              </div>
           </div>

            <div className=' hidden  lg:block  flex items-center  h-full'>
            <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-3.5 w-full h-full relative z-10  container mx-auto  px-3.5">
            <div className=' flex flex-col gap-1.5  justify-center  h-full items-center'>
               <h2 className=' text-4xl  xs:text-[46px] lg:text-[55px]  font-semibold text-thistle'>
                98
               </h2>
               <p className=' font-normal text-base  md:text-lg  lg:text-[22px]  px-4  sm:px-0 text-center md:leading-8  text-white'>Youth Scholarships Awarded</p>
            </div>


 <div className=' flex flex-col gap-1.5  justify-center h-full items-center'>
               <h2 className=' text-4xl  xs:text-[46px] lg:text-[55px]   font-semibold text-thistle'>
              2,219
               </h2>
               <p className=' font-normal text-base  md:text-lg  lg:text-[22px]  text-center md:leading-8    px-4  sm:px-0 text-white'>Children and Youth Attended Camp</p>
            </div>



             <div className=' flex flex-col gap-1.5  justify-center h-full items-center'>
               <h2 className=' text-4xl  xs:text-[46px] lg:text-[55px]  font-semibold text-thistle'>
               1,276
               </h2>
               <p className=' font-normal  text-base  md:text-lg  lg:text-[22px]  text-center md:leading-8    px-4  sm:px-0  text-white'>Families Supported in Rush2Give</p>
            </div>


             <div className=' flex flex-col gap-1.5  justify-center h-full items-center'>
               <h2 className=' text-4xl  xs:text-[46px] lg:text-[55px]   font-semibold text-thistle'>
               534
               </h2>
               <p className=' font-normal text-base  md:text-lg  lg:text-[22px]  text-center md:leading-8   px-4  sm:px-0    text-white'>Youth Provided School Supplies</p>
            </div>

            </div>
            </div>
 

      </div>

    </div>
    

  )
}

export default ImpactStats