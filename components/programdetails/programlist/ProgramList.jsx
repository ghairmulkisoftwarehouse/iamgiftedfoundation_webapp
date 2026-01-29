
import ArrowLeftSvg  from '@/assets/svg/ArrowleftSvg';
import {programlist} from '@/constants/DonateConstants'
import Link from 'next/link';


const ProgramList = () => {
  return (
    <div className=' bg-white  border border-[#0000002E] rounded-[22px] flex flex-col gap-3.5  h-fit pb-6'>
    <div className=' h-[70px] bg-black rounded-[22px] flex items-center   px-4'>
    <p className=' text-thistle   font-bold  text-xl '>Programs List</p>



    </div>

<div className="flex flex-col gap-2 w-full px-3.5">
  {programlist.map((program, index) => (
    <div
      key={index}
       onClick={()=>router.push('/programs/1')}
      className="group border border-[#0000002E] px-3 py-3.5 flex justify-between items-center
                 text-[15px] rounded-[15px] cursor-pointer
                 transition-all duration-300
                 hover:bg-black/5 "
    >
      <p className="transition-colors duration-300">
        {program}
      </p>

    <ArrowLeftSvg
  className="w-[20px] h-[20px]
             
             transition-all duration-300
             group-hover:translate-x-1"
/>
    </div>
  ))}

  
</div>

<div className=" w-full px-3.5">
<Link href={'/donate'}>


<div className="btn-animated bg-[#B6E2E2] group cursor-pointer relative overflow-hidden w-full rounded-full flex justify-center items-center h-[50px] gap-1.5 ">
          <span className="btn-animated-hover bg-[#9dd6d5] group-hover:w-full group-hover:h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></span>

          <div className="btn-animated-text text-black group-hover:text-gray-900 text-sm sm:text-[17px] font-semibold flex flex-row items-center gap-3">
Donate Now
            <ArrowLeftSvg />
          </div>
        </div>
        </Link>
        </div>

  

    </div>
  )
}

export default ProgramList