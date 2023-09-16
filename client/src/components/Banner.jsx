import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-amber-50 rounded-lg overflow-hidden">
      {/* left side  */}
      <div>SOME TEXTS</div>
      {/* right side  */}
      <div className="relative aspect-square">
        <Image
          src="/images/dashain-banner.jpg"
          alt="dashain-banner"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Banner;
