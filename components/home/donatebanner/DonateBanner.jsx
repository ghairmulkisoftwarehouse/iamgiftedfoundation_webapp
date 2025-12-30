import charityimg from '@/assets/images/charitynnad1.png'
import {  bison } from '@/components/fonts/fonts';
import ArrowUpSvg  from '@/assets/svg/ArrowUpSvg';
import Image from 'next/image'
import Link from 'next/link';

const DonateBanner = () => {
  return (
    <div className="px-5 xl:px-12    mt-16  ">
    <div className='lg:px-7 pt-6'>
        <div className=" h-[400px] md:h-[453px]   bg-light-cyan  rounded-[25px] relative   flex items-center justify-center   w-full overflow-hidden   ">
    <div className="relative z-10 flex flex-col items-center  gap-12 text-center  ">
    <h2 className={`text-black text-4xl  sm:text-[46px] lg:text-[55px]  ${bison.className}`}>
      Helping today helping tomorrow Charity
    </h2>
    <div className=' w-full px-6  md:px-0   md:w-4/5  lg:w-8/12'>
        <p className='  text-sm sm:text-base md:text-lg  font-thin text-[#030F0CCC]' >
        Our mission is to provide critical support to those in need today, while also laying the groundwork for sustainable, long-term improvements.
    </p>




    </div>


<div className="flex gap-0.5 w-full justify-center">

  <div className="flex flex-row gap-0 group cursor-pointer">

    {/* Donate Button */}
    <Link href="/donate">
      <button className="btn-donate group-hover:bg-lavender cursor-pointer">
        <span className="btn-donate-hover group-hover:w-56 group-hover:h-56"></span>
        <span className="btn-donate-text group-hover:text-black">
          Donate Now
        </span>
      </button>
    </Link>

    {/* Icon Button */}
    <Link href="/donate">
      <button className="btn-icon group-hover:bg-lavender cursor-pointer">
        <span className="btn-icon-hover group-hover:translate-y-0"></span>
        <ArrowUpSvg className="text-white group-hover:text-black z-10" />
      </button>
    </Link>

  </div>

</div>


   
  </div>
 
 <Image
  src={charityimg}
  width={1296}
  height={367}
 className='w-full object-cover absolute bottom-[-10px] md:bottom-[-40px] z-5'
 />
    </div>
    </div>


    </div>
  )
}

export default DonateBanner