import { Image } from "@/interfaces";

export const createUrlImage = ({ thumbnail }: { thumbnail?: Image }) => {
  if (thumbnail && thumbnail.path && thumbnail.extension)
    return `${thumbnail.path}.${thumbnail.extension}`;
  return "";
};
