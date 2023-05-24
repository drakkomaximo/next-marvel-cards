"use client";

import { Character } from "@/interfaces";
import { getCharacter } from "@/redux/features/characterSlice";
import { FC } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { ReactImage } from "./ReactImage";

export const CharacterCard: FC<Character> = (props) => {
  const { name, thumbnail, comics, series } = props;
  const dispatch = useAppDispatch();
  return (
    <div
      className="bg-red-700 w-60 h-full m-3 pt-3 pb-1 rounded-3xl border-2 border-orange-700 cursor-pointer"
      onClick={() => dispatch(getCharacter({ ...props }))}
    >
      <p className="text-center font-extrabold text-xs text-yellow-500">{name}</p>
      <div className="flex w-60 h-52 mt-2 justify-center">
        <ReactImage thumbnail={thumbnail} name={name} />
      </div>
      <div className="flex flex-col">
        <div className="border-2 border-red-700 ml-3 mr-3 mt-3 text-center">
          <span className="font-extrabold text-yellow-500">Comics: </span> <span className="text-yellow-500">{comics.available}</span>
        </div>
        <div className="border-2 border-red-700 m-3 text-center">
          <span className="font-extrabold text-yellow-500">Series: </span> <span className="text-yellow-500">{series.available}</span>
        </div>
      </div>
    </div>
  );
};
