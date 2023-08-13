import FeaturedProducts from "@/components/FeaturedProducts";
import Heading from "@/components/Heading";
import ProductCard from "@/components/ProductCard";
import { getAllProducts } from "@/utils/axios";

function AllProducts({ products }) {
  return (
    <section className="text-gray-600 px-5 py-8 body-font">
      <Heading position="center">All Products</Heading>
      <div className="container px-5 py-14 mx-auto">
        <div className="flex justify-center flex-wrap -m-4">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const products = await getAllProducts();

  return {
    props: {
      products: products.data.products,
    },
  };
}

export default AllProducts;
