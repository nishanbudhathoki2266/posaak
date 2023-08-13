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
            <div className="flex gap-2 justify-center">
              {images.map((image, i) => (
                <Image
                  alt={`Image ${i + 1} of ${product.name}`}
                  className="h-20 w-20 object-cover object-center rounded cursor-pointer"
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
                <span className="mr-3">Color</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${product.price}
              </span>
              <Button className="ml-auto" variant="primary">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
