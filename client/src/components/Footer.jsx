import React from "react";

function Footer() {
  return (
    <footer className="text-gray-600">
      <div className="container py-14 md:py-24  mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-bold text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800 hover:cursor-pointer">
                  Men
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 hover:cursor-pointer">
                  Women
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 hover:cursor-pointer">
                  Kids
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 hover:cursor-pointer">
                  Accessories
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-bold text-gray-900 tracking-widest text-sm mb-3">
              QUICK LINKS
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">About Us</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Career</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Our Franchises
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Give a feedback
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-bold text-gray-900 tracking-widest text-sm mb-3">
              ADDRESS
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  posaak@gmail.com
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Itahari</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">9810479027</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-bold text-gray-900 tracking-widest text-sm mb-3">
              SAILENT FEATURES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  D2D Delivery
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Made in Nepal
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Exchange and Refund
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2023 Posaak —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @Nishan Budhathoki
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            Designed and Developed by Nishan Budhathoki
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
