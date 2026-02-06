
import ArrowLeftSvg  from '@/assets/svg/ArrowleftSvg';
import {programlist} from '@/constants/DonateConstants'
import { useRouter } from 'next/navigation';


const ProgramList = ({
  programs,
  selectProgram,
        setSelectProgram,
}) => {

 const router=useRouter();

  return (
    <div className=' bg-white  border border-[#0000002E] rounded-[22px] flex flex-col gap-3.5  h-fit pb-6'>
    <div className=' h-[70px] bg-black rounded-[22px] flex items-center   px-4'>
    <p className=' text-thistle   font-bold  text-xl '>Programs List</p>



    </div>

<div className="flex flex-col gap-2 w-full px-3.5">

 {programs.slice(0, 5).map((program) => {
  const isActive = program?._id === selectProgram;

  return (
    <div
      key={program?._id}
      onClick={() => setSelectProgram(program?._id)}
      className={`
        group  px-3 py-3.5 flex justify-between items-center
        text-[15px] rounded-[15px] cursor-pointer
        transition-all duration-300
        hover:bg-black/5
         capitalize
        ${isActive ? ' bg-black/10' : '  border border-[#0000002E]'}
      `}
    >
      <p className="transition-colors duration-300">{program?.title}</p>

      <ArrowLeftSvg
        className={`
          w-[20px] h-[20px] transition-all duration-300
          group-hover:translate-x-1
          ${isActive ? 'text-primary' : 'text-black'}
        `}
      />
    </div>
  );
})}

</div>

    </div>
  )
}

export default ProgramList