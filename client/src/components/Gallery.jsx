import Image from "next/image";
import React from "react";
import Heading from "./Heading";

function Gallery() {
  return (
    <>
      <Heading>Happy Customers</Heading>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {/* Image one */}
        {Array.from({ length: 12 }, (_, index) => index + 1).map((img) => (
          <div
            className="relative aspect-square overflow-hidden rounded-lg"
            key={img}
          >
            <Image
              src={`/images/gallery/img-${img + 1}.jpg`}
              layout="fill"
              objectFit="cover"
              alt={`gallery image ${img + 1}`}
              className="hover:scale-[1.3] transition-transform ease-out duration-200"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Gallery;
