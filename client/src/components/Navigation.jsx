import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

function Navigation() {
  return (
    <header className="text-black-600 p-6 border-b-[1px] border-b-black ">
      <div className="container mx-auto flex flex-wrap justify-around items-center gap-6 md:gap-0">
        <nav className="flex flex-wrap items-center text-sm">
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
        <Link href="/" className="hidden md:block">
          <Image
            src="/logo.png"
            alt="Logo of Posaak"
            width={150}
            height={150}
          />
        </Link>

        <div className="flex flex-row items-center justify-center gap-4 text-sm">
          <Link
            href="/auth/login"
            className="hover:text-gray-900 tracking-widest font-light uppercase cursor-pointer"
          >
            Login
          </Link>
          <Link
            href="/auth/register"
            className="hover:text-gray-900 tracking-widest font-light uppercase cursor-pointer"
          >
            Register
          </Link>
          <span className="relative">
            <AiOutlineShoppingCart className="cursor-pointer text-2xl" />
            <p className="text-md bg-orange-600 text-white rounded-full text-center flex items-center justify-center h-6 w-6 absolute top-[-21px] right-[-12px]">
              3
            </p>
          </span>
          <AiOutlineUser className="cursor-pointer text-2xl" />
        </div>
      </div>
    </header>
  );
}

export default Navigation;
