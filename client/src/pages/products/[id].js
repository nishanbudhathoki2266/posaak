import ProductDetail from "@/components/ProductDetail";
import { getFeaturedProducts, getProductById } from "@/utils/axios";

function ProductDetailPage({ product }) {
  // In case fallback is set to true here
  // if (!product) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div>
      <ProductDetail product={product} />
    </div>
  );
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
