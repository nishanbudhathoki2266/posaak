import ProductDetail from "@/components/ProductDetail";
import { getFeaturedProducts, getProductById } from "@/utils/api";
import NotFoundPage from "../404";

function ProductDetailPage({ product }) {
  // In case fallback is set to true here
  if (product) {
    return (
      <div>
        <ProductDetail product={product} />
      </div>
    );
  } else {
    return <p>No product with that ID</p>;
  }
}

export async function getStaticProps(context) {
  const productId = context.params.id;

  const product = await getProductById(productId);

  return {
    props: {
      product: product.data.product,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const featuredProducts = await getFeaturedProducts();

  const paths = featuredProducts.data.featuredProducts.map((product) => ({
    params: { id: product._id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default ProductDetailPage;
