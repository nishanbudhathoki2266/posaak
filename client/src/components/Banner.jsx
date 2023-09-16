import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
function Banner() {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-amber-50 rounded-lg overflow-hidden  mb-14 md:mb-24">
      {/* left side  */}
      <div className="flex gap-8 justify-center items-center flex-col">
        <h1 className="text-5xl font-bold uppercase tracking-tighter text-gray-800">
          Dashain is here
        </h1>
        <p className="text-sm text-center tracking-wide">
          Dashain Style, Dashain Savings at Posaak,
          <span className="block"> Explore our festive discounts today</span>
        </p>
        <button
          className="border-2 border-black py-2 px-6 tracking-wide font-bold uppercase hover:-translate-y-1 transition-transform ease-out duration-100"
          onClick={() => router.push("/products")}
        >
          Claim it
        </button>
      </div>
      {/* right side  */}
      <div className="relative aspect-square">
        <Image
          src="/images/durga.jpg"
          alt="dashain-banner"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Banner;
