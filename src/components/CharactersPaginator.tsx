"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useGetHeroesQuery } from "@/redux/services/marvelApi";
import React from "react";
import { CharacterCard } from "./CharacterCard";
import { increment, decrement } from "@/redux/features/paginationSlice";
import { Loader } from "./Loader";

const CharactersPaginator = () => {
  const pagination = useAppSelector(
    (state) => state.paginationReducer.initialLimit
  );
  const { data, error, isLoading, isFetching } = useGetHeroesQuery({
    limit: pagination,
  });
  const dispatch = useAppDispatch();

  if (isLoading || isFetching) return (<Loader />);
  if (error) return <p>Some error</p>;

  return (
    <div>
      {data?.data?.results && (
        <div className="flex flex-wrap w-full">
          {data.data.results
            .slice(pagination - 5, pagination)
            .map((character) => (
              <CharacterCard key={character.id} {...character} />
            ))}
        </div>
      )}

      <nav className="flex justify-center">
        <ul className="inline-flex -space-x-px">
          <li>
            <p
              onClick={() => dispatch(decrement())}
              className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </p>
          </li>
          <li>
            <p className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              {pagination - 4}
            </p>
          </li>
          <li>
            <p className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              -
            </p>
          </li>
          <li>
            <p className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              {pagination}
            </p>
          </li>
          <li>
            <p
              onClick={() => dispatch(increment())}
              className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CharactersPaginator;
