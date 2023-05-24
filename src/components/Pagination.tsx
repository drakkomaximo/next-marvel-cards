"use client";

import { FC } from "react";
import { nextPage, previusPage } from "@/redux/features/paginationSlice";
import { useAppDispatch } from "@/redux/hooks";

interface PaginationProps {
  pagination: number;
}

export const Pagination: FC<PaginationProps> = ({ pagination }) => {
  const dispatch = useAppDispatch();
  return (
    <nav className="flex justify-center">
      <ul className="inline-flex -space-x-px">
        <li>
          <p
            onClick={() => dispatch(previusPage())}
            className="px-3 py-2 ml-0 leading-tight text-yellow-500 bg-red-700 border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
          >
            Previous
          </p>
        </li>
        <li>
          <p className="px-3 py-2 leading-tight text-yellow-500 bg-red-700 border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 ">
            {pagination - 4}
          </p>
        </li>
        <li>
          <p className="px-3 py-2 leading-tight text-yellow-500 bg-red-700 border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 ">
            -
          </p>
        </li>
        <li>
          <p className="px-3 py-2 leading-tight text-yellow-500 bg-red-700 border border-gray-300  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 ">
            {pagination}
          </p>
        </li>
        <li>
          <p
            onClick={() => dispatch(nextPage())}
            className="px-3 py-2 leading-tight text-yellow-500 bg-red-700 border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
          >
            Next
          </p>
        </li>
      </ul>
    </nav>
  );
};
