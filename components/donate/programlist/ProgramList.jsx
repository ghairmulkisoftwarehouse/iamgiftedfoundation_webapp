
import ArrowLeftSvg  from '@/assets/svg/ArrowleftSvg';
import {programlist} from '@/constants/DonateConstants'
import { useRouter } from 'next/navigation';


const ProgramList = () => {

 const router=useRouter();

  return (
    <div className=' bg-white  border border-[#0000002E] rounded-[22px] flex flex-col gap-3.5  h-fit pb-6'>
    <div className=' h-[70px] bg-black rounded-[22px] flex items-center   px-4'>
    <p className=' text-thistle   font-bold  text-xl '>Programmes List</p>



    </div>

<div className="flex flex-col gap-2 w-full px-3.5">
  {programlist.map((program, index) => (
    <div
     onClick={()=>router.push('/programs/1')}
      key={index}
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

    </div>
  )
}

export default ProgramList