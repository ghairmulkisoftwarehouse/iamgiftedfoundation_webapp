import Awarnesimg from '@/assets/images/Awarness.png'
import {  bison } from '@/components/fonts/fonts';

const Awareness = () => {
  return (
    <div className="px-5 xl:px-12 py-16">

      <div className="flex flex-col  sm:flex-row items-center gap-4  md:gap-9 w-full">

        {/* Left side */}
        <div className="  w-full    sm:w-[50%] lg:w-[60%] flex flex-col  gap-6">
         <h2 className={`title-heading   ${bison.className}`}>
              RAISING YOUTH MENTAL HEALTH AWARENESS TOGETHER
            </h2>
            <div className=' w-11/12'>
                 <p className='text-black/70  text-sm sm:text-base  font-thin' >
                Empowering youth to speak openly about mental health, break the stigma, and understand that caring for the mind is just as vital as caring for the body. Together, we’re building a culture of empathy, awareness, and support.
            </p>

            </div>
                <button className="btn-secondary w-fit ">Donate Now</button>
       
        </div>

        {/* Right side */}
    <div className=" w-full    sm:w-[50%] lg:w-[40%]     flex justify-start sm:justify-end">
  <div
    className=" w-full lg:w-[90%] h-[400px] rounded-[25px] p-3 lg:p-6  flex flex-col justify-end"
    style={{
      backgroundImage: `url(${Awarnesimg.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >

<div className=' bg-white  h-auto rounded-[12px]  w-full mt-auto p-4 flex flex-col gap-2.5'> 
<div className='flex flex-row gap-1.5 justify-between w-full'>
<div className='text-sm md:text-base font-medium'>220 Campaign</div>

<div className='flex flex-row items-center gap-1 md:gap-2.5'>
<div className='text-xs md:text-sm text-black/70 font-normal'>running listed</div>
<div className=' bg-light-cyan px-2 py-1 text-[10px] md:text-sm rounded-full  font-semibold'>
    96%
</div>
</div>





</div>

<div className=' flex flex-col  '>
<div className=" w-full bg-[#B2BCC599] rounded-full h-2 ">
   <div
      className="bg-light-cyan h-2 rounded-full"
      style={{ width: `60%` }}
    ></div>
</div>
<div className='flex justify-between w-full'>
<p className=' text-[10px] xs:text-xs md:text-sm text-black/70 font-normal'>0%</p>
<p className=' text-[10px] xs:text-xs md:text-sm text-black/70 font-normal'>100%</p>


</div>

</div>
<div className=' border-b border-black/10 w-full'></div>

<div className='flex flex-col gap-0'>
   <h2 className='  font-medium text-xs md:text-sm'>Target</h2>
   
<div className='flex justify-between w-full'>
<p className=' text-[10px] xs:text-xs md:text-sm text-black/70 font-normal'>$457,328.873</p>
<p className=' text-[10px] xs:text-xs md:text-sm text-black/70 font-normal'>$457,328.873</p>


</div>
</div>



 </div>

  </div>
</div>

      </div>

    </div>
  )
}

export default Awareness
