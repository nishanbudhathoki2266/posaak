import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
function ProductCard({ product }) {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <div className="relative max-h-80 rounded overflow-hidden">
        <Image
          alt="ecommerce"
          className="object-cover object-center w-full h-full block hover:scale-[1.10] transition-all duration-500 ease-out"
          src={`http://localhost:8080/img/products/${product.images[0]}`}
          width={300}
          height={300}
        />
      </div>
      <div className="mt-4">
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
        <Link
          href={`/products/${product._id}`}
          className="text-[#67595E] mt-2 text-lg font-semibold inline-block hover:translate-x-1 duration-200"
        >
          View &rarr;
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
