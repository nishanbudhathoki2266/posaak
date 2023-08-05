import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="text-gray-600 body-font divide-y-4">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <a className="mr-5 hover:text-gray-900">Men</a>
          <a className="mr-5 hover:text-gray-900">Women</a>
          <a className="mr-5 hover:text-gray-900">Kids</a>
          <a className="hover:text-gray-900">Accessories</a>
        </nav>
        <Link href="/">
          <Image src="/logo.png" width={200} height={200} />
        </Link>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
