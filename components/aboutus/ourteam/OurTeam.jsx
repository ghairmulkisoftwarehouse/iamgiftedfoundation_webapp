'use client'
import { useEffect,useState,useRef} from 'react';
import { bison } from '@/components/fonts/fonts';
import { teamMembers } from '@/constants/AboutusConstants';
import Image from 'next/image';
import TeamShimmer   from '@/components/global/effect/TeamShimmer'
import DisplayError from '@/components/global/DisplayError';
import ItemNotFound from '@/components/global/ItemNotFound';
import { baseURL } from '@/config/api';
import { useSelector } from 'react-redux';
import fallbackimg  from '@/assets/images/img2.jpg'

const OurTeam = ({
  isFetching,
  setCurrentPage,
  currentPage,
  isLoading,
  isError,
  error,
}) => {

  const { docs,pages } = useSelector(state => state.team);



  return (
    <div
     
     className="container mx-auto  px-3.5   mt-16 relative">


  
   
      <div className="flex flex-col w-full items-center  gap-10">
        <h2 className={`text-black text-4xl  sm:text-[46px] lg:text-[55px] ${bison.className}`}>
          Our team
        </h2>

        {/* our team grid */}
        {isLoading ? (
          <TeamShimmer />
        ) : isError ? (
          <DisplayError message={error?.message || 'Something went wrong'} />
        ) :docs?.length > 0 ? (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5    ">
          {docs.map((item) => (
            <div 
              key={item?._id} 
              className="border border-black/20  cursor-pointer p-3 rounded-[16px] flex flex-col items-center gap-2.5 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-full h-[274px] overflow-hidden  cursor-pointer rounded-[16px]">
                <Image
        src={item?.image?.relativeAddress ? `${baseURL}/${item?.image?.relativeAddress}` : fallbackimg}
                  alt={item?.title}
                  width={274}
                  height={274}
                  className="w-full h-full object-cover rounded-[16px] hover:scale-105 transition-transform duration-300"
                  // priority={member.id === 1} 
                />
              </div>

              <div className="flex flex-col items-start gap-0.5 w-full pl-2.5">
                <p className="font-semibold text-[17px] sm:text-lg md:text-[20px] leading-tight capitalize">
                  {item?.title}
                </p>
                <p className="font-normal text-black/25 text-[13px] sm:text-sm md:text-[15px] capitalize">
                  {item?.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
             ) : (
          <ItemNotFound message="No Team found." />
        )}
        {currentPage < pages && (
            <div className="">
              <button
                disabled={isFetching}
                onClick={() => setCurrentPage(prev => prev + 1)}
                className={`btn-seeMore border
                  ${isFetching ? 'opacity-50 cursor-not-allowed' : 'hover:bg-black hover:text-white'}`}
              >
                {isFetching ? 'Loading...' : 'See More'}
              </button>
            </div>
          )}
      </div>
    </div>
  );
};

export default OurTeam;