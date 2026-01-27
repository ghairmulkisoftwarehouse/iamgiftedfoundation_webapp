'use client';

import { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Image from 'next/image';
import { donationRecords } from '@/constants/AccountConstants';
import sampleImg from '@/assets/images/fundrasingimg.png'; 
import TealPagination from '@/components/global/TealPagination';

const DonationTable = () => {

  

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="rounded-lg overflow-x-auto border border-transparent sm:border-black/20   bg-transparent sm:bg-white">
        <Table className="table-auto w-full text-left text-sm">
          <Thead className="text-left text-sm bg-light-cyan/50">
            <Tr>
              <Th className="px-5 py-4 font-semibold">No</Th>
              <Th className="px-5 py-4 font-semibold">Image</Th>
              <Th className="px-5 py-4 font-semibold">Description</Th>
              <Th className="px-5 py-4 font-semibold">Date</Th>
              <Th className="px-5 py-4 font-semibold">Donated</Th>
            </Tr>
          </Thead>
          <Tbody className="custom-tablebody">
            {donationRecords.length > 0 ? (
              donationRecords.map((item, index) => (
                <Tr
                  key={item.id}
                  className={`text-[13px] ${
                    index === donationRecords.length - 1 ? '' : 'border-b border-gray-300'
                  }`}
                >
                  <Td className="px-5 py-4">{index + 1}</Td>
                  <Td className="px-5 py-4 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                      <Image
                        src={sampleImg}
                        alt={item.title}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                  </Td>
                  <Td className="px-5 py-4">{item.title}</Td>
                  <Td className="px-5 py-4">{item.date}</Td>
                  <Td className="px-5 py-4 font-semibold">{item.donated}</Td>
                </Tr>
              ))
            ) : (
              <Tr>
                <Td colSpan={5} className="text-center py-4 text-gray-500">
                  No donation records found.
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center w-full px-3 py-3 flex-wrap-none">
          <TealPagination
            totalPages={1}
            currentPage={1}
            setCurrentPage={1}
          />
        </div>
      </div>
    </div>
  );
};

export default DonationTable;
