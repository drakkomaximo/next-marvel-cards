import { Image as Thumbnail } from "@/interfaces";
import { createUrlImage } from "@/utils/helpers";
import { FC } from "react";

interface ReactImageProps {
  thumbnail?: Thumbnail;
  name?: string;
  imgWidth?: number;
  imgHeight?: number;
}

export const ReactImage: FC<ReactImageProps> = ({
  thumbnail,
  name,
  imgWidth = 180,
  imgHeight = 150,
}) => {
  return (
    <img
      src={createUrlImage({ thumbnail })}
      width={imgWidth}
      height={imgHeight}
      alt={name || "image"}
    />
  );
};
