import React, { Fragment } from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

import { Open_Sans } from "next/font/google";
import { useSelector } from "react-redux";
import { getUserDetails } from "@/redux/reducerSlices/userSlice";
import AdminNavigation from "./AdminNavigation";
import Image from "next/image";

const archivo = Open_Sans({
  subsets: ["latin"],
  variable: "--font-archivo",
});

function Layout({ children }) {
  const { name, image, role } = useSelector(getUserDetails);

  if (role === "admin")
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
          <header className="bg-white py-3 flex justify-end items-center px-4 gap-2 shadow-lg">
            <Image
              src={`http://localhost:8080/img/users/${image}`}
              alt="User image"
              height={40}
              width={40}
              className="w-auto h-auto rounded-full"
            />
            <p className="text-sm font-semibold text-gray-600">{name}</p>
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
