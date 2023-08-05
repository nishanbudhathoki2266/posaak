import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

function Header() {
  return (
    <header className="text-gray-600 body-font divide-y-4">
      <div className="container mx-auto flex flex-wrap p-4 flex-col sm:flex-row items-center">
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
          <div className="flex flex-row gap-4">
            <span className="relative">
              <AiOutlineShoppingCart className="cursor-pointer text-2xl" />
              <p className="text-md bg-orange-600 text-white rounded-full block text-center h-6 w-6 absolute top-[-21px] right-[-12px]">
                3
              </p>
            </span>
            <AiOutlineUser className="cursor-pointer text-2xl" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
