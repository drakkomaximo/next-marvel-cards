"use client";

import { useAppSelector } from "@/redux/hooks";
import { useGetHeroesQuery } from "@/redux/services/marvelApi";
import React from "react";
import { CharacterCard } from "./CharacterCard";
import { Loader } from "./Loader";
import { Pagination } from "./Pagination";
import { CharacterInfo } from "./CharacterInfo";

const CharactersPaginator = () => {
  const pagination = useAppSelector(
    (state) => state.paginationReducer.initialLimit
  );
  const { data, error, isLoading, isFetching } = useGetHeroesQuery({
    limit: pagination,
  });

  if (isLoading || isFetching) return <Loader />;
  if (error) return <p>Some error</p>;

  return (
    <div className="bg-yellow-500 h-screen">
      <CharacterInfo />
      {data?.data?.results && (
        <div className="flex flex-wrap w-full justify-around">
          {data.data.results
            .slice(pagination - 5, pagination)
            .map((character) => (
              <CharacterCard key={character.id} {...character} />
            ))}
        </div>
      )}

      <Pagination pagination={pagination} />
    </div>
  );
};

export default CharactersPaginator;
