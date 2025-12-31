'use client'
import { usePannelContext } from '@/context/PannelContext';
import { RxCross1 } from 'react-icons/rx';
import Link from 'next/link';
import LogoSvg from '@/assets/svg/LogoSvg';
import { navLinks } from "@/constants/menuItem";
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const { showPannel, setShowPannel } = usePannelContext();
     const pathname=usePathname();

  const handleCloseSidebar = () => {
    setShowPannel(false);
  };

  return (
    <>
      {showPannel && (
        <div
          className="fixed top-0 left-0 bg-gray-900/30 w-full h-screen bg-opacity-30 z-50"
          onClick={handleCloseSidebar}
        ></div>
      )}

      <div
        className={`sidebar ${
          showPannel ? 'right-0' : 'right-[-200%]'
        } fixed top-0 w-[300px] lg:w-0 bg-white min-h-screen overflow-auto pt-4 z-[60] shadow-lg pb-60 transition-all duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center w-full px-4">
          <Link href="/">
            <LogoSvg className="w-[100px] h-[42px] xl:w-auto xl:h-auto" />
          </Link>

          <div
            className="text-xl cursor-pointer text-primary flex justify-end w-full"
            onClick={handleCloseSidebar}
          >
            <RxCross1 />
          </div>
        </div>

        <div className="px-4 w-full pt-4">
          <ul className="flex flex-col space-y-1 font-medium text-base">
            {navLinks.map((link, index) => {
              
                       const isActive =
    pathname === link.path ||
    (link.path !== '/' && pathname.startsWith(link.path + '/'));
              return (
                <li key={index} onClick={handleCloseSidebar}>
                  {link.path ? (
                    <Link href={link.path} 
                        className={`
                cursor-pointer block py-2 px-2 lg:px-2.5 rounded-md transition-all duration-200
                ${isActive ? 'bg-black/10 font-semibold' : 'hover:bg-black/15'}
              `}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <span className="cursor-pointer hover:bg-black/15 py-2 px-2 lg:px-2.5 rounded-md transition-all duration-200 block">
                      {link.name}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>

       
        </div>


        <div className="flex flex-col gap-2.5 px-2.5 pt-3">
            <button className="btn-primary">Account</button>
            <button className="btn-secondary">
                          <Link href="/donate"
                          onClick={handleCloseSidebar}>
Donate Now
</Link>
</button>
          </div>
      </div>
    </>
  );
}
