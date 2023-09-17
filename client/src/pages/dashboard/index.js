import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillSetting } from "react-icons/ai";
import { BsCart, BsFillCartFill } from "react-icons/bs";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 grid grid-cols-[1fr_6fr]">
      {/* Sidebar */}
      <aside className="bg-white text-gray-800 py-8 px-2 shadow-lg">
        {/* Sidebar content */}
        <nav className="flex flex-col justify-center items-center gap-4">
          <Image
            src="/logo.png"
            alt="posaak logo"
            height={200}
            width={200}
            className=""
          />
          <ul className="flex flex-col gap-2">
            <li className="mb-2">
              <Link
                href="#"
                className="hover:bg-gray-500 text-lg font-semibold text-gray-500 flex justify-center items-center gap-4"
              >
                <AiFillSetting /> Dashboard
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="#"
                className="hover:bg-gray-500 text-lg font-semibold text-gray-500 flex justify-center items-center gap-4"
              >
                <BsFillCartFill className="font-bold" /> Orders
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="#"
                className="hover:bg-gray-500 text-lg font-semibold text-gray-500 flex justify-center items-center gap-4"
              >
                Products
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-4">
        {/* Page Title */}
        <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>

        {/* Content Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          {/* Add your dashboard content here */}
        </div>
      </main>
    </div>
  );
};

DashboardPage.getLayout = function getLayout(page) {
  return <>{page}</>;
};

export default DashboardPage;
