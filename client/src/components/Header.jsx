import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="text-gray-600 body-font divide-y-4">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <Link
            href="/"
            className="mr-5 hover:text-gray-900 font-light uppercase cursor-pointer"
          >
            Men
          </Link>
          <a className="mr-5 hover:text-gray-900 font-light uppercase cursor-pointer">
            Women
          </a>
          <a className="mr-5 hover:text-gray-900 font-light uppercase cursor-pointer">
            Kids
          </a>
          <a className="hover:text-gray-900 font-light uppercase cursor-pointer">
            Accessories
          </a>
        </nav>
        <Link href="/">
          <Image
            src="/logo.png"
            width={200}
            height={200}
            alt="Logo of Posaak"
          />
        </Link>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Button
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
