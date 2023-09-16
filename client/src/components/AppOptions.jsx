import React from "react";
import { BsApple, BsGooglePlay } from "react-icons/bs";

function AppOptions() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 pt-24 mx-auto flex items-center md:flex-row flex-col">
        <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
          <h2 className="text-sm font-semibold text-[#67595E] tracking-widest mb-1">
            Posaak! now on portables
          </h2>
          <h1 className="md:text-3xl text-2xl font-medium text-gray-900">
            Download now and get the best experience
          </h1>
        </div>
        <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
          <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
            <BsGooglePlay />
            <span className="ml-4 flex items-start flex-col leading-none">
              <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
              <span className="title-font font-medium">Google Play</span>
            </span>
          </button>
          <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
            <BsApple />
            <span className="ml-4 flex items-start flex-col leading-none">
              <span className="text-xs text-gray-600 mb-1">
                Download on the
              </span>
              <span className="title-font font-medium">Apple Store</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default AppOptions;
