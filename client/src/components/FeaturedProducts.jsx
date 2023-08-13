import Heading from "./Heading";
import ProductCard from "./ProductCard";

function FeaturedProducts({ featuredProducts }) {
  return (
    <section className="text-gray-600 px-5 py-14 md:py-24 body-font">
      <Heading position="center">Featured Products</Heading>
      <div className="container px-5 py-14 mx-auto">
        <div className="flex flex-wrap -m-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
