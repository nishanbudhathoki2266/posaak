import Error from "@/components/Error";
import Heading from "@/components/Heading";
import Loader from "@/components/Loader";
import ProductCard from "@/components/ProductCard";
import { getAllProducts } from "@/utils/api";

function AllProducts(props) {
  // Error handling
  if (props.error) return <Error error={props.error} />;

  // If no error
  const { products } = props;

  return (
    <section className="text-gray-600 px-5 py-8 body-font">
      <Heading position="center">All Products</Heading>
      <div className="container px-5 py-10 mx-auto">
        <div className="flex justify-center flex-wrap -m-4">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}

          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}

          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}

          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export async function getServerSideProps() {
  try {
    const products = await getAllProducts();
    return {
      props: {
        products: products.data.products,
      },
    };
  } catch (err) {
    return {
      props: {
        error: "Failed to fetch",
      },
    };
  }
}

export default AllProducts;
