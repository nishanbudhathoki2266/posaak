import React from "react";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div>
      <h1>Nav</h1>
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
