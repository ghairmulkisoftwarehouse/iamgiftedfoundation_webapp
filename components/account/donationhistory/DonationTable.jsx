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
import formatLabel from '@/utils/formatLabel';
import Status from '@/components/global/Status';
import moment from 'moment/moment';




const DonationTable = ({ isLoading = false, isError = false, error = null,setCurrentPage,
currentPage, }) => {
 const {docs , pages ,docsCount, } = useSelector(state => state.donate);
//  console.log(' this is a  docs',docs)
 

  

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
        <Th className="px-5 py-4 font-semibold">Amount</Th>
        <Th className="px-5 py-4 font-semibold">Date & Time</Th>
        <Th className="px-5 py-4 font-semibold">Donation Type</Th>
        <Th className="px-5 py-4 font-semibold">Target Type</Th>
        <Th className="px-5 py-4 font-semibold">Status</Th>
      </Tr>
    </Thead>
    <Tbody className="custom-tablebody">
      {docs.map((item, index) => {
        // Format the date
        const formattedDate = item?.createdAt
          ? moment(item.createdAt).format("MMM DD, YYYY hh:mm A")
          : "N/A";

        return (
          <Tr
            key={item?._id}
            className={`text-[13px] ${
              index === docs.length - 1 ? "" : "border-b border-gray-300"
            }`}
          >
            <Td className="px-5 py-4">{item?.amount ?? 0}</Td>
            <Td className="px-5 py-4">{formattedDate}</Td>
            <Td className="px-5 py-4">{formatLabel(item?.donationType)}</Td>
            <Td className="px-5 py-4">{formatLabel(item?.targetType)}</Td>
            <Td className="px-5 py-4 font-semibold">
              <Status status={item?.status} />
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

export default DonationTable;
