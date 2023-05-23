import { Image } from "@/interfaces" 
import ImageNotFound from "@/assets/images/imageNotFound.png";

export const createUrlImage = ({thumbnail}: {thumbnail: Image}) => (
    `${thumbnail.path}.${thumbnail.extension}` || ImageNotFound
)