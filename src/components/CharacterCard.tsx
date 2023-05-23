import { Character } from "@/interfaces";
import { createUrlImage } from "@/utils/helpers";
/* import Image from "next/image"; */
import { FC } from "react";

export const CharacterCard: FC<Character> = ({
  name,
  thumbnail,
  comics,
  series,
}) => {
  return (
    <div className="w-60 h-full m-3 pt-3 pb-3 rounded border-2 border-orange-700">
      <p className='text-center font-extrabold'>{name}</p>
      {/*       <Image
        src={createUrlImage({ thumbnail })}
        width={500}
        height={500}
        alt={name || "image"}
      /> */}
      <div className="flex w-60 h-52 justify-center">
        <img
          src={createUrlImage({ thumbnail })}
          width={180}
          height={150}
          alt={name || "image"}
        />
      </div>
      <div className="flex flex-col">
        <div className="border-2 border-red-700 ml-3 mr-3 mt-3 text-center">
          <span className="font-extrabold">Comics: </span> {comics.available}
        </div>
        <div className="border-2 border-red-700 m-3 text-center">
          <span className="font-extrabold">Series: </span> {series.available}
        </div>
      </div>
    </div>
  );
};
