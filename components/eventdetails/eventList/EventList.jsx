import ArrowLeftSvg from '@/assets/svg/ArrowleftSvg';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const EventList = () => {
  const router = useRouter();

  // Static program data
  const allProgram = [
    { _id: '1', title: 'Fundraising Event' },
    { _id: '2', title: 'Health Awareness Program' },
    { _id: '3', title: 'Education Support Program' },
    { _id: '4', title: 'Community Development' },
  ];

  const programId = null; // No active program for now

  return (
    <div className="bg-white border border-[#0000002E] rounded-[22px] flex flex-col gap-3.5 h-fit pb-6">
      <div className="h-[70px] bg-black rounded-[22px] flex items-center px-4">
        <p className="text-thistle font-bold text-xl">Events List</p>
      </div>

      <div className="flex flex-col gap-2 w-full px-3.5">
        {allProgram.map((program) => {
          const isActive = programId === program._id;
          return (
            <div
              key={program._id}
              onClick={() => router.push(`/programs/${program._id}`)}
              className={`group border border-[#0000002E] px-3 py-3.5 flex justify-between items-center
                text-[15px] rounded-[15px] cursor-pointer
                transition-all duration-300
                hover:bg-black/5
                ${isActive ? 'bg-black/10 font-semibold' : 'border-[#0000002E] hover:bg-black/5'}`}
            >
              <p className="transition-colors duration-300 capitalize">{program.title}</p>

              <ArrowLeftSvg
                className="w-[20px] h-[20px] transition-all duration-300 group-hover:translate-x-1"
              />
            </div>
          );
        })}
      </div>

      {allProgram.length > 0 && (
        <div className="w-full px-3.5 mt-3">
          <Link href="/donate">
            <div className="btn-animated bg-[#B6E2E2] group cursor-pointer relative overflow-hidden w-full rounded-full flex justify-center items-center h-[50px] gap-1.5">
              <span className="btn-animated-hover bg-[#9dd6d5] group-hover:w-full group-hover:h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></span>

              <div className="btn-animated-text text-black group-hover:text-gray-900 text-sm sm:text-[17px] font-semibold flex flex-row items-center gap-3">
                Donate Now
                <ArrowLeftSvg />
              </div>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default EventList;
