

'use client';

import { useState } from 'react';
import { bison } from '@/components/fonts/fonts';
import Link from 'next/link';
import { useQuery } from 'react-query';
import Axios from '@/config/api';
import devLog from '@/utils/logsHelper';
import PillarGridShimmer from '@/components/global/effect/PillarGridShimmer';
import DisplayError from '@/components/global/DisplayError';
import ItemNotFound from '@/components/global/ItemNotFound';
import { useDispatch, useSelector } from 'react-redux';
import { setPillarStats } from '@/redux/reducers/pillarSlice';
import SupportSvg   from '@/assets/svg/SupportSvg';


const PillarsSection = () => {
  const dispatch = useDispatch();
  const { pillar } = useSelector((state) => state.pillar);


  const [currentPage] = useState(1);
  const [limit] = useState(4);

  const queryKey = ['pillars', currentPage, limit];

const { isLoading, isError, error } = useQuery(
  queryKey,
  async () => {
    const url = `/piller?pageSize=${limit}&page=${currentPage}`;
         return Axios.get(url);
  },


    {
        refetchOnWindowFocus: false,
        onSuccess: (res) => {
          // Destructure safely
          const {
            data: { docs, pages, docsCount, page },
          } = res.data;
          dispatch(setPillarStats({ docs, pages, docsCount, page }));
        },
      }
);


  return (
    <div className="pt-20 w-full bg-[#FBFFFF] pb-12">
      <div className="flex flex-col w-full gap-10 px-5 md:px-3.5 md:container mx-auto">
        <div className="flex flex-col gap-0.5">
          <h2
            className={`text-black text-4xl sm:text-[46px] lg:text-[55px] ${bison.className}`}
          >
            Our Four Pillars of Impact
          </h2>

          <div className="w-full md:w-4/5 lg:w-8/12">
            <p className="text-sm sm:text-base md:text-lg font-thin text-[#030F0CCC]/80">
              IAMGIFTED Foundation programs are built around four key pillars
              designed to support the whole child and the environments that shape
              their growth.
            </p>
          </div>
        </div>

        {isLoading ? (
          <PillarGridShimmer />
        ) : isError ? (
          <DisplayError message={error?.message || 'Something went wrong'} />
        ) : pillar?.docs?.length > 0 ? (
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3.5 w-full cursor-pointer">
            {pillar?.docs.map((item, index) => {

              return (
                <div
                  key={item?._id}
                  className="h-[250px] sm:h-[300px] border border-black/25 rounded-[24px] flex flex-col justify-between px-5 py-5 bg-transparent hover:bg-white hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex flex-col gap-1 pr-3 xl:pr-8">
                    <h2 className="font-semibold text-lg md:text-xl text-black group-hover:text-gray-800">
                      {item?.title}
                    </h2>
                    <p className="text-[#030F0CCC]/80 text-sm md:text-[15px] group-hover:text-gray-800">
                      {item?.description}
                    </p>
                  </div>

                
                    <div className="flex justify-end w-full">
                      <div className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] bg-[#B6E2E2] rounded-full flex justify-center items-center group-hover:bg-[#9BDADA] transition-colors duration-300">
                        <SupportSvg className="w-[40px] h-[40px]" />
                      </div>
                    </div>
            
                </div>
              );
            })}
          </div>
        ) : (
          <ItemNotFound message="No pillars found." />
        )}

        <div className="flex justify-center items-center">
          <Link href="/pillars">
            <button className="btn-seeMore border w-fit px-4">
              Learn More About Our Pillars
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PillarsSection;
