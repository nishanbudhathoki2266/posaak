import Image from "next/legacy/image";
import { useRouter } from "next/router";
import React from "react";
function Banner({
  heading,
  paragraph,
  spanParagraph,
  src,
  imagePosition = "left",
  link = "/products",
}) {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-amber-50 rounded-lg overflow-hidden">
      {/* left side  */}
      <div
        className={`flex gap-4 justify-center items-center flex-col mb-4 p-4 ${
          imagePosition === "left" ? "md:order-last" : ""
        }`}
      >
        <h1 className="text-2xl lg:text-3xl font-bold uppercase tracking-tighter text-gray-800">
          {heading}
        </h1>
        <p className="text-sm text-center tracking-wide">
          {paragraph}
          <span className="block">{spanParagraph}</span>
        </p>
        <button
          className="border-2 border-black text-sm py-1 md:py-2 px-6 tracking-wide font-bold uppercase hover:-translate-y-1 transition-transform ease-out duration-100"
          onClick={() => router.push(link)}
        >
          Explore
        </button>
      </div>
      {/* right side  */}
      <div className="relative aspect-square">
        <Image src={src} alt="banner" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default Banner;
