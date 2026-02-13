'use client';

import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const TableShimmer = ({ rows = 5 }) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="rounded-lg overflow-x-auto border border-transparent sm:border-black/20 bg-transparent sm:bg-white">
        <Table className="table-auto w-full text-left text-sm">
          {/* Header */}
          <Thead className="bg-light-cyan/50">
            <Tr>
              {['No', 'Image', 'Description', 'Date', 'Donated'].map((_, i) => (
                <Th key={i} className="px-5 py-4">
                  <div className="h-4 w-16 bg-gray-200 rounded shimmer-box" />
                </Th>
              ))}
            </Tr>
          </Thead>

          {/* Body */}
          <Tbody>
            {Array.from({ length: rows }).map((_, index) => (
              <Tr
                key={index}
                className={`${index === rows - 1 ? '' : 'border-b border-gray-300'}`}
              >
                {/* No */}
                <Td className="px-5 py-4">
                  <div className="h-3 w-6 bg-gray-200 rounded shimmer-box" />
                </Td>

                {/* Image */}
                <Td className="px-5 py-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-md shimmer-box" />
                </Td>

                {/* Description */}
                <Td className="px-5 py-4">
                  <div className="h-3 w-3/4 bg-gray-200 rounded shimmer-box" />
                </Td>

                {/* Date */}
                <Td className="px-5 py-4">
                  <div className="h-3 w-24 bg-gray-200 rounded shimmer-box" />
                </Td>

                {/* Donated */}
                <Td className="px-5 py-4">
                  <div className="h-3 w-16 bg-gray-200 rounded shimmer-box" />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>

        {/* Pagination shimmer */}
        <div className="flex justify-between items-center px-3 py-3">
          <div className="h-8 w-40 bg-gray-200 rounded shimmer-box" />
          <div className="h-8 w-24 bg-gray-200 rounded shimmer-box" />
        </div>
      </div>
    </div>
  );
};

export default TableShimmer;
