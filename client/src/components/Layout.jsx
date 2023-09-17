import React, { Fragment } from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

import { Open_Sans } from "next/font/google";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, logOut } from "@/redux/reducerSlices/userSlice";
import AdminNavigation from "./AdminNavigation";
import Image from "next/image";
import { AiOutlineLogout } from "react-icons/ai";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const archivo = Open_Sans({
  subsets: ["latin"],
  variable: "--font-archivo",
});

function Layout({ children }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { name, image, role } = useSelector(getUserDetails) || {};

  if (role && role === "admin")
    return (
      <section className="min-h-screen bg-gray-100 grid grid-cols-[1fr_6fr]">
        <style jsx global>{`
          html {
            font-family: ${archivo.style.fontFamily};
          }
        `}</style>
        <aside className="bg-white text-gray-800 py-8 px-2 shadow-lg">
          <AdminNavigation />
        </aside>
        <main>
          <header className="bg-white py-3 flex justify-end items-center px-6 gap-2 shadow-lg">
            <Image
              src={`http://localhost:8080/img/users/${image}`}
              alt="User image"
              height={40}
              width={40}
              className="w-auto h-auto rounded-full cursor-pointer"
              onClick={() => router.push("/profile")}
            />
            <p className="text-sm font-semibold text-gray-600">{name}</p>
            <AiOutlineLogout
              className="font-bold text-red-700 text-2xl cursor-pointer"
              onClick={() => {
                router.push("/auth/login");
                toast.success("Logged out!");
                dispatch(logOut());
              }}
            />
          </header>
          {children}
        </main>
      </section>
    );

  return (
    <Fragment>
      <style jsx global>{`
        html {
          font-family: ${archivo.style.fontFamily};
        }
      `}</style>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
