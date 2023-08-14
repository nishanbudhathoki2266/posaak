import Image from "next/image";
import Button from "./Button";
import { Fragment, useState } from "react";

function ProductDetail({ product }) {
  const images = product.images;

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap items-center justify-center">
          <div className="flex flex-col gap-2">
            <Image
              alt={`Image of ${product.name}`}
              className="w-full h-auto object-cover object-center rounded"
              src={`http://localhost:8080/img/products/${product.images[activeImageIndex]}`}
              width={350}
              height={350}
            />
            <div className="flex gap-4 justify-center">
              {images.map((image, i) => (
                <Image
                  key={i}
                  alt={`Image ${i + 1} of ${product.name}`}
                  className={`h-20 w-20 object-cover object-center rounded cursor-pointer ${
                    activeImageIndex === i
                      ? "ring-[3px] ring-offset-2 ring-[#67595E]"
                      : ""
                  }`}
                  src={`http://localhost:8080/img/products/${image}`}
                  width={350}
                  height={350}
                  onClick={() => setActiveImageIndex(i)}
                />
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              Category - {product.category.name}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.name}
            </h1>

            <p className="leading-relaxed">
              {product.description} Fam locavore kickstarter distillery. Mixtape
              chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO
              fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday
              carry +1 seitan poutine tumeric.
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                {product.colors.map((color) => {
                  const hexCode = color.hexCode;
                  return (
                    <button
                      style={{ backgroundColor: hexCode }}
                      key={color.name}
                      className={`border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none`}
                    ></button>
                  );
                })}
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                    {product.sizes.map((size) => (
                      <option key={size} value={size.toLowerCase()}>
                        {size}
                      </option>
                    ))}
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${product.price - product.priceDiscount}
              </span>
              <div className="ml-auto">
                <Button variant="primary">Add to Cart</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
