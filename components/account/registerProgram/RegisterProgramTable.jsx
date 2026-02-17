'use client';

import { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Image from 'next/image';
import { donationRecords } from '@/constants/AccountConstants';
import sampleImg from '@/assets/images/fundrasingimg.png'; 
import TealPagination from '@/components/global/TealPagination';
import TableShimmer   from  '@/components/global/effect/TableShimmer';
import DisplayError from '@/components/global/DisplayError';
import ItemNotFound from '@/components/global/ItemNotFound';
import { useSelector } from 'react-redux';
import { baseURL } from '@/config/api';
import formatLabel from '@/utils/formatLabel';
import Status from '@/components/global/Status';
import moment from 'moment/moment';
import TrashSvg  from '@/assets/svg/TrashSvg';
import { useDispatch } from "react-redux";
import { setShowDeleteEventPopup } from "@/redux/reducers/appSlice"


const RegisterProgramTable = ({ isLoading = false, isError = false, error = null,setCurrentPage,
currentPage,setEventId }) => {

  const  dispatch=useDispatch();
 const {docs , pages ,docsCount, } = useSelector(state => state.registerEvent);
//  console.log(' this is a  docs',docs)
 const handleDeleteClick = (eventId) => {
  setEventId(eventId) 
  dispatch(setShowDeleteEventPopup(true));
};

  

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="rounded-lg overflow-x-auto border border-transparent sm:border-black/20   bg-transparent sm:bg-white">


    {isLoading ? (
  <TableShimmer />
) : isError ? (
  <DisplayError message={error || "Something went wrong"} />
) : docs && docs.length > 0 ? (
  <Table className="table-auto w-full text-left text-sm">
    <Thead className="text-left text-sm bg-light-cyan/50">
      <Tr>
    <Th className="px-5 py-4 font-semibold">Event</Th>
    <Th className="px-5 py-4 font-semibold">Title</Th>
    <Th className="px-5 py-4 font-semibold">Event Date</Th>
    <Th className="px-5 py-4 font-semibold">Registered At</Th>
    <Th className="px-5 py-4 font-semibold">Waitlist</Th>
        <Th className="px-5 py-4 font-semibold">Status</Th>
    <Th className="px-5 py-4 font-semibold">Action</Th>
      </Tr>
    </Thead>
    <Tbody className="custom-tablebody">
      {docs.map((item, index) => {
        // Format the date
 

        return (
          <Tr
            key={item?._id}
            className={`text-[13px] ${
              index === docs.length - 1 ? "" : "border-b border-gray-300"
            }`}
          >
            <Td className="px-5 py-4">
                 {item?.event?.featuredImage?.relativeAddress && (
          <Image
            src={`${baseURL}/${item?.event?.featuredImage?.relativeAddress}`}
            alt={item.event.title}
            width={50}
            height={50}
            className="rounded-md object-cover"
          />
        )}
            </Td>
            <Td className="px-5 py-4  whitespace-normal ">
            {item?.event?.title}
            </Td>
            <Td className="px-5 py-4">
            {item?.event?.eventDate
    ? moment.utc(item.event.eventDate).format('MMM DD, YYYY')
    : 'N/A'}
            </Td>
            <Td className="px-5 py-4">

                  {item?.updatedAt
    ? moment.utc(item?.updatedAt).format('MMM DD, YYYY')
    : 'N/A'}
            </Td>
            <Td className="px-5 py-4">
            
                  {item?.waitlistedAt
    ? moment.utc(item?.waitlistedAt).format('MMM DD, YYYY')
    : 'N/A'}
            
            
</Td>
      
            <Td className="px-5 py-4 font-semibold">
            <Status status={item?.status}/>
            </Td>
  <Td className="px-5 py-4 font-semibold">
  <div
      onClick={() => handleDeleteClick(item?.event?._id)}

   className="cursor-pointer inline-flex items-center">
    <TrashSvg />
  </div>
</Td>

          </Tr>
        );
      })}
    </Tbody>
  </Table>
) : (
  <ItemNotFound message="No Donations found." />
)}

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center w-full px-3 py-3 flex-wrap-none">
          <TealPagination
            totalPages={pages}
        currentPage={currentPage}
       setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterProgramTable;
