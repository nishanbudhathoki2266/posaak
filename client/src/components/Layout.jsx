import React, { Fragment } from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

import { Open_Sans } from "next/font/google";

const archivo = Open_Sans({
  subsets: ["latin"],
  variable: "--font-archivo",
});

function Layout({ children }) {
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
