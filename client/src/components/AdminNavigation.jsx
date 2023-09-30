import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillBagFill, BsFillCartFill } from "react-icons/bs";

function AdminNavigation() {
  return (
    <nav>
      <Link href="/dashboard">
        <Image src="/logo.png" alt="Posaak Logo" height={80} width={150} />
      </Link>
      <ul className="flex flex-col py-4">
        <li className="hover:bg-gray-100 px-4 py-2">
          <Link
            href="/dashboard"
            className="text-xl font-semibold text-gray-500 inline-flex items-center gap-4"
          >
            <AiFillHome /> Home
          </Link>
        </li>
        <li className="hover:bg-gray-100 px-4 py-2">
          <Link
            href="/dashboard/orders"
            className="text-xl font-semibold text-gray-500 inline-flex items-center gap-4"
          >
            <BsFillCartFill className="font-bold" /> Orders
          </Link>
        </li>
        <li className="hover:bg-gray-100 px-4 py-2">
          <Link
            href="/dashboard/products"
            className="text-xl font-semibold text-gray-500 inline-flex items-center gap-4"
          >
            <BsFillBagFill /> Add Products
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default AdminNavigation;
