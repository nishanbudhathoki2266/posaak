import Image from "next/image";
import React from "react";

function Gallery() {
  return (
    <div className="mt-14 grid grid-cols-4 gap-4">
      {/* Image one */}
      {Array.from({ length: 7 }, (_, index) => index + 1).map((img) => (
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={`/images/gallery/img-${img + 1}.jpg`}
            layout="fill"
            objectFit="cover"
            alt={`gallery image ${img + 1}`}
            className="hover:scale-110 transition-transform ease-out duration-200"
          />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
