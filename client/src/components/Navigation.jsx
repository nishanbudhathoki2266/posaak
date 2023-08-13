import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

function Navigation() {
  return (
    <header className="text-gray-600 border-b-2 fixed top-0 left-0 w-full bg-zinc-50">
      <div className="container mx-auto flex flex-wrap p-2 flex-col sm:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-sm md:ml-auto">
          <Link
            href="/"
            className="mr-5 hover:text-gray-900 tracking-widest font-light uppercase cursor-pointer"
          >
            Men
          </Link>
          <Link
            href="/"
            className="mr-5 hover:text-gray-900 tracking-widest font-light uppercase cursor-pointer"
          >
            Women
          </Link>
          <Link
            href="/"
            className="mr-5 hover:text-gray-900 tracking-widest font-light uppercase cursor-pointer"
          >
            Kids
          </Link>
          <Link
            href="/products"
            className="hover:text-gray-900 tracking-widest font-light uppercase cursor-pointer"
          >
            Shop
          </Link>
        </nav>
        <Link href="/">
          <Image
            src="/logo.png"
            width={200}
            height={150}
            alt="Logo of Posaak"
          />
        </Link>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <div className="flex flex-row gap-4 text-sm">
            <Link
              href="/"
              className="hover:text-gray-900 tracking-widest font-light uppercase cursor-pointer"
            >
              Login
            </Link>
            <Link
              href="/"
              className="hover:text-gray-900 tracking-widest font-light uppercase cursor-pointer"
            >
              Register
            </Link>
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

export default Navigation;
