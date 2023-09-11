"use client";

import { SearchResult } from "@/app/gallery/page";
import { CloudinaryImage } from "@/components/cloudinary-image";
import { ImageGrid } from "@/components/image-grid";

export default function AlbumGrid({ images }: { images: SearchResult[] }) {
  return (
    <ImageGrid
      images={images}
      getImage={(imagedata: SearchResult) => {
        return (
          <CloudinaryImage
            key={imagedata.public_id}
            imagedata={imagedata}
            width="400"
            height="300"
            alt="an image of something"
          />
        );
      }}
    />
  );
}
