import Heading from "./Heading";
import ProductCard from "./ProductCard";

function FeaturedProducts() {
  return (
    <section className="text-gray-600 px-5 py-14 md:py-24 body-font">
      <Heading position="center">Featured Products</Heading>
      <div className="container px-5 py-14 mx-auto">
        <div className="flex flex-wrap -m-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
