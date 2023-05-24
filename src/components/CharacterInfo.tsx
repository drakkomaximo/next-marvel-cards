import React from "react";
import ProgressBar from "./ProgressBar";
import { useAppSelector } from "@/redux/hooks";
import { ReactImage } from "./ReactImage";
import Image from "next/image";
import MarvelLogo from "@/assets/images/marvel.jpg";

export const CharacterInfo = () => {
  const character = useAppSelector(
    (state) => state?.characterReducer.character
  );
  return (
    <div className="flex w-full h-52 bg-red-600 justify-center items-center">
      {character !== null ? (
        <div className="flex w-screen justify-between items-center">
          <div className="flex justify-center w-1/3 pt-3 pb-3 text-center text-yellow-400">
            <iframe
              width="350"
              height="180"
              src="https://www.youtube.com/embed/os2C0TdDphc"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-1/3 pt-3 pb-3 text-center">
            <ProgressBar
              goal={200}
              currentProgress={character.series.available || 0}
            />
          </div>
          <div className="flex w-1/3 pt-3 pb-3 justify-center items-center">
            <ReactImage
              thumbnail={character.thumbnail}
              name={character.name}
              imgHeight={130}
              imgWidth={150}
            />
          </div>
        </div>
      ) : (
        <div className="flex">
          <Image src={MarvelLogo} width={400} height={100} alt={"image"} />
        </div>
      )}
    </div>
  );
};
