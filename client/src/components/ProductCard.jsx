import Image from "next/image";
function ProductCard() {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:scale-[1.02] transition-all ease-out cursor-pointer">
      <div className="block relative h-60 rounded overflow-hidden">
        <Image
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src="/hero.jpg"
          quality={90}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          CATEGORY
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          The Catalyzer
        </h2>
        <p className="mt-1">$16.00</p>
      </div>
    </div>
  );
}

export default ProductCard;
