import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { AiFillHeart } from "react-icons/ai";
function ProductCard({ product }) {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-fullflex flex-col items-center">
      <div className="max-h-80 max-w-sm md:w-auto rounded overflow-hidden">
        <Image
          alt="ecommerce"
          className="object-cover object-center w-full h-full block hover:scale-[1.10] transition-all duration-500 ease-out"
          src={`http://localhost:8080/img/products/${product.images[0]}`}
          width={300}
          quality={100}
          height={300}
        />
      </div>
      <div className="mt-4 self-start">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          Category - {product.category.name}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {product.name}
        </h2>
        <p className="mt-1">
          <span className="mr-1">
            {product.priceDiscount > 0 && <del>${product.price}</del>}
          </span>
          $
          {product.priceDiscount
            ? product.price - product.priceDiscount
            : product.price}
        </p>
        <div className="flex items-center justify-between mt-2">
          <Link
            href={`/products/${product._id}`}
            className="text-[#67595E] text-lg font-semibold inline-block hover:translate-x-1 duration-200"
          >
            View &rarr;
          </Link>
          {/* Add to wishlist */}
          <AiFillHeart className={`text-red-600 text-3xl cursor-pointer`} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
